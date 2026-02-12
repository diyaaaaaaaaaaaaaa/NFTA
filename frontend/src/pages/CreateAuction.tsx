import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { contractService } from '../services/contractService';
import '../styles/pages.css';

export function CreateAuction() {
    const { setLoading, setTxHash, setError, setAuctionData, state } = useApp();
    const [nftId, setNftId] = useState('');
    const [minPrice, setMinPrice] = useState('');

    const handleCreate = async () => {
        if (!state.wallet.connected) {
            setError('Please connect wallet first');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const result = await contractService.createAuction({
                nftId,
                minPrice,
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
            });

            setTxHash(result.txHash);
            setAuctionData(result.data || {});
            setNftId('');
            setMinPrice('');
        } catch (err) {
            setError('Transaction failed');
        }
    };

    return (
        <div className="page-container">
            <div className="card">
                <h1 className="page-title">Create NFT Auction</h1>

                <div className="form-group">
                    <label className="form-label">NFT ID</label>
                    <input
                        type="text"
                        className="form-input"
                        value={nftId}
                        onChange={(e) => setNftId(e.target.value)}
                        placeholder="Enter NFT ID"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Minimum Price (NIGHT)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                    />
                </div>

                <button
                    className="btn-primary"
                    onClick={handleCreate}
                    disabled={state.loading || !nftId || !minPrice}
                >
                    {state.loading ? 'Creating...' : 'Create Auction'}
                </button>

                {state.error && <div className="error-message">{state.error}</div>}
                {state.lastTxHash && (
                    <div className="success-message">
                        <p>Auction created successfully!</p>
                        <p className="tx-hash">TX: {state.lastTxHash}</p>
                        {state.auctionData.auctionId ? (
                            <p className="auction-id">Auction ID: {state.auctionData.auctionId as string}</p>
                        ) : null}
                    </div>
                )}
            </div>
        </div>
    );
}
