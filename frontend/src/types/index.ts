export interface WalletState {
    connected: boolean;
    address: string;
    balance: string;
}

export interface TxResponse {
    success: boolean;
    txHash: string;
    message: string;
    data?: Record<string, unknown>;
}

export interface AuctionData {
    nftId: string;
    minPrice: string;
    startTime: string;
    endTime: string;
}

export interface BidData {
    auctionId: string;
    bidAmount: string;
    bidHash: string;
}

export interface RevealData {
    auctionId: string;
    bidAmount: string;
    secret: string;
}
