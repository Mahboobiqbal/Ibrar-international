# Project Architecture & Structure

## 📁 Complete Directory Structure

```
IbrarInternational/
│
├── frontend/                          # React.js Frontend (Port 5173)
│   ├── src/
│   │   ├── components/
│   │   │   └── common/
│   │   │       ├── Header.jsx        # Navigation bar with logo
│   │   │       ├── Footer.jsx        # Footer with links and contact
│   │   │       ├── ProductCard.jsx   # Reusable product card component
│   │   │       └── ServiceCard.jsx   # Reusable service card component
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Home page with hero & featured items
│   │   │   ├── Products.jsx          # Products listing (Rice/Marbles)
│   │   │   ├── Services.jsx          # Services page
│   │   │   ├── About.jsx             # Company information
│   │   │   └── Contact.jsx           # Contact form & information
│   │   │
│   │   ├── data/
│   │   │   ├── products.json         # Rice and marble product data
│   │   │   └── services.json         # Services data
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css           # Global CSS with Tailwind layers
│   │   │
│   │   ├── App.jsx                   # Main app with routing
│   │   └── main.jsx                  # React entry point
│   │
│   ├── index.html                    # HTML template
│   ├── package.json                  # Dependencies & scripts
│   ├── vite.config.js               # Vite configuration with proxy
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   └── README.md                     # Frontend documentation
│
├── backend/                           # Express.js Backend (Port 5000)
│   ├── server.js                     # Main server file with all routes
│   ├── .env                          # Environment variables
│   ├── package.json                  # Dependencies & scripts
│   └── README.md                     # Backend documentation
│
├── README.md                         # Main project documentation
├── QUICK_START.md                    # Quick setup guide
├── ARCHITECTURE.md                   # This file
└── .gitignore                        # Git ignore rules
```

## 🎯 Routing Structure

```
Frontend Routes (React Router):
├── / (Home)
│   ├── Hero Section
│   ├── Product Categories
│   ├── Featured Products
│   ├── Services Overview
│   └── Call-to-Action
│
├── /products (Products Hub)
│   └── Select Category
│
├── /products/rice (Rice Products)
│   ├── Product List
│   └── Product Cards
│
├── /products/marbles (Marble Products)
│   ├── Product List
│   └── Product Cards
│
├── /services (Services Page)
│   ├── Service Cards
│   └── Service Details
│
├── /about (About Page)
│   ├── Mission & Vision
│   ├── Values
│   ├── Why Choose Us
│   └── Statistics
│
└── /contact (Contact Page)
    ├── Contact Form
    ├── Contact Information
    └── WhatsApp Integration
```

## 🌐 Backend API Endpoints

```
Backend Routes (Express.js):
├── GET /api/health
│   └── Health check endpoint
│
├── POST /api/contact
│   ├── Request: { name, email, message }
│   ├── Validation: Email format, required fields
│   ├── Action: Log to console
│   └── Response: Success/Error message
│
├── GET /api/products
│   ├── Returns: All rice products
│   └── Returns: All marble products
│
└── GET /api/services
    └── Returns: All services
```

## 🎨 Design System

### Color Palette
```
Primary Color (Purple):     #5B2EFF
Secondary Color (Gold):     #D4AF37
Dark Text:                  #1a1a1a
Light Background:           #f8f8f8
White:                      #ffffff
```

### Component Hierarchy
```
App (Router)
│
├── Header
│   ├── Logo
│   └── Navigation Links
│
├── Main Content (Route-based)
│   ├── Home
│   ├── Products
│   ├── Services
│   ├── About
│   └── Contact
│
└── Footer
    ├── Company Info
    ├── Quick Links
    ├── Products
    └── Contact
```

## 📊 Data Structure

### Products Data (products.json)
```json
{
  "rice": [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Short description",
      "details": "Long description",
      "image": "/images/product.jpg"
    }
  ],
  "marbles": [...]
}
```

### Services Data (services.json)
```json
[
  {
    "id": 1,
    "name": "Service Name",
    "description": "Service description",
    "icon": "🌍"
  }
]
```

## 🔄 Data Flow

```
User Interaction
    ↓
Frontend (React Component)
    ↓
Form Submission / API Call
    ↓
Backend (Express Server)
    ↓
Validation & Processing
    ↓
Response to Frontend
    ↓
Update UI / Show Message
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Routing
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework
- **CORS** - Cross-origin support
- **dotenv** - Config management
- **Body Parser** - Request parsing

## 📦 Dependencies

### Frontend (package.json)
```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.0"
}
```

### Backend (package.json)
```json
"dependencies": {
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "body-parser": "^1.20.2"
}
```

## 🚀 Build & Deployment Architecture

### Frontend Build Process
```
Source Code (.jsx, .css)
    ↓
Vite Build Tool
    ↓
Bundled & Optimized
    ↓
dist/ folder
    ↓
Deploy to: Vercel, Netlify, AWS S3
```

### Backend Deployment
```
server.js
    ↓
Node.js Runtime
    ↓
Port 5000
    ↓
Deploy to: Heroku, AWS, DigitalOcean
```

## 🔐 Security Architecture

```
User Request
    ↓
HTTPS (Production)
    ↓
CORS Validation
    ↓
Request Validation
    ↓
Input Sanitization
    ↓
Rate Limiting (Optional)
    ↓
Process Request
    ↓
Log Activity
    ↓
Response
```

## 📈 Scalability Considerations

### Current Setup (Static JSON)
- ✅ Fast and simple
- ✅ No database needed
- ⚠️ Data hardcoded

### Future Enhancements
- MongoDB for product database
- PostgreSQL for structured data
- Redis for caching
- S3 for image storage
- JWT authentication
- Admin panel for content management

## 🔧 Configuration Files

### vite.config.js
```javascript
- Dev server on port 5173
- API proxy to backend
- React plugin enabled
```

### tailwind.config.js
```javascript
- Color customization
- Font family setup
- Component layer definitions
```

### server.js
```javascript
- Express app setup
- Middleware configuration
- Route definitions
- Error handling
```

## 📝 Key Features Implementation

| Feature | Implementation |
|---------|-----------------|
| Responsive Design | Tailwind CSS Grid & Flexbox |
| Routing | React Router v6 |
| Styling | Tailwind CSS with custom components |
| Form Handling | React state management |
| API Communication | Axios with error handling |
| Data Management | Static JSON files |
| State Management | React useState hook |
| Logging | Console logging in backend |
| Error Handling | Try-catch blocks & validation |
| Environment Config | dotenv for backend |

---

This architecture provides a solid foundation for a professional business showcase website with room for future enhancements and scalability.
