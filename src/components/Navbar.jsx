import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-brand" style={{ gap: '0.75rem', color: 'white' }} onClick={closeMenu}>
          <img
            src="/logo.jpeg"
            alt="Brodang Pro Academy Logo"
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <span>Brodang Academy</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className={`nav-link-custom ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link-custom ${isActive('/about')}`}>About Us</Link>
          <Link to="/catalog" className={`nav-link-custom ${isActive('/catalog')}`}>Products</Link>
          <a href="#" className="nav-link-custom">Testimonials</a>
          <Link to="/login" className="nav-link-custom">Login</Link>
          <Link to="/contact" className={`nav-link-custom ${isActive('/contact')}`}>Contact Us</Link>
        </div>

        {/* Mobile Menu Toggle Button (Right Side) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links Sidebar */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" className={`nav-link-custom ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`nav-link-custom ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
            <Link to="/catalog" className={`nav-link-custom ${isActive('/catalog')}`} onClick={closeMenu}>Products</Link>
            <a href="#" className="nav-link-custom" onClick={closeMenu}>Testimonials</a>
            <Link to="/contact" className={`nav-link-custom ${isActive('/contact')}`} onClick={closeMenu}>Contact Us</Link>
            <Link to="/login" className="nav-link-custom" onClick={closeMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
