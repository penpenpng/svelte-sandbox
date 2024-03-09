<script lang="ts">
	import { onMount } from 'svelte';

	const url = 'https://example.com';
	const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;

	onMount(async () => {
		const response = await fetch(proxyUrl);
		const html = await response.text();
		const domParser = new DOMParser();
		const dom = domParser.parseFromString(html, 'text/html');
		console.log(dom);
		console.log(
			Object.fromEntries(
				[...dom.head.children]
					.filter(
						(element) =>
							element.tagName === 'META' && element.getAttribute('property')?.startsWith('og:')
					)
					.map((element) => {
						return [element.getAttribute('property'), element.getAttribute('content')];
					})
			)
		);
		console.log(
			Object.fromEntries(
				[...dom.head.children]
					.filter(
						(element) =>
							element.tagName === 'META' && element.getAttribute('name')?.startsWith('twitter:')
					)
					.map((element) => {
						return [element.getAttribute('name'), element.getAttribute('content')];
					})
			)
		);
	});
</script>
