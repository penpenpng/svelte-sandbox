<script lang="ts">
	import { onMount } from 'svelte';

	let textarea: HTMLTextAreaElement;

	onMount(async () => {
		const { default: Tribute } = await import('tributejs');

		var tribute = new Tribute({
			values: [
				{ key: 'Phil Heartman', value: 'pheartman' },
				{ key: 'Gordon Ramsey', value: 'gramsey' }
			]
		});
		tribute.attach(textarea);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<textarea bind:this={textarea} />
