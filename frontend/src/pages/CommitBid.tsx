import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { contractService } from '../services/contractService';
import { hashBid, generateSecret } from '../utils/crypto';
import '../styles/pages.css';

export function CommitBid() {
    const { setLoading, setTxHash, setError, state } = useApp();
    const [auctionId, setAuctionId] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [secret, setSecret] = useState('');
    const [showSecret, setShowSecret] = useState(false);

    const handleGenerate = () => {
        const newSecret = generateSecret();
        setSecret(newSecret);
        setShowSecret(true);
    };

    const handleCommit = async () => {
        if (!state.wallet.connected) {
            setError('Please connect wallet first');
            return;
        }

        if (!secret) {
            setError('Please generate a secret first');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const bidHash = hashBid(bidAmount, secret);
            const result = await contractService.commitBid({
                auctionId,
                bidAmount,
                bidHash
            });

            setTxHash(result.txHash);
        } catch (err) {
            setError('Commit failed');
        }
    };

    return (
        <div className="page-container">
            <div className="card">
                <h1 className="page-title">Commit Sealed Bid</h1>

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
                        type="password"
                        className="form-input"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder="Enter bid amount"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Secret Key</label>
                    <div className="secret-container">
                        <input
                            type={showSecret ? 'text' : 'password'}
                            className="form-input"
                            value={secret}
                            readOnly
                            placeholder="Click generate to create secret"
                        />
                        <button className="btn-secondary" onClick={handleGenerate}>
                            Generate Secret
                        </button>
                    </div>
                    {secret && (
                        <p className="secret-warning">⚠️ Save this secret! You will need it to reveal your bid.</p>
                    )}
                </div>

                <button
                    className="btn-primary"
                    onClick={handleCommit}
                    disabled={state.loading || !auctionId || !bidAmount || !secret}
                >
                    {state.loading ? 'Committing...' : 'Commit Bid'}
                </button>

                {state.error && <div className="error-message">{state.error}</div>}
                {state.lastTxHash && (
                    <div className="success-message">
                        <p>Bid committed successfully!</p>
                        <p className="tx-hash">TX: {state.lastTxHash}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
