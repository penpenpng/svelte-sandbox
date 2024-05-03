<script lang="ts">
	let content = '';
</script>

<main>
	<h1>Autocomplete</h1>

	<section>
		<textarea bind:value={content}></textarea>
		<p>{content}</p>
	</section>
</main>

<style>
	main {
		margin: 0 auto;
		max-width: 800px;
	}

	h1 {
		text-align: center;
	}

	section {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 20rem;
	}

	textarea,
	p {
		width: 40%;
	}
</style>
