import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DocumentDetails from './pages/DocumentDetails';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/document/:id" element={<DocumentDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        {/* Simple Footer */}
        <footer style={{ backgroundColor: 'var(--card-bg)', padding: '2rem 1.5rem', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
          <div className="container">
            <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Brodang Pro Academy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
