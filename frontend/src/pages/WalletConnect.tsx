import { useApp } from '../context/AppContext';
import { mockWallet } from '../services/mockWallet';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

export function WalletConnect() {
    const { updateWallet, setLoading, setError, state } = useApp();
    const navigate = useNavigate();

    const handleConnect = async () => {
        setLoading(true);
        setError('');

        try {
            const walletState = await mockWallet.connect();
            updateWallet(walletState);
            navigate('/create');
        } catch (err) {
            setError('Connection failed');
        }
    };

    const handleDisconnect = async () => {
        setLoading(true);
        try {
            await mockWallet.disconnect();
            updateWallet({ connected: false, address: '', balance: '0' });
        } catch (err) {
            setError('Disconnect failed');
        }
    };

    return (
        <div className="page-container">
            <div className="card wallet-card">
                <h1 className="page-title">Midnight NFT Auction</h1>
                <p className="subtitle">Sealed-Bid Private Auction DApp</p>

                {!state.wallet.connected ? (
                    <>
                        <div className="feature-list">
                            <div className="feature-item">🔒 Privacy-Preserving Sealed Bids</div>
                            <div className="feature-item">⚡ Commit-Reveal Mechanism</div>
                            <div className="feature-item">🎯 Fair NFT Auctions</div>
                        </div>

                        <button
                            className="btn-primary btn-large"
                            onClick={handleConnect}
                            disabled={state.loading}
                        >
                            {state.loading ? 'Connecting...' : 'Connect Midnight Wallet'}
                        </button>
                    </>
                ) : (
                    <div className="wallet-info">
                        <div className="info-item">
                            <span className="info-label">Status:</span>
                            <span className="status-connected">✅ Connected</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Address:</span>
                            <span className="info-value">{state.wallet.address}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Balance:</span>
                            <span className="info-value">{state.wallet.balance} NIGHT</span>
                        </div>

                        <button
                            className="btn-secondary"
                            onClick={handleDisconnect}
                            disabled={state.loading}
                        >
                            Disconnect
                        </button>
                    </div>
                )}

                {state.error && <div className="error-message">{state.error}</div>}
            </div>
        </div>
    );
}
