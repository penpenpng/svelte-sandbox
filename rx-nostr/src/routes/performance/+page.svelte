<script lang="ts">
	import { rxNostr } from '$lib/Constants';
	import { createRxBackwardReq, uniq } from 'rx-nostr';
	import { onDestroy, onMount } from 'svelte';

	const req = createRxBackwardReq();
	const subscription = rxNostr
		.use(req)
		.pipe(uniq())
		.subscribe(({ event, from }) => {
			console.log(from, event);
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
