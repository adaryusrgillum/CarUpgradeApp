import React, { useState } from 'react';
import axios from 'axios';
import './PartsSearch.css';

const PartsSearch = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    const searchParts = async (e) => {
          e.preventDefault();
          if (!make || !model) {
                  setError('Please select both make and model');
                  return;
          }

          setLoading(true);
          setError(null);

          try {
                  const response = await axios.get(`${API_BASE}/api/parts`, {
                            params: { make, model }
                  });
                  setParts(response.data);
          } catch (err) {
                  setError('Failed to fetch parts. Please try again.');
                  console.error(err);
          } finally {
                  setLoading(false);
          }
    };

    const getPriceComparison = async (partId) => {
          try {
                  const response = await axios.get(`${API_BASE}/api/compare`, {
                            params: { partId }
                  });
                  console.log('Price comparison:', response.data);
                  // Could open a modal with comparison details
          } catch (err) {
                  console.error('Failed to get price comparison:', err);
          }
    };

    return (
          <div className="parts-search-container">
                <h1>Find Cheap Car Parts</h1>
                
                <form onSubmit={searchParts} className="search-form">
                        <div className="form-group">
                                  <label htmlFor="make">Vehicle Make:</label>
                                  <select 
                                                id="make"
                                                value={make} 
                                    onChange={(e) => setMake(e.target.value)}
                                              >
                                              <option value="">Select Make</option>
                                              <option value="Kia">Kia</option>
                                              <option value="Hyundai">Hyundai</option>
                                              <option value="Toyota">Toyota</option>
                                              <option value="Honda">Honda</option>
                                  </select>
                        </div>
                
                        <div className="form-group">
                                  <label htmlFor="model">Vehicle Model:</label>
                                  <input 
                                                id="model"
                                                type="text" 
                                    placeholder="e.g., Rio, Elantra, Civic"
                                                value={model}
                                                onChange={(e) => setModel(e.target.value)}
                                              />
                        </div>
                
                        <button type="submit" className="search-btn" disabled={loading}>
                          {loading ? 'Searching...' : 'Search Parts'}
                        </button>
                </form>
          
            {error && <div className="error-message">{error}</div>}
          
                <div className="results">
                  {parts.length > 0 && (
                      <>
                                  <h2>Found {parts.length} Parts</h2>
                                  <div className="parts-grid">
                                    {parts.map((part) => (
                                        <div key={part.id} className="part-card">
                                                          <h3>{part.name}</h3>
                                                          <p className="part-price">${part.price.toFixed(2)}</p>
                                                          <p className="part-vendor">{part.vendor}</p>
                                                          <button 
                                                                                onClick={() => getPriceComparison(part.id)}
                                                                                className="compare-btn"
                                                                              >
                                                                              Compare Prices
                                                          </button>
                                        </div>
                                      ))}
                                  </div>
                      </>
                    )}
                  {!loading && parts.length === 0 && make && (
                      <p className="no-results">No parts found. Try a different search.</p>
                        )}
                </div>
          </div>
        );
};

export default PartsSearch;
