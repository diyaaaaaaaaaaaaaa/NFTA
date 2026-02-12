# Midnight NFT Auction 🚀

A decentralized, privacy-preserving NFT auction platform built on the **Midnight Blockchain**. This project implements a secure sealed-bid (Vickrey-style) auction mechanism where bid amounts remain private until the reveal phase, leveraging Midnight's zero-knowledge capabilities.

## Demo Video
[▶️ Click here to watch the Demo Video (Midnight.mp4)](Midnight.mp4)



<video controls src="https://github.com/06piyush13/NFTAuction-Private/raw/main/Midnight.mp4" width="100%"></video>
https://drive.google.com/file/d/1eHfQFVkZ5mp5wQAh8DGxyI3-O8g1OuuO/view?usp=sharing

*The demo covers: Midnight local network setup, Lace wallet funding, contract deployment, and end-to-end auction flow.*

## Project Description
The **Midnight NFT Auction** platform allows users to auction their NFTs in a completely secure and private manner. Unlike traditional transparent auctions, this platform uses a commit-reveal process:
1. **Auction Creation**: Sellers list their NFT with a minimum starting price.
2. **Secret Bidding**: Buyers commit to a bid amount by submitting a hash of their bid and a secret. The actual bid remains hidden from everyone, including the seller.
3. **Reveal Phase**: After the bidding period ends, buyers reveal their bids by providing the secret.
4. **Finalization**: The contract automatically determines the winner (highest bidder) and transfers the NFT while maintaining the privacy of other participants.

## Project Vision
Our vision is to bring institutional-grade privacy to the NFT market. By using Midnight's ZK-proof technology, we aim to eliminate "bid sniping" and market manipulation in high-value digital asset exchanges. We want to provide a trustless environment where the true market value of an asset can be discovered without revealing participant strategies.

## Project Structure
```text
.
├── frontend/           # React + Vite application (UI/UX)
├── smartcontract/      # Compact smart contract & CLI tools
├── docker/             # Containerization files (Dockerfile, Compose)
├── docs/               # Screenshots and additional documentation
├── .gitignore          # Git exclusion rules
└── README.md           # Project documentation
```

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
- **Contract ID**: `0x46596f889fd18432a89d9ccfb210385c828813d5`
- **Compiler Version**: 0.14.0

### Deployment Steps
1. Start the Midnight local network.
2. Fund your devnet wallet.
3. Deploy using the CLI:
   ```bash
   cd smartcontract/nftauction-cli
   npm run deploy-undeployed
   ```

## UI Screenshots
<img width="1920" height="1080" alt="Screenshot from 2026-02-11 14-50-29" src="https://github.com/user-attachments/assets/2dda37fe-4c06-44a1-8a35-1d1ecc9ef54a" />
<img width="1920" height="1080" alt="Screenshot from 2026-02-11 14-51-45" src="https://github.com/user-attachments/assets/cd86d67d-2b03-42ea-b02d-977143db6a5f" />

*Figure 1: Midnight Auction Dashboard showing active auctions.*

<img width="1920" height="1080" alt="Screenshot from 2026-02-08 12-25-46" src="https://github.com/user-attachments/assets/f400c988-81b3-45ec-90dc-0a718e5005de" />

*Figure 2: Lace Wallet connection interface.*

<img width="1920" height="1080" alt="Screenshot from 2026-02-11 14-24-49" src="https://github.com/user-attachments/assets/75ee6a6a-f725-4a02-b9cf-84b667383487" />




## Project Future Scope
- **Dynamic Auction Types**: Support for English and Dutch auctions.
- **Multiple Token Support**: Support for various Midnight-native tokens.
- **Enhanced Privacy**: Zero-knowledge proof verification for bid validity without revealing amount.
- **Marketplace Integration**: Direct integration with Midnight NFT marketplaces.

---
Built with ❤️ on Midnight
<img width="1600" height="1131" alt="image" src="https://github.com/user-attachments/assets/47f62c32-32ea-400e-9424-87fb7d92765d" />

