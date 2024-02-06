<script lang="ts">
	import { onMount } from 'svelte';

	let video: HTMLVideoElement | undefined;

	onMount(async () => {
		console.log('[on mount]');
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
			height: 100%;
		}
	</style>
</svelte:head>

<h1>PWA Sandbox</h1>

<video bind:this={video} class="reader-video" autoplay />

<style>
	video {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
</style>
