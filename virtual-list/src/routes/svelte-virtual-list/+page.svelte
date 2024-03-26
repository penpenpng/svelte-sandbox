<script lang="ts">
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import { items } from '$lib';
</script>

<h1>sveltejs/svelte-virtual-list (@sveltejs/svelte-virtual-list)</h1>

<VirtualList {items} height="100px" let:item>{item.i}</VirtualList>
