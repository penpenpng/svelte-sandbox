<script lang="ts">
	import { rxNostr } from '$lib/Constants';
	import type { Event } from 'nostr-typedef';
	import { createRxBackwardReq, uniq } from 'rx-nostr';
	import { onDestroy, onMount } from 'svelte';

	const events = new Map<string, Event>();

	const req = createRxBackwardReq();
	const subscription = rxNostr
		.use(req)
		.pipe(uniq())
		.subscribe({
			next: ({ event, from }) => {
				console.log(from, event);
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
