<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let url = '';

	onMount(() => {
		url = $page.url.searchParams.get('url') ?? '';
	});
</script>

<h1>Shared</h1>

<p>{url}</p>

<a href="/">Top</a>
