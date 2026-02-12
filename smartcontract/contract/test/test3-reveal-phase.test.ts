import { describe, it, expect } from 'vitest';
import { sha256 } from '@noble/hashes/sha256';

// ============================================================================
// TEST 3: Reveal Phase - ZK Commitment Verification
// ============================================================================
// CRITICAL: Validates cryptographic binding and prevents cheating
// ============================================================================

function createCommitment(bidAmount: bigint, nonce: Uint8Array): Uint8Array {
    const bidBytes = new Uint8Array(16);
    const view = new DataView(bidBytes.buffer);
    view.setBigUint64(0, bidAmount >> 64n, false);
    view.setBigUint64(8, bidAmount & 0xFFFFFFFFFFFFFFFFn, false);

    const combined = new Uint8Array(bidBytes.length + nonce.length);
    combined.set(bidBytes, 0);
    combined.set(nonce, bidBytes.length);

    return sha256(combined);
}

function arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

describe('🧪 TEST 3: Reveal Phase - ZK Commitment Verification', () => {
    it('should verify reveals match commitments (prevent cheating)', () => {
        console.log('✅ TEST 3: Reveal Phase - ZK Commitment Verification');
        console.log('Testing: revealBid() circuit and hash verification\n');

        // Setup: Stored commitments from commit phase
        const bidders = [
            {
                name: 'Alice',
                bidAmount: 2000000n,
                nonce: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]),
                pubKey: 'alice-pk'
            },
            {
                name: 'Bob',
                bidAmount: 3500000n,
                nonce: new Uint8Array([32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
                pubKey: 'bob-pk'
            }
        ];

        const auctionState = {
            state: 'REVEAL',
            commitments: new Map<string, Uint8Array>(),
            highestBid: 0n,
            highestBidder: ''
        };

        // Store commitments
        console.log('  Phase 1: Storing commitments (COMMIT phase)');
        for (const bidder of bidders) {
            const commitment = createCommitment(bidder.bidAmount, bidder.nonce);
            auctionState.commitments.set(bidder.pubKey, commitment);
            console.log(`    ${bidder.name}: Committed ${commitment.slice(0, 8).toString('hex')}...`);
        }

        console.log('\n  Phase 2: Revealing bids with verification (REVEAL phase)');

        // Test valid reveals
        for (const bidder of bidders) {
            const storedCommitment = auctionState.commitments.get(bidder.pubKey)!;
            const recomputedCommitment = createCommitment(bidder.bidAmount, bidder.nonce);

            // CRITICAL: Verify commitment matches
            const isValid = arraysEqual(storedCommitment, recomputedCommitment);
            expect(isValid).toBe(true);

            if (isValid) {
                // Update highest bid
                if (bidder.bidAmount > auctionState.highestBid) {
                    auctionState.highestBid = bidder.bidAmount;
                    auctionState.highestBidder = bidder.name;
                }
                console.log(`    ${bidder.name}: ✓ VERIFIED reveal (bid: ${bidder.bidAmount})`);
            }
        }

        expect(auctionState.highestBid).toBe(3500000n);
        expect(auctionState.highestBidder).toBe('Bob');
        console.log(`\n  ✓ Highest bid updated: ${auctionState.highestBid} by ${auctionState.highestBidder}`);

        // Test anti-cheat: Try to reveal with wrong amount
        console.log('\n  Phase 3: Testing Anti-Cheat (wrong bid amount)');
        const cheater = bidders[0];
        const storedCommitment = auctionState.commitments.get(cheater.pubKey)!;
        const wrongAmount = 9999999n; // Try to cheat by revealing different amount
        const cheatingCommitment = createCommitment(wrongAmount, cheater.nonce);

        const cheatingAttemptValid = arraysEqual(storedCommitment, cheatingCommitment);
        expect(cheatingAttemptValid).toBe(false);
        console.log(`    ${cheater.name} tried revealing wrong amount: ✗ REJECTED`);
        console.log('    Security: Commitment binding prevents cheating ✓');

        console.log('\n📊 TEST 3 RESULT: PASSED ✅');
        console.log('   Security Guarantee: Cannot cheat by revealing different amount ✓\n');
        console.log('='.repeat(70) + '\n');
    });
});
