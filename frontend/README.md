# Midnight NFT Auction - Frontend

A privacy-preserving sealed-bid NFT auction DApp built with React, TypeScript, and Vite.

## Features

- **Privacy-Preserving**: Sealed-bid auction mechanism
- **Commit-Reveal Protocol**: Secure two-phase bidding
- **Mock-Safe Architecture**: All blockchain calls are mocked for safe prototyping
- **Modern UI**: Glassmorphism with gradient accents and smooth animations
- **Type-Safe**: Full TypeScript implementation

## Tech Stack

- React 18
- TypeScript
- Vite 5
- React Router 6
- CSS3 (Custom Design System)

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navigation.tsx
│   └── LoadingOverlay.tsx
├── pages/           # Route pages
│   ├── WalletConnect.tsx
│   ├── CreateAuction.tsx
│   ├── CommitBid.tsx
│   ├── RevealBid.tsx
│   └── FinalizeAuction.tsx
├── services/        # Mock services
│   ├── mockWallet.ts
│   └── contractService.ts
├── context/         # Global state management
│   └── AppContext.tsx
├── utils/           # Utility functions
│   └── crypto.ts
└── styles/          # CSS modules
    ├── global.css
    ├── components.css
    └── pages.css
```

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

## Workflow

1. **Connect Wallet** - Mock Midnight wallet connection
2. **Create Auction** - Initialize NFT auction with minimum price
3. **Commit Bid** - Submit sealed bid with generated secret
4. **Reveal Bid** - Reveal bid using original amount and secret
5. **Finalize Auction** - Determine winner and transfer NFT

## Mock Services

All blockchain interactions are mocked:
- No real wallet connection required
- All transactions return success responses
- Realistic async delays for UX simulation
- Safe for prototyping and demonstration

## Design Features

- Dark theme with purple gradient accents
- Smooth page transitions and animations
- Responsive glassmorphism cards
- Loading states and error handling
- Type-safe state management
