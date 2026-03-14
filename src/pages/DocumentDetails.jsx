import { ArrowLeft, Download, ShieldCheck, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function DocumentDetails() {
  const { id } = useParams();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <Link to="/catalog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: '500' }}>
        <ArrowLeft size={18} /> Back to Catalog
      </Link>

      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* Document Preview Area (Mock) */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <div style={{ backgroundColor: '#e2e8f0', borderRadius: '1rem', height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
              Preview Mode (Page 1 of 45)
            </div>
            {/* Mock blur effect to simulate locked content */}
            <div style={{ width: '80%', height: '80%', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div style={{ height: '2rem', backgroundColor: '#e2e8f0', width: '60%', borderRadius: '0.25rem' }}></div>
               <div style={{ height: '1rem', backgroundColor: '#e2e8f0', width: '100%', borderRadius: '0.25rem' }}></div>
               <div style={{ height: '1rem', backgroundColor: '#e2e8f0', width: '100%', borderRadius: '0.25rem' }}></div>
               <div style={{ height: '1rem', backgroundColor: '#e2e8f0', width: '90%', borderRadius: '0.25rem' }}></div>
               
               <div style={{ flex: 1, filter: 'blur(5px)', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                 <div style={{ height: '1rem', backgroundColor: '#cbd5e1', width: '100%' }}></div>
                 <div style={{ height: '1rem', backgroundColor: '#cbd5e1', width: '100%' }}></div>
                 <div style={{ height: '1rem', backgroundColor: '#cbd5e1', width: '80%' }}></div>
               </div>
            </div>

            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '2rem' }}>
               <button className="btn btn-primary" style={{ boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)' }}>
                 Pay KSH 150 to Unlock Full Document
               </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <aside style={{ flex: '1', minWidth: '300px' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--primary-color)', backgroundColor: '#eff6ff', padding: '0.3rem 0.8rem', borderRadius: '1rem', display: 'inline-block', marginBottom: '1rem' }}>
            Past Paper - Form 4
          </span>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.2' }}>KCSE Mathematics Revision 2023</h1>
          
          <div style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            By <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Kenya National Examination Council</span>
          </div>

          <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--success-color)', marginBottom: '0.5rem' }}>KSH 150</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Instant access via M-Pesa STK Push.</p>
            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              Buy Now with M-Pesa
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', justifyContent: 'center' }}>
              <ShieldCheck size={16} color="var(--success-color)" /> Secure Payment
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Description</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Complete revision past paper for the 2023 KCSE Mathematics examinations. Contains Paper 1 and Paper 2 questions with standard marking schemes attached at the end. An excellent resource for Form 4 candidates currently preparing for their finals.
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline" style={{ flex: 1 }}><Share2 size={18} /> Share</button>
            <button className="btn btn-outline" style={{ flex: 1 }}><Download size={18} /> Save</button>
          </div>

        </aside>

      </div>
    </div>
  );
}
