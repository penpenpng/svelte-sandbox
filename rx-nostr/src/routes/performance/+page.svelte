<script lang="ts">
	import { relays } from '$lib/Constants';
	import { createRxBackwardReq, createRxNostr } from 'rx-nostr';
	import { onMount } from 'svelte';

	const rxNostr = createRxNostr();
	rxNostr.setDefaultRelays(relays);
	const req = createRxBackwardReq();
	rxNostr.use(req).subscribe(({ event, from }) => {
		console.log(from, event);
	});

	onMount(() => {
		req.emit([{ limit: 100 }]);
		req.over();
	});
</script>

<h1>Performance</h1>

<a href="../">..</a>
