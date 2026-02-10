# Car Upgrade App

A budget-friendly web application that helps users find the cheapest car parts and upgrades for their vehicles, specifically optimized for Kia, Hyundai, and other popular car brands.

## 🚀 Features

- **Parts Search**: Find compatible parts for your vehicle by year, make, and model.
- **Price Comparison**: Compare prices across multiple vendors (RockAuto, eBay Motors, CarParts).
- **DIY Guides**: Access integrated repair and installation guides.
- **Cost Tracking**: Plan your upgrades with budget-friendly recommendations.
- **Compatibility Checker**: Verify parts work with your specific vehicle.
- **Vendor Routing**: Find the cheapest option and purchase directly.

## 🛠 Tech Stack

### Backend
- **Node.js/Express**: Server and API.
- **MongoDB/Mongoose**: Database for parts and vehicle data.
- **Axios**: API calls to third-party services.
- **CORS**: Cross-origin resource sharing.

### Frontend
- **React**: Web UI framework.
- **Material-UI**: Component library.
- **Axios**: API communication.

## 📁 Project Structure

```text
CarUpgradeApp/
├── backend/
│   ├── server.js           # Express server setup
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB schemas
│   └── config/             # Configuration files
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── App.js
│   └── package.json
└── package.json
```

## 🔌 API Endpoints (Planned)

### Vehicles
- `GET /api/vehicles` - List all vehicle models.
- `GET /api/vehicles/:id` - Get specific vehicle details.
- `POST /api/vehicles` - Add new vehicle.

### Parts
- `GET /api/parts?make=Kia&model=Rio&year=2023` - Search parts.
- `GET /api/parts/:id` - Get part details.
- `GET /api/parts/:id/prices` - Get price comparisons.

### Price Comparison
- `GET /api/compare?partId=123` - Compare prices across vendors.

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adaryusrgillum/CarUpgradeApp.git
   cd CarUpgradeApp
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   API_KEY_ROCKAUTO=your_api_key
   API_KEY_EBAY=your_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Start the frontend:
   ```bash
   npm run client
   ```

## 💰 Monetization Strategy

- **Affiliate Commissions**: Earn from RockAuto, eBay Motors, and CarParts.
- **Premium Features**: Saved wishlists, price alerts, advanced filters.
- **Sponsored Brands**: Featured brand sections.

## 🚀 Deployment

### GitHub Pages

This app is configured for automatic deployment to GitHub Pages. The site is available at:
**https://adaryusrgillum.github.io/CarUpgradeApp**

The deployment happens automatically when you push to the `main` branch via GitHub Actions.

#### Manual Deployment

You can also deploy manually from your local machine:

```bash
cd frontend
npm install
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch.

#### Deployment Configuration

- The app is configured with the homepage URL in `frontend/package.json`
- GitHub Actions workflow handles automatic builds and deployments
- The workflow builds the React app and deploys the `frontend/build` directory to GitHub Pages

## 🔮 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] User accounts and saved lists
- [ ] Price alert notifications
- [ ] Community reviews and ratings
- [ ] Integration with more vendors
- [ ] YouTube video embedding for DIY guides
- [ ] API integration with manufacturer specs

## 📄 License

MIT License - feel free to use this project for educational and commercial purposes.

## ✉️ Contact

For questions or suggestions, please open an issue in the repository.