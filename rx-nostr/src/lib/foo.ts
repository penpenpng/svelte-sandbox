import { createRxNostr } from 'rx-nostr';
import { createVerificationServiceClient } from 'rx-nostr-crypto';

const verificationClient = createVerificationServiceClient();

const rxNostr = createRxNostr({
	verifier: verificationClient.verify
});
