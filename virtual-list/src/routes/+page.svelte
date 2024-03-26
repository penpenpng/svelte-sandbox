<script lang="ts">
	// import VirtualList from '@sveltejs/svelte-virtual-list';
	// import TinyVirtualList from 'svelte-tiny-virtual-list';
	// import {List, ListItem} from 'framework7-svelte';

	// let start: number;
	// let end: number;
	// $: console.log(start, end);
</script>

<ul>
	<li>
		<a href="/svelte-virtual-list">sveltejs/svelte-virtual-list (@sveltejs/svelte-virtual-list)</a>
		<span>（要 height 指定）</span>
	</li>
	<li>
		<a href="/svelte-virtual-list-ce">gitbreaker222/svelte-virtual-list (svelte-virtual-list-ce)</a>
		<span>（同上）</span>
	</li>
	<li>
		<a href="/svelte-virtual-scroll-list">v1ack/svelte-virtual-scroll-list</a>
		<span>（件数指定）</span>
	</li>
</ul>

<article>
	<!-- <section>
        <h2>Normal</h2>
        <ul>
            {#each list as {i} (i)}
                <li>{i}</li>
            {/each}
        </ul>
    </section> -->
	<!-- <section>
		<h2>Skayo/svelte-tiny-virtual-list</h2>
        <TinyVirtualList height={600} itemCount={list.length} itemSize={10}>
            <div slot="item" let:index let:style {style}>
            {list[index]}, Row: #{index}</div>
        </TinyVirtualList>
	</section> -->
	<!-- <section>
        <h2>Framework7</h2>
        <List virtualList>
            <ul>
                {#each list as {i} (i)}
                    <ListItem></ListItem>
                {/each}
            </ul>
        </List>
    </section> -->
</article>

<style>
	article {
		display: flex;
		flex-direction: row;
	}

	section {
		width: 50%;
	}
</style>
