import { error, type RequestHandler } from '@sveltejs/kit';
import { createRxNostr, createRxOneshotReq, latest, uniq } from 'rx-nostr';
import { WebSocket } from 'ws';

const relays = ['wss://yabu.me/'];

const rxNostr = createRxNostr({ websocketCtor: WebSocket });
rxNostr.setDefaultRelays(relays);

export const GET: RequestHandler = async () => {
	const event = await new Promise((resolve) => {
		const rxReq = createRxOneshotReq({
			filters: [
				{
					kinds: [0],
					limit: 1
				}
			]
		});
		rxNostr
			.use(rxReq)
			.pipe(uniq(), latest())
			.subscribe({
				next: (packet) => {
					console.log('[next]', packet);
					resolve(packet.event);
				},
				complete: () => {
					console.log('[complete]');
					resolve(undefined);
				},
				error: (error) => {
					console.error('[error]', error);
					resolve(undefined);
				}
			});
	});
	if (event === undefined) {
		error(404);
	}
	return new Response(JSON.stringify(event));
};
