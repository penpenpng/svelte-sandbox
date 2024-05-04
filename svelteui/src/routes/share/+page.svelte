<script lang="ts">
	async function share(): Promise<void> {
		const data: ShareData = { url: 'https://example.com/', title: 'title' };
		console.log('[share]', data);
		if (navigator.canShare !== undefined && navigator.canShare(data)) {
			await navigator.share(data);
		}
	}

	async function copy() {
		await navigator.clipboard.writeText('https://example.com/copy');
	}
</script>

<h1>Share</h1>

{#if navigator.canShare !== undefined}
	<button on:click={share}>Share</button>
{:else}
	<button on:click={copy}>Copy</button>
{/if}
