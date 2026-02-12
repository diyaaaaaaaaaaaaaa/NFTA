export interface WalletState {
    connected: boolean;
    address: string;
    balance: string;
}

export class MockWallet {
    private state: WalletState = {
        connected: false,
        address: '',
        balance: '0'
    };

    async connect(): Promise<WalletState> {
        await this.delay(800);
        this.state = {
            connected: true,
            address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
            balance: '1250.75'
        };
        return this.state;
    }

    async disconnect(): Promise<void> {
        await this.delay(300);
        this.state = {
            connected: false,
            address: '',
            balance: '0'
        };
    }

    getState(): WalletState {
        return { ...this.state };
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export const mockWallet = new MockWallet();
