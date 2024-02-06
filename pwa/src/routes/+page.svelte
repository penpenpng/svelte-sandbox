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

<div class="reader">
	<video bind:this={video} class="reader-video" autoplay />
</div>
