import { useApp } from '../context/AppContext';
import '../styles/components.css';

export function LoadingOverlay() {
    const { state } = useApp();

    if (!state.loading) return null;

    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Processing...</p>
            </div>
        </div>
    );
}
