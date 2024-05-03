import { NostrFetcher } from "nostr-fetch";

export const relays = [
	'wss://yabu.me/',
	'wss://nos.lol/',
	'wss://r.kojira.io/',
	// 'wss://nostream.ocha.one/',
	'wss://relay-jp.nostr.wirednet.jp/',
	'wss://nostr.holybea.com/',
	'wss://nostrja-kari.heguro.com/',
	'wss://relay.nostr.band/',
	'wss://nostr.fediverse.jp/',
	'wss://relay-jp.nostr.moctane.com/',
	'wss://nrelay-jp.c-stellar.net/',
	'wss://riray.nostr1.com/',
	'wss://ren.nostr1.com/',
	'wss://nostr.mom/'
];

export const fetcher = NostrFetcher.init();