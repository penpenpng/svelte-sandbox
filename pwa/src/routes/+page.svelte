<script lang="ts">
	import { onMount } from 'svelte';
	import jsQR from 'jsqr';

	let video: HTMLVideoElement | undefined;

	let canvas: HTMLCanvasElement | undefined;
	let ctx: CanvasRenderingContext2D | null;

	onMount(async () => {
		if (video === undefined) {
			return;
		}
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: { facingMode: { exact: 'environment' } }
		});
		video.srcObject = stream;
		video.onloadedmetadata = (e) => {
			video?.play();
			checkImage();
		};
	});

	function checkImage() {
		if (canvas === undefined || ctx === null || video === undefined) {
			return;
		}

		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		const imageDate = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const code = jsQR(imageDate.data, canvas.width, canvas.height);
		if (code === null) {
			setTimeout(() => checkImage(), 200);
		} else {
			alert(code.data);
		}
	}
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

<video bind:this={video} autoplay playsinline />

<style>
	video {
		width: 100%;
		height: 100%;
		object-fit: fill;
		background-color: aliceblue;
	}
</style>
