<script lang="ts">
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';

	let friends = liveQuery(() => db.friends.toArray());
</script>

<ul>
	{#each $friends ?? [] as friend (friend.id)}
		<li>{friend.id}: {friend.name}, {friend.age}</li>
	{/each}
</ul>
