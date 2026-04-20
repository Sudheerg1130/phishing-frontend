import React from "react";

function FAQ() {
  const faqs = [
    { q: "Is the detection accurate?", a: "Yes, our AI uses Random Forest analysis with high accuracy." },
    { q: "What should I do if a site is High Risk?", a: "Do not enter any personal info or passwords on that site." },
    { q: "Does this save my URLs?", a: "We only save history locally on your computer for your reference." }
  ];

  return (
    <div className="page-container">
      <div className="glass-card" style={{textAlign: 'left'}}>
        <h1 style={{textAlign: 'center', color: '#38bdf8'}}>Frequently Asked Questions</h1>
        {faqs.map((f, i) => (
          <div key={i} style={{marginBottom: '20px', borderBottom: '1px solid #334155', paddingBottom: '10px'}}>
            <h4 style={{color: '#38bdf8', marginBottom: '5px'}}>Q: {f.q}</h4>
            <p style={{color: '#cbd5e1', margin: 0}}>A: {f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;