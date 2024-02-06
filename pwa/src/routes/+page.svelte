<script lang="ts">
	import { onMount } from 'svelte';

	let video: HTMLVideoElement | undefined;

	onMount(async () => {
		if (video === undefined) {
			return;
		}
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: { facingMode: { exact: 'environment' } }
		});
		video.srcObject = stream;
		video.onloadedmetadata = (e) => {
			video?.play();
		};
	});
</script>

<svelte:head>
	<style>
		html,
		body {
			margin: 0;
			padding: 0;
			width: 100%;
			height: 80%;
		}
	</style>
</svelte:head>

<h1>PWA Sandbox</h1>

<div>{JSON.stringify(video)}</div>

<video bind:this={video} autoplay />

<style>
	video {
		width: 100%;
		height: 100%;
		object-fit: fill;
		background-color: aliceblue;
	}
</style>
