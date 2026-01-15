const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample vehicle data
const vehicles = [
  { id: 1, make: 'Kia', model: 'Rio', year: 2023 },
  { id: 2, make: 'Kia', model: 'Forte', year: 2023 },
  { id: 3, make: 'Hyundai', model: 'Elantra', year: 2023 },
  { id: 4, make: 'Hyundai', model: 'Sonata', year: 2023 }
  ];

// Sample parts data (simplified)
const parts = [
  { id: 101, name: 'Oil Filter', make: 'Kia', model: 'Rio', price: 15.99, vendor: 'RockAuto' },
  { id: 102, name: 'Air Filter', make: 'Kia', model: 'Rio', price: 22.50, vendor: 'CarParts' },
  { id: 103, name: 'Brake Pads', make: 'Kia', model: 'Rio', price: 89.99, vendor: 'eBay Motors' }
  ];

// Routes

// Get all vehicles
app.get('/api/vehicles', (req, res) => {
    res.json(vehicles);
});

// Get vehicle by ID
app.get('/api/vehicles/:id', (req, res) => {
    const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.json(vehicle);
});

// Search parts by vehicle
app.get('/api/parts', (req, res) => {
    const { make, model } = req.query;
    let results = parts;

          if (make) results = results.filter(p => p.make === make);
    if (model) results = results.filter(p => p.model === model);

          res.json(results);
});

// Get part by ID
app.get('/api/parts/:id', (req, res) => {
    const part = parts.find(p => p.id === parseInt(req.params.id));
    if (!part) return res.status(404).json({ message: 'Part not found' });
    res.json(part);
});

// Price comparison endpoint
app.get('/api/compare', (req, res) => {
    const { partId } = req.query;
    const part = parts.find(p => p.id === parseInt(partId));

          if (!part) return res.status(404).json({ message: 'Part not found' });

          // Simulated price comparison from multiple vendors
          const comparison = {
                part: part.name,
                prices: [
                  { vendor: 'RockAuto', price: part.price * 0.95 },
                  { vendor: 'CarParts', price: part.price },
                  { vendor: 'eBay Motors', price: part.price * 1.05 },
                  { vendor: 'Amazon', price: part.price * 1.10 }
                      ]
          };

          res.json(comparison);
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Car Upgrade App API running on port ${PORT}`);
});

module.exports = app;
