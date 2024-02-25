import WebSocket from 'ws';
import { createRxBackwardReq, createRxNostr } from 'rx-nostr';

const relays = ['wss://yabu.me/'];

const rxNostr = createRxNostr({ websocketCtor: WebSocket });
rxNostr.setDefaultRelays(relays);

const rxReq = createRxBackwardReq();
rxNostr.use(rxReq).subscribe({
    next: (packet) => {
        console.log(packet);
    },
    complete: () => {
        console.log('complete');
    }
});

rxReq.emit([
    {
        kinds: [0],
        limit: 1
    }
]);
rxReq.over();
