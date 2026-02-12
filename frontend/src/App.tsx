import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { LoadingOverlay } from './components/LoadingOverlay';
import { WalletConnect } from './pages/WalletConnect';
import { CreateAuction } from './pages/CreateAuction';
import { CommitBid } from './pages/CommitBid';
import { RevealBid } from './pages/RevealBid';
import { FinalizeAuction } from './pages/FinalizeAuction';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <Navigation />
          <LoadingOverlay />
          <Routes>
            <Route path="/" element={<WalletConnect />} />
            <Route path="/create" element={<CreateAuction />} />
            <Route path="/commit" element={<CommitBid />} />
            <Route path="/reveal" element={<RevealBid />} />
            <Route path="/finalize" element={<FinalizeAuction />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
