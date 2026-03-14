import { Search, Filter, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock Data
const MOCK_MATERIALS = [
  { id: 1, title: 'KCSE Mathematics Revision 2023', category: 'Past Paper', price: 'KSH 50', level: 'Form 4', author: 'Elimu Authors' },
  { id: 2, title: 'Grade 6 CBC Science Notes', category: 'Notes', price: 'KSH 100', level: 'Grade 6', author: 'Tr. Jane Doe' },
  { id: 3, title: 'High School Chemistry Form 2', category: 'Textbook', price: 'KSH 300', level: 'Form 2', author: 'Elimu Authors' },
  { id: 4, title: 'Primary English Composition Guide', category: 'Guide', price: 'KSH 80', level: 'Class 8', author: 'Tr. John Smith' },
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h1>Resource Catalog</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Browse our collection of curated educational materials.</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search by title, subject, or grade..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '1rem' }}
          />
        </div>
        <button className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
          <Filter size={20} /> Filters
        </button>
      </div>

      {/* Catalog Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {MOCK_MATERIALS.map(item => (
          <div key={item.id} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)' }}>
            <div style={{ height: '160px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={48} color="var(--primary-color)" opacity={0.5} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary-color)', backgroundColor: '#eff6ff', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                  {item.category}
                </span>
                <span style={{ fontWeight: 'bold', color: 'var(--success-color)' }}>{item.price}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{item.level} • By {item.author}</p>
              <Link to={`/document/${item.id}`} className="btn btn-primary" style={{ width: '100%', display: 'inline-block', textAlign: 'center', boxSizing: 'border-box' }}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
