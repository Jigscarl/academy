import { Book, CheckCircle, FileText, Award, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div>
      {/* Header Area */}
      <section style={{ backgroundColor: 'var(--card-bg)', padding: '4rem 1.5rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
           <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>About Brodang Pro Academy</h1>
           <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>We are dedicated to democratizing access to high-quality education across Kenya.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              At Brodang Pro Academy, we believe that every student, regardless of their background, deserves access to the best educational materials. Our mission is to bridge the gap in resource availability by providing a centralized, affordable, and easily accessible digital library.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We partner with expert teachers and examiners to curate past papers, comprehensive revision notes, and accurate marking schemes tailored to the Kenyan curriculum (CBC and 8-4-4).
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
             <div style={{ backgroundColor: '#eff6ff', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                <Users size={32} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>10k+</h3>
                <p style={{ fontSize: '0.875rem' }}>Active Students</p>
             </div>
             <div style={{ backgroundColor: '#ecfdf5', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                <Book size={32} color="var(--success-color)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--success-color)' }}>5,000+</h3>
                <p style={{ fontSize: '0.875rem' }}>Resources</p>
             </div>
             <div style={{ backgroundColor: '#fef3c7', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                <Award size={32} color="var(--warning-color)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--warning-color)' }}>Top</h3>
                <p style={{ fontSize: '0.875rem' }}>Quality Content</p>
             </div>
             <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                <Target size={32} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>100%</h3>
                <p style={{ fontSize: '0.875rem' }}>Curriculum Aligned</p>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Brodang Pro Academy - Moved from Home */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Choose Brodang Pro Academy?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--card-bg)', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <Book size={40} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
              <h3>Vast Library</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: '1.6' }}>Access deep archives of CBC materials, 8-4-4 regional mock past papers, and high-quality teaching notes vetted by professionals.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--card-bg)', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <CheckCircle size={40} color="var(--success-color)" style={{ marginBottom: '1rem' }} />
              <h3>Affordable Access</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: '1.6' }}>Pay only for what you need. We've structured fair micro-pricing designed to be accessible for all Kenyan learners.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--card-bg)', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <FileText size={40} color="var(--warning-color)" style={{ marginBottom: '1rem' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Instant M-Pesa</h3>
                <span style={{ backgroundColor: '#10b981', color: 'white', fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '1rem', fontWeight: 'bold' }}>STK Push</span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Enjoy secure and fast payments. Get instant digital access to your materials immediately after your M-Pesa pin entry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem', color: 'white' }}>Ready to Elevate Your Learning?</h2>
          <Link to="/catalog" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Browse Catalog Now
          </Link>
        </div>
      </section>
    </div>
  );
}
