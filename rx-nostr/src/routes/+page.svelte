<script lang="ts">
	import { createRxBackwardReq, createRxNostr } from 'rx-nostr';
	import { onMount } from 'svelte';

	const relays = ['wss://yabu.me/', 'wss://nos.lol/'];

	const rxNostr = createRxNostr();
	const rxReq = createRxBackwardReq();

	rxNostr.use(rxReq).subscribe((packet) => {
		console.log('[packet]', packet);
	});

	onMount(async () => {
		rxNostr.setDefaultRelays(relays);

		console.log('[emit]', rxNostr.getAllRelayState());
		rxReq.emit([
			{
				kinds: [0],
				limit: 1
			}
		]);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	<li>
		<a href="/reconnect">Reconnect</a>
	</li>
	<li>
		<a href="/yield">Yield</a>
	</li>
</ul>
