<script lang="ts">
	import VirtualList from 'svelte-virtual-list-ce';
	import { items } from '$lib';
</script>

<h1>gitbreaker222/svelte-virtual-list (svelte-virtual-list-ce)</h1>

<VirtualList {items} let:item>{item}</VirtualList>
