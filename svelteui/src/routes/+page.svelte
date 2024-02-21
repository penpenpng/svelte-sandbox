<script lang="ts">
	import { Menu } from '@svelteuidev/core';
	import IconRepeat from '@tabler/icons-svelte/dist/svelte/icons/IconRepeat.svelte';
	import IconQuote from '@tabler/icons-svelte/dist/svelte/icons/IconQuote.svelte';

	let items = [0];

	setInterval(() => {
		items.unshift(items.length);
		items = items;
	}, 1000);
</script>

<h1>SvelteUI</h1>
<ul>
	{#each items as item (item)}
		<li>
			<div>{item}</div>
			<Menu>
				<svelte:fragment slot="control">
					<IconRepeat></IconRepeat>
				</svelte:fragment>
				{#if item % 2 === 0}
					<Menu.Label>App</Menu.Label>
				{/if}
				<Menu.Item icon={IconRepeat} on:click={() => console.log('repost', item)}>Repost</Menu.Item>
				<Menu.Item icon={IconQuote}>Quote</Menu.Item>
			</Menu>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li + li {
		border-top: 1px solid lightgray;
	}

	:global(.svelteui-Menu-body) {
		padding: 0;
		width: 8rem;
	}
</style>
