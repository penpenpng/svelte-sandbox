<script lang="ts">
	import { fetcher, relays } from '$lib/Constants';
	import { onMount } from 'svelte';

	onMount(async () => {
		const events = await fetcher.fetchLatestEvents(relays, {}, 100);
		for (const event of events) {
			console.log(event);
		}
	});
</script>

<h1>Performance</h1>

<a href="/">Top</a>
