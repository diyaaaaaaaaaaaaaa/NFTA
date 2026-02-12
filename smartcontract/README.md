# NFT Auction - Private Midnight Contract

A privacy-preserving NFT auction smart contract built on the Midnight network using the Compact language.

## Overview

This is a zero-knowledge enabled NFT auction system that allows users to participate in sealed-bid auctions while maintaining complete privacy over their bids. The contract uses cryptographic commitments and zero-knowledge proofs to ensure bid privacy while maintaining auction integrity.

## Features

- **Privacy-Preserving Bidding**: Bids are submitted as committed hashes, keeping bid amounts private
- **Sealed-Bid Auction**: Auction proceeds through distinct phases (commit → reveal → winner selection)
- **Zero-Knowledge Proofs**: Uses zk-proofs to verify bid commitments without revealing bid amounts
- **NFT Escrow**: Smart contract holds the NFT securely until auction completion
- **Deposit Management**: Bidders can manage deposits and forfeit non-revealing bidders
- **Winner Payment Claims**: Verified payment claims with privacy protection

## Project Structure

```
contract/
├── src/
│   ├── index.ts                 # Main contract entry point
│   ├── nftauction.compact       # Compact contract implementation
│   ├── types.compact            # Type definitions
│   └── test_*.compact           # Test files
├── managed/
│   └── nftauction/
│       ├── contract/            # Compiled contract artifacts
│       ├── keys/                # Zero-knowledge proof keys
│       └── zkir/                # ZK-IR output files
├── test/
│   ├── test1-initialization.test.ts
│   ├── test2-commit-phase.test.ts
│   ├── test3-reveal-phase.test.ts
│   ├── test4-winner-selection.test.ts
│   ├── test5-privacy-guarantee.test.ts
│   └── vitest.config.ts
└── package.json
```

## Core Contract Functions

### Bid Management
- `commitBid()` - Submit a bid commitment hash
- `commitBidWithDeposit()` - Submit bid with deposit
- `revealBid()` - Reveal and verify a bid

### Auction Control
- `canFinalize()` - Check if auction can be finalized
- `finalizeAuction()` - End auction and determine winner

### Payment & Forfeit
- `claimWinnerPayment()` - Claim payment as winning bidder
- `forfeitNonRevealer()` - Penalize non-revealing bidders
- `getDepositStatus()` - Check deposit status

### Query Functions
- `getAuctionResult()` - Get auction outcome
- `getAuctionState()` - Get current auction state

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Midnight SDK dependencies

### Setup

```bash
# Install dependencies
npm install

# Build the contract
npm run compact
npm run build

# Run tests
cd contract
npm test
```

## Usage

### Compile Contract
```bash
npm run compact
```

### Build Distribution
```bash
npm run build
```

### Run Tests
```bash
cd contract/test
npm test
```

## Technology Stack

- **Language**: Compact (DSL for Midnight contracts)
- **Framework**: Midnight Network
- **Testing**: Vitest
- **Build**: TypeScript + Node.js
- **Cryptography**: Zero-Knowledge Proofs via Midnight SDK

## Key Concepts

### Bid Commitment
Bids are submitted as SHA-256 commitments that hash the bid amount with a random nonce. This keeps the actual bid amount hidden.

### Reveal Phase
Bidders later reveal their bids and nonces, which are verified against the original commitment using zero-knowledge proofs.

### Privacy Guarantees
The contract ensures:
- Bid amounts remain private during commit phase
- Non-bidders cannot determine winning bid amount
- Auction integrity is maintained cryptographically

## Testing

The contract includes comprehensive tests covering:
- Initialization and state setup
- Commit phase operations
- Reveal phase and verification
- Winner selection logic
- Privacy guarantee validation

Run tests with:
```bash
cd contract/test
npm test
```

## License

Private/Internal Use

## Support

For issues or questions about the contract implementation, please refer to the Midnight Network documentation and SDK guides.

---

**Built with Midnight Network** - Privacy-preserving smart contracts
