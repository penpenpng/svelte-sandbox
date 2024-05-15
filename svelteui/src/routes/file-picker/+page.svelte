<script lang="ts">
	let files: FileList | undefined;
</script>

<h1>File picker</h1>

<input type="file" multiple={true} bind:files accept="image/*" />

{#if files !== undefined}
	<ul>
		{#each [...files] as file}
			<li>
				<span>{file.name}</span>
				<span>({new Date(file.lastModified).toLocaleString()})</span>
			</li>
		{/each}
	</ul>
{/if}
