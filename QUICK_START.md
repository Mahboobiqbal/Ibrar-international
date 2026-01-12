# Quick Start Guide - Ibrar International Website

## 🚀 Fast Setup (5 minutes)

### Step 1: Install Backend Dependencies
```powershell
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```powershell
cd ../frontend
npm install
```

### Step 3: Run Backend (Terminal 1)
```powershell
cd backend
npm start
```
✓ Backend running on http://localhost:5000

### Step 4: Run Frontend (Terminal 2)
```powershell
cd frontend
npm run dev
```
✓ Frontend running on http://localhost:5173

### Step 5: Open in Browser
Open http://localhost:5173 and start exploring!

---

## 📱 Testing the Website

1. **Home Page** - Check the hero section and featured products
2. **Products** - Navigate to Products → Rice/Marbles
3. **Services** - View all available services
4. **About** - Read company information
5. **Contact** - Try the contact form

### Test Contact Form
- Fill in the form with your details
- Check backend terminal for logs
- You should see the submitted data logged

---

## 🎨 Customization

### Change Company Details
Edit these files:
- `frontend/src/components/common/Header.jsx` - Logo and navigation
- `frontend/src/components/common/Footer.jsx` - Contact info and links
- `frontend/src/pages/Home.jsx` - Hero section text
- `backend/.env` - Backend configuration

### Add Products/Services
- Edit `frontend/src/data/products.json` for products
- Edit `frontend/src/data/services.json` for services

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: '#5B2EFF',      // Change this
  secondary: '#D4AF37',    // Or this
}
```

---

## 🔗 API Testing

Test API endpoints using any REST client (Postman, Thunder Client, etc.):

**Health Check:**
```
GET http://localhost:5000/api/health
```

**Submit Contact:**
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "message": "Test message"
}
```

---

## 📦 Project Files Overview

| File | Purpose |
|------|---------|
| `frontend/src/App.jsx` | Main React component with routing |
| `frontend/src/pages/*.jsx` | Page components for each route |
| `frontend/src/components/` | Reusable UI components |
| `frontend/src/data/*.json` | Product and service data |
| `frontend/src/styles/globals.css` | Global styles and Tailwind |
| `backend/server.js` | Express server and API endpoints |
| `backend/.env` | Environment configuration |

---

## 🆘 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:

**Backend (Change PORT in .env):**
```
PORT=5001
```

**Frontend (Change in vite.config.js):**
```javascript
server: {
  port: 5174,
}
```

### CORS Error
Make sure backend is running and the proxy is configured correctly in `frontend/vite.config.js`

### npm install fails
```bash
npm cache clean --force
rm -r node_modules package-lock.json
npm install
```

---

## ✅ Next Steps

1. Install dependencies and run both servers
2. Test all pages and features
3. Customize company details
4. Modify colors to match your brand
5. Add your own product images and descriptions
6. Deploy to production (see main README.md for deployment options)

---

## 📞 Support

For issues or questions:
- Check the main README.md for detailed documentation
- Review frontend/README.md for frontend-specific info
- Review backend/README.md for backend-specific info

Happy coding! 🎉
