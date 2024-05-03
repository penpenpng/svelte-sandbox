import type { RequestHandler } from '@sveltejs/kit';

let i = 0;

export const GET: RequestHandler = async ({ url }) => {
	i++;
	return new Response(JSON.stringify(i));
};
