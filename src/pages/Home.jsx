import { ArrowRight, Book, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundImage: 'url(/hero_workspace.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        position: 'relative',
        color: 'white', 
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem', 
        textAlign: 'center' 
      }}>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.65)' }}></div>
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem', lineHeight: '1.2', fontWeight: 700 }}>
            We Ensure Better Education<br/>For A Better World
          </h1>
          <p className="hero-p" style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: '0.9', lineHeight: '1.6', fontWeight: 500 }}>
            Our Cutting-edge Materials Are Designed To Empower<br/>
            Students With Knowledge, Skills,<br/>
            And Experiences Needed To Excel In The Dynamic Field Of<br/>
            Education.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/catalog" className="btn" style={{ backgroundColor: '#2563eb', color: 'white', padding: '1rem 2.5rem', fontSize: '1.25rem', borderRadius: '0.5rem', fontWeight: 600 }}>
              Explore More &rarr;
            </Link>
          </div>
        </div>
      </section>



      {/* How it Works Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Your Pathway to Excellence</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              We've streamlined the process so you can focus on what matters most: learning. Experience a frictionless journey from discovering the right resource to mastering the material.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', position: 'relative' }}>
             {/* Simple Steps */}
             <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
                <h3>Browse Library</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Search our extensive directory of past papers, notes, and revision modules.</p>
             </div>
             <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--success-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
                <h3>Instant Payment</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Securely purchase via M-Pesa STK push. Pay only a few shillings per document.</p>
             </div>
             <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#8b57a5', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
                <h3>Excel & Succeed</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Access your files instantly in your dashboard and start preparing for your exams immediately.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
