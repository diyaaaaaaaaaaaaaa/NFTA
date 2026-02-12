import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import '../styles/components.css';

export function Navigation() {
    const { state } = useApp();

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <span className="brand-icon">🌙</span>
                <span className="brand-text">Midnight Auction</span>
            </div>

            {state.wallet.connected && (
                <div className="nav-links">
                    <NavLink to="/create" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Create
                    </NavLink>
                    <NavLink to="/commit" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Commit
                    </NavLink>
                    <NavLink to="/reveal" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Reveal
                    </NavLink>
                    <NavLink to="/finalize" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Finalize
                    </NavLink>
                </div>
            )}

            <div className="nav-wallet">
                {state.wallet.connected ? (
                    <div className="wallet-badge">
                        <span className="wallet-address">
                            {state.wallet.address.slice(0, 6)}...{state.wallet.address.slice(-4)}
                        </span>
                        <span className="wallet-balance">{state.wallet.balance} NIGHT</span>
                    </div>
                ) : (
                    <NavLink to="/" className="btn-connect">
                        Connect Wallet
                    </NavLink>
                )}
            </div>
        </nav>
    );
}
