<script lang="ts">
	import { onMount } from 'svelte';

	let dialog: HTMLDialogElement;
	let textarea: HTMLTextAreaElement;

	onMount(async () => {
		const { default: Tribute } = await import('tributejs');

		const tribute = new Tribute({
			values: [
				{ key: 'Phil Heartman', value: 'pheartman' },
				{ key: 'Gordon Ramsey', value: 'gramsey' }
			]
		});
		tribute.attach(textarea);
		dialog.showModal();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<dialog bind:this={dialog}>
	<textarea bind:this={textarea} />
</dialog>
