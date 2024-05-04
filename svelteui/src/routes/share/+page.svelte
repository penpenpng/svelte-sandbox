<script lang="ts">
	async function share(): Promise<void> {
		const data: ShareData = { url: 'https://example.com/', title: 'title' };
		console.log('[share]', data);
		if (navigator.canShare !== undefined && navigator.canShare(data)) {
			await navigator.share(data);
		}
	}
</script>

<h1>Share</h1>

<button on:click={share}>Share</button>
