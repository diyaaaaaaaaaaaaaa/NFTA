import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { contractService } from '../services/contractService';
import '../styles/pages.css';

export function RevealBid() {
    const { setLoading, setTxHash, setError, state } = useApp();
    const [auctionId, setAuctionId] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [secret, setSecret] = useState('');

    const handleReveal = async () => {
        if (!state.wallet.connected) {
            setError('Please connect wallet first');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const result = await contractService.revealBid({
                auctionId,
                bidAmount,
                secret
            });

            setTxHash(result.txHash);
            setAuctionId('');
            setBidAmount('');
            setSecret('');
        } catch (err) {
            setError('Reveal failed');
        }
    };

    return (
        <div className="page-container">
            <div className="card">
                <h1 className="page-title">Reveal Your Bid</h1>

                <div className="form-group">
                    <label className="form-label">Auction ID</label>
                    <input
                        type="text"
                        className="form-input"
                        value={auctionId}
                        onChange={(e) => setAuctionId(e.target.value)}
                        placeholder="Enter auction ID"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Bid Amount (NIGHT)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder="Enter your original bid amount"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Secret Key</label>
                    <input
                        type="text"
                        className="form-input"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        placeholder="Enter the secret from commit phase"
                    />
                </div>

                <button
                    className="btn-primary"
                    onClick={handleReveal}
                    disabled={state.loading || !auctionId || !bidAmount || !secret}
                >
                    {state.loading ? 'Revealing...' : 'Reveal Bid'}
                </button>

                {state.error && <div className="error-message">{state.error}</div>}
                {state.lastTxHash && (
                    <div className="success-message">
                        <p>Bid revealed and verified successfully!</p>
                        <p className="tx-hash">TX: {state.lastTxHash}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
