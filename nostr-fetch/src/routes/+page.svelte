<script lang="ts">
	import { NostrFetcher } from 'nostr-fetch';
	import { onMount } from 'svelte';

	const numberOfPubkeys = 30;
	const relayUrls = ['wss://nostr-relay.nokotaro.com/'];
	const pubkey = '087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e';

	onMount(async () => {
		const fetcher = NostrFetcher.init();

		const contacts = await fetcher.fetchLastEvent(
			relayUrls,
			{
				kinds: [3],
				authors: [pubkey]
			},
			{}
		);
		if (contacts === undefined) {
			return;
		}
		const followees = [...new Set(contacts.tags.map(([, pubkey]) => pubkey))];
		console.log('[followees]', followees.length);

		const iterator = fetcher.fetchLatestEventsPerAuthor(
			{ authors: randomArray(followees, numberOfPubkeys), relayUrls },
			{ kinds: [1] },
			20
		);
		for await (const { author, events } of iterator) {
			console.log(author, events.length);
		}

		fetcher.shutdown();

		console.log('[complete]');
	});

	function randomArray<T>(array: T[], count: number) {
		return Array.from(
			{ length: count },
			(_v, _k) => array[Math.floor(Math.random() * array.length)]
		);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
