import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { contractService } from '../services/contractService';
import '../styles/pages.css';

export function FinalizeAuction() {
    const { setLoading, setTxHash, setError, setAuctionData, state } = useApp();
    const [auctionId, setAuctionId] = useState('');
    const [finalized, setFinalized] = useState(false);

    const handleFinalize = async () => {
        if (!state.wallet.connected) {
            setError('Please connect wallet first');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const result = await contractService.finalizeAuction(auctionId);
            setTxHash(result.txHash);
            setAuctionData(result.data || {});
            setFinalized(true);
        } catch (err) {
            setError('Finalization failed');
        }
    };

    return (
        <div className="page-container">
            <div className="card">
                <h1 className="page-title">Finalize Auction</h1>

                <div className="form-group">
                    <label className="form-label">Auction ID</label>
                    <input
                        type="text"
                        className="form-input"
                        value={auctionId}
                        onChange={(e) => {
                            setAuctionId(e.target.value);
                            setFinalized(false);
                        }}
                        placeholder="Enter auction ID"
                    />
                </div>

                <button
                    className="btn-primary"
                    onClick={handleFinalize}
                    disabled={state.loading || !auctionId}
                >
                    {state.loading ? 'Finalizing...' : 'Finalize Auction'}
                </button>

                {state.error && <div className="error-message">{state.error}</div>}

                {finalized && state.lastTxHash && (
                    <div className="success-message">
                        <p className="finalize-title">🎉 Auction Finalized!</p>
                        <p className="tx-hash">TX: {state.lastTxHash}</p>

                        <div className="result-box">
                            <div className="result-item">
                                <span className="result-label">Winner Address:</span>
                                <span className="result-value">{(state.auctionData.winner as string) || 'N/A'}</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">Winning Bid:</span>
                                <span className="result-value">{(state.auctionData.winningBid as string) || '0'} NIGHT</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">NFT Transferred:</span>
                                <span className="result-value">
                                    {state.auctionData.nftTransferred ? '✅ Yes' : '❌ No'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
