<script lang="ts">
    // import VirtualList from '@sveltejs/svelte-virtual-list';
    // import TinyVirtualList from 'svelte-tiny-virtual-list';
    import VirtualScrollList from "svelte-virtual-scroll-list";
    // import {List, ListItem} from 'framework7-svelte';

	const list = Array.from({ length: 100000 }, (_, i) => {
		return { i };
	});

    // let start: number;
    // let end: number;
    // $: console.log(start, end);
</script>

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
		<h2>sveltejs/svelte-virtual-list</h2>
        <VirtualList height="500px" items={list} let:item bind:start bind:end>
            <p>{item.i}</p>
        </VirtualList>
	</section> -->
	<!-- <section>
		<h2>Skayo/svelte-tiny-virtual-list</h2>
        <TinyVirtualList height={600} itemCount={list.length} itemSize={10}>
            <div slot="item" let:index let:style {style}>
            {list[index]}, Row: #{index}</div>
        </TinyVirtualList>
	</section> -->
	<section>
		<h2>v1ack/svelte-virtual-scroll-list</h2>
        <VirtualScrollList data={list} key="i" let:data pageMode={true} keeps={50}>
            <div slot="header">
                This is a header set via slot
            </div>
            <div>{data.i}</div>
            <div slot="footer">
                This is a footer set via slot
            </div>
        </VirtualScrollList>
	</section>
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
