<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const { default: Tribute } = await import('tributejs');

		var tribute = new Tribute({
			values: [
				{ key: 'Phil Heartman', value: 'pheartman' },
				{ key: 'Gordon Ramsey', value: 'gramsey' }
			]
		});
		const textarea = document.getElementById('example');
		if (textarea !== null) {
			tribute.attach(textarea);
		}
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<textarea id="example" />
