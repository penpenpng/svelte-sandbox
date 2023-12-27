<script lang="ts">
	import { db } from '$lib/db';

	let id = 0;
	let name = '';
	let age = 10;

	async function add(): Promise<void> {
		try {
			id = await db.friends.add({
				name,
				age
			});
		} catch (error) {}
	}
</script>

<form on:submit|preventDefault={add}>
	<input type="text" bind:value={name} />
	<input type="number" bind:value={age} />
	<input type="submit" />
</form>

<div>{id}</div>
