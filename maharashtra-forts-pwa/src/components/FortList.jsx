import React, { useState } from 'react';
import forts from '../data/forts';

export default function FortList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredForts = forts.filter(fort => {
    const term = searchTerm.toLowerCase();
    return (
        fort.name.toLowerCase().includes(term) ||
        fort.location.toLowerCase().includes(term) ||
        fort.features.some(feature => 
          feature.toLowerCase().includes(term)
        )
    );
  });

  return (
    <div className="fort-app">
      <header className="app-header">
        <h1>महाराष्ट्राचे किल्ले</h1>
        <p>Explore the majestic forts of Maharashtra</p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search forts by name, location or features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </header>

      <div className="forts-grid">
        {filteredForts.length > 0 ? (
          filteredForts.map((fort) => (
            <div key={fort.id} className="fort-card">
              <div className="card-image-container">
                <img 
                  src={`/images/${fort.image}`}
                  alt={fort.name}
                  className="fort-image"
                  loading="lazy"
                />
                <div className="image-overlay"></div>
                <h2 className="fort-title">{fort.name}</h2>
              </div>
              
              <div className="card-content">
                <div className="location-info">
                  <span className="location-icon">📍</span>
                  <span>{fort.location}</span>
                </div>
                <p className="fort-height">Elevation: {fort.height}</p>
                <p className="fort-history">{fort.history}</p>
                
                <div className="features-section">
                  <h3>Key Features:</h3>
                  <ul className="features-list">
                    {fort.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">→</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No forts found matching your search. Try different keywords.</p>
          </div>
        )}
      </div>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Maharashtra Tourism</p>
      </footer>
    </div>
  );
}