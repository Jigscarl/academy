import { Book, Clock, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const MY_MATERIALS = [
  { id: 1, title: 'KCSE Mathematics Revision 2023', type: 'Past Paper', date: 'Oct 12, 2023' },
  { id: 2, title: 'Grade 6 CBC Science Notes', type: 'Notes', date: 'Oct 10, 2023' },
];

export default function Dashboard() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      
      {/* Sidebar */}
      <aside style={{ flex: '1', minWidth: '250px', backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)', height: 'fit-content' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1rem text-align: center' }}>
            JD
          </div>
          <h3>Brian Ombuya</h3>
          <p style={{ color: 'var(--text-muted)' }}>Student</p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/dashboard" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', backgroundColor: '#eff6ff', color: 'var(--primary-color)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Book size={18} /> My Library
          </Link>
          <a href="#" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: 'var(--text-muted)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} /> Purchase History
          </a>
          <a href="#" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: 'var(--text-muted)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={18} /> Account Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: '3', minWidth: '300px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>My Library</h2>
          <Link to="/catalog" className="btn btn-outline">Browse Catalog</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {MY_MATERIALS.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem', color: 'var(--primary-color)' }}>
                <FileText size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.25rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{item.type} • Purchased {item.date}</p>
              </div>
              <button className="btn btn-outline" style={{ padding: '0.5rem' }} title="Download">
                <Download size={18} />
              </button>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
}
