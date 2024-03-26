<script lang="ts">
	import VirtualScrollList from 'svelte-virtual-scroll-list';
	import { items } from '$lib';
</script>

<h1>v1ack/svelte-virtual-scroll-list</h1>

<VirtualScrollList data={items} key="i" let:data pageMode={true} keeps={50}>
	<div slot="header">This is a header set via slot</div>
	<div>{data.i}</div>
	<div slot="footer">This is a footer set via slot</div>
</VirtualScrollList>
