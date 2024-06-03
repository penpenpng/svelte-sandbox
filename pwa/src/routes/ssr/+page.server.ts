import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { createRxBackwardReq, createRxNostr, uniq } from 'rx-nostr';
import WebSocket from 'ws';
import { firstValueFrom } from 'rxjs';
import { nip19 } from 'nostr-tools';

const rxNostr = createRxNostr({ websocketCtor: WebSocket });
rxNostr.setDefaultRelays(['wss://yabu.me/'])

export const load: PageServerLoad = async ({ url }) => {
	console.log('[ssr server load]', url);

	const nevent = url.searchParams.get('nevent');
	if (nevent === null) {
		error(404);
		return;
	}

	let id: string;

	try {
		const { type, data } = nip19.decode(nevent);
		if (type !== 'nevent') {
			throw new Error();
		}
		id = data.id;
	} catch (e) {
		error(400);
		return;
	}

    console.log('[id]', id);

	try {
		const req = createRxBackwardReq();
		const promise = firstValueFrom(rxNostr.use(req).pipe(uniq()));
		req.emit([{ ids: [id] }]);
		req.over();
		return await promise;
	} catch (e) {
		error(404);
	}
};
