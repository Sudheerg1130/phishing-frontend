import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Ensures the scanner styles are applied

function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    // 1. Basic validation
    if (!url.trim()) {
      alert("Please enter a URL to scan!");
      return;
    }

    setLoading(true);
    try {
      // IMPORTANT: If running locally, use "http://127.0.0.1:5000/analyze"
      // If deployed, use your Render/Railway URL
      const res = await axios.post("hhttps://phishing-backend-1-khmp.onrender.com/analyze", { url });
      setResult(res.data);

      // --- AUTO-UPDATE HISTORY ---
      const newEntry = { 
        url, 
        status: res.data.status, 
        date: new Date().toLocaleString() 
      };
      const history = JSON.parse(localStorage.getItem("phish_history") || "[]");
      localStorage.setItem("phish_history", JSON.stringify([newEntry, ...history].slice(0, 10)));
      
    } catch (e) { 
      console.error("Connection Error:", e);
      alert("Security Engine Offline"); 
    }
    setLoading(false);
  };

  const isSafe = result?.status.includes("Legitimate") || result?.status.includes("Invalid");

  return (
    <div className="page-container">
      <h1 className="hero-title">Shield AI Scanner</h1>
      <p className="hero-subtitle">Enterprise-grade Phishing Detection System</p>

      {/* Changed to 'scanner-container' to match your high-end CSS styles */}
      <div className="scanner-container">
        <div className="search-wrapper">
          <input 
            className="url-input" 
            placeholder="Paste URL to scan..."
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="scan-btn" onClick={handleAnalyze}>
            {loading ? "SCANNING..." : "ANALYZE"}
          </button>
        </div>

        {result && (
          <div className="analysis-card">
            <div className="status-header">
               <h2 className={isSafe ? "text-safe" : "text-phish"}>
                {result.status}
              </h2>
            </div>
            
            {/* ONLY SHOW SCORE IF PHISHING/SUSPICIOUS */}
            {!isSafe && (
              <div className="risk-section">
                <p style={{fontWeight: '600'}}>Threat Probability: {result.score}%</p>
                <div className="risk-bar-bg">
                  <div 
                    className="risk-bar-fill" 
                    style={{ 
                      width: `${result.score}%`, 
                      background: result.score > 70 ? '#ef4444' : '#f59e0b' 
                    }}
                  ></div>
                </div>
              </div>
            )}

            <div className="forensic-grid">
              <div className="forensic-item">
                <h4>Technical Forensics</h4>
                <ul style={{ textAlign: 'left', paddingLeft: '20px', color: '#cbd5e1' }}>
                  {result.reasons.map((r, i) => (
                    <li key={i} style={{ marginBottom: '5px' }}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
