import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: 'generateSW',
			manifest: {
				name: 'Svelte-PWA',
				short_name: 'Svelte-PWA',
				description: 'Svelte PWA example',
				theme_color: '#ffffff',
				icons: [
					{
						src: '192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
			devOptions: {
				enabled: true
			}
		})
	]
});
