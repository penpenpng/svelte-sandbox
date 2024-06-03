<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>SSR</h1>

<p>{data.event?.content}</p>
