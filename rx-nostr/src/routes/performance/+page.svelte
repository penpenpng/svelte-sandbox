<script lang="ts">
	import type { Event } from 'nostr-typedef';
	import { createRxBackwardReq, createRxNostr, uniq } from 'rx-nostr';
	import { createVerificationServiceClient, verifier } from 'rx-nostr-crypto';
	import { onDestroy, onMount } from 'svelte';

	const events = new Map<string, Event>();

	const verificationClient = createVerificationServiceClient();
	const rxNostr = createRxNostr({
		connectionStrategy: 'lazy-keep',
		verifier: verificationClient.verify
		// verifier: verifier
	});

	rxNostr.setDefaultRelays([
		// 'wss://yabu.me/',
		'wss://nos.lol/',
		'wss://r.kojira.io/',
		// 'wss://nostream.ocha.one/',
		'wss://relay-jp.nostr.wirednet.jp/',
		'wss://nostr.holybea.com/',
		// 'wss://nostrja-kari.heguro.com/',
		'wss://relay.nostr.band/',
		'wss://nostr.fediverse.jp/',
		// 'wss://relay-jp.nostr.moctane.com/',
		'wss://nrelay-jp.c-stellar.net/',
		'wss://riray.nostr1.com/',
		'wss://ren.nostr1.com/',
		'wss://nostr.mom/'
	]);

	const req = createRxBackwardReq();
	const subscription = rxNostr
		.use(req)
		.pipe(uniq())
		.subscribe({
			next: ({ event, from }) => {
				console.log('ok', from, event.id);
				events.set(event.id, event);
			},
			complete: () => console.log('[count]', events.size)
		});

	onMount(() => {
		console.log('[on mount]');
		req.emit([{ limit: 100 }]);
		req.over();
	});

	onDestroy(() => {
		console.log('[on destroy]');
		subscription.unsubscribe();
	});
</script>

<h1>Performance</h1>

<a href="/">Top</a>
