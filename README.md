ZK Vault & Private Sale Registry 🚀
A decentralized, privacy-preserving asset exchange platform built on the Midnight Blockchain. This project implements a secure, vault-based sealed-bid mechanism where values remain private until the verification phase, leveraging Midnight's zero-knowledge capabilities to ensure a fair and strategic trading environment.

Project Description
The ZK Vault & Private Sale Registry allows users to trade digital assets in a completely secure and private manner. Unlike traditional transparent marketplaces, this platform uses a sophisticated stake-and-verify process:

Sale Configuration: Beneficiaries list their assets with specific reserve prices and registry settings.

Sealed Registration: Participants register their interest by submitting a "Sealer Hash" and a security stake. The actual bid value is never disclosed to the network or the seller.

Verification Phase: Once the window closes, participants verify their bids using ZK-proofs to reveal their true value without compromising their broader strategy.

Settlement: The registry automatically determines the leader and facilitates the asset transfer while maintaining total privacy for all other participants.

## Project Vision
Our vision is to bring institutional-grade privacy to the digital asset market. By utilizing Midnight's ZK-proof technology, we aim to eliminate front-running, bid-sniping, and strategic manipulation in high-value exchanges. We provide a trustless environment where the true market value of an asset can be discovered while keeping participant identities and losing bid amounts strictly confidential.


## Installation & Setup Guide

### Prerequisites
- **Node.js**: v18 or newer
- **Midnight SDK**: Ensure you have access to the Midnight network tools
- **Lace Wallet**: Browser extension with Midnight Devnet support
- **Docker**: For containerized deployment

### Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/06piyush13/NFTAuction-Private.git
   cd NFTAuction-Private
   ```

2. Install dependencies for all modules:
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend && npm install
   cd ../

   # Install smart contract dependencies
   cd smartcontract && npm install
   ```

### Running Locally
1. **Smart Contract**: Compile the contract
   ```bash
   cd smartcontract/contract
   npm run compact
   ```

2. **Frontend**: Start the development server
   ```bash
   cd frontend
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Deployment Details
- **Network**: Midnight Testnet / Local Development Node
- **Contract Type**: Compact (Zero-Knowledge Smart Contract)
- **Contract ID**: `0x46596f889fd18432a89d9ccfb210285c829913d5`
- **Compiler Version**: 0.14.0

### Deployment Steps
1. Start the Midnight local network.
2. Fund your devnet wallet.
3. Deploy using the CLI:
   ```bash
   cd smartcontract/nftauction-cli
   npm run deploy-undeployed
   ```

## Project Future Scope
- **Dynamic Auction Types**: Support for English and Dutch auctions.
- **Multiple Token Support**: Support for various Midnight-native tokens.
- **Enhanced Privacy**: Zero-knowledge proof verification for bid validity without revealing amount.
- **Marketplace Integration**: Direct integration with Midnight NFT marketplaces.

---
Built with ❤️ on Midnight

