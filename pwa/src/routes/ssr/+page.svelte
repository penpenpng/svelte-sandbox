<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: content = data.event?.content;
</script>

<svelte:head>
	<meta property="og:title" {content} />
	<meta property="og:type" content="website" />
</svelte:head>

<h1>SSR</h1>

<p>{content}</p>
