import { createContext, useContext, useState, ReactNode } from 'react';
import { WalletState } from '../services/mockWallet';

interface AppState {
    wallet: WalletState;
    loading: boolean;
    error: string;
    lastTxHash: string;
    auctionData: Record<string, unknown>;
}

interface AppContextType {
    state: AppState;
    updateWallet: (wallet: WalletState) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    setTxHash: (hash: string) => void;
    setAuctionData: (data: Record<string, unknown>) => void;
    clearError: () => void;
}

const defaultState: AppState = {
    wallet: { connected: false, address: '', balance: '0' },
    loading: false,
    error: '',
    lastTxHash: '',
    auctionData: {}
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AppState>(defaultState);

    const updateWallet = (wallet: WalletState) => {
        setState(prev => ({ ...prev, wallet }));
    };

    const setLoading = (loading: boolean) => {
        setState(prev => ({ ...prev, loading }));
    };

    const setError = (error: string) => {
        setState(prev => ({ ...prev, error, loading: false }));
    };

    const setTxHash = (hash: string) => {
        setState(prev => ({ ...prev, lastTxHash: hash, loading: false }));
    };

    const setAuctionData = (data: Record<string, unknown>) => {
        setState(prev => ({ ...prev, auctionData: { ...prev.auctionData, ...data } }));
    };

    const clearError = () => {
        setState(prev => ({ ...prev, error: '' }));
    };

    return (
        <AppContext.Provider value={{
            state,
            updateWallet,
            setLoading,
            setError,
            setTxHash,
            setAuctionData,
            clearError
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        return {
            state: defaultState,
            updateWallet: () => { },
            setLoading: () => { },
            setError: () => { },
            setTxHash: () => { },
            setAuctionData: () => { },
            clearError: () => { }
        };
    }
    return context;
}
