import React from "react";

function About() {
  return (
    <div className="page-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh'}}>
      <div className="glass-card" style={{maxWidth: '650px'}}>
        <h1 style={{color: '#38bdf8', fontSize: '2.5rem'}}>Project Intelligence</h1>
        <div style={{height: '3px', background: '#38bdf8', width: '60px', margin: '20px auto'}}></div>
        
        <p style={{lineHeight: '1.8', color: '#cbd5e1', fontSize: '1.1rem'}}>
          Shield AI is a cybersecurity solution designed to identify deceptive web infrastructure. 
          The engine combines character-level Machine Learning analysis with real-time heuristic 
          audits to protect users from fraudulent links.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px', textAlign: 'left'}}>
          <div className="info-node">
            <h4 style={{color: '#38bdf8'}}>AI Patterning</h4>
            <p style={{fontSize: '0.9rem'}}>Random Forest Classifier trained on verified threat datasets.</p>
          </div>
          <div className="info-node">
            <h4 style={{color: '#38bdf8'}}>Heuristic Audit</h4>
            <p style={{fontSize: '0.9rem'}}>Analyzes URL structure for subdomains, TLD risks, and masking.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
