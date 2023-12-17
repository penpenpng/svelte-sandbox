<script lang="ts">
	import { batch, createRxBackwardReq, createRxNostr } from 'rx-nostr';
	import { bufferTime } from 'rxjs';
	import { onMount } from 'svelte';

	const rxNostr = createRxNostr();
	const rxReq = createRxBackwardReq();

	// // OK
	// rxNostr.use(rxReq).subscribe((packet) => {
	// 	console.log('[packet]', packet);
	// });

	// NG
	rxNostr.use(rxReq.pipe(bufferTime(1000, null, 10), batch())).subscribe((packet) => {
		console.log('[packet]', packet);
	});

	onMount(async () => {
		await rxNostr.switchRelays(['wss://yabu.me/']);

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
