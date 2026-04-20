import React, { useEffect, useState } from "react";

function History() {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("phish_history") || "[]");
    setHistoryList(data);
  }, []);

  const clearHistory = () => {
    if (window.confirm("Delete all scan history?")) {
      localStorage.removeItem("phish_history");
      setHistoryList([]);
    }
  };

  return (
    <div className="page-container">
      <div className="glass-card">
        
        {/* Added the history-header class here */}
        <div className="history-header">
          <h1 style={{ color: 'var(--primary)', margin: 0 }}>Recent Scans</h1>
          
          {historyList.length > 0 && (
            <button className="clear-btn" onClick={clearHistory}>
              Clear History
            </button>
          )}
        </div>

        {historyList.length === 0 ? (
          <p style={{ color: '#94a3b8' }}>No history yet. Run a scan on the home page!</p>
        ) : (
          historyList.map((item, index) => (
            <div key={index} className="history-item" style={{
                background: 'rgba(0,0,0,0.2)',
                margin: '15px 0',
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderLeft: `5px solid ${item.status.includes('Safe') ? '#22c55e' : '#ef4444'}`
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '600', color: 'white', marginBottom: '5px' }}>{item.url}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.date}</div>
              </div>
              <div style={{ 
                fontWeight: '800', 
                color: item.status.includes('Safe') ? '#22c55e' : '#ef4444',
                textTransform: 'uppercase',
                fontSize: '0.8rem'
              }}>
                {item.status}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;
