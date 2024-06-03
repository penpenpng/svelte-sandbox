<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<meta property="og:title" content={data.event?.content} />
	<meta property="og:type" content="website" />
</svelte:head>

<h1>SSR</h1>

<p>{data.event?.content}</p>
