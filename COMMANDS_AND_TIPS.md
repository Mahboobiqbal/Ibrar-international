# Commands & Tips - Ibrar International

## 💻 Essential Commands

### Frontend Commands

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clear npm cache
npm cache clean --force

# Update packages
npm update
```

### Backend Commands

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Start server
npm start

# Start with auto-reload (dev mode)
npm run dev

# Clear npm cache
npm cache clean --force
```

### Both Frontend and Backend

```bash
# From root directory, install both
npm install --prefix frontend
npm install --prefix backend

# Run both (need 2 terminals)
# Terminal 1:
npm --prefix backend start

# Terminal 2:
npm --prefix frontend run dev
```

## 📝 Useful Tips

### 1. VS Code Extensions (Recommended)

```
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Thunder Client (API testing)
- Git Graph
- REST Client
```

### 2. Testing the Contact Form

**Using Thunder Client in VS Code:**
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your products"
}
```

### 3. Browser Developer Tools

```
1. Open browser DevTools (F12)
2. Network tab: Monitor API calls
3. Console: Check for errors
4. Elements: Inspect styles
5. Responsive Design Mode: Test mobile views
```

### 4. Git Commands

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial project setup"

# View status
git status

# View log
git log --oneline
```

## 🎯 Common Tasks

### Change Company Email

1. **Header/Footer:** `frontend/src/components/common/Header.jsx` & `Footer.jsx`
2. **Contact Page:** `frontend/src/pages/Contact.jsx`
3. **Backend:** `backend/server.js`

### Change Company Phone Number

1. **Footer:** `frontend/src/components/common/Footer.jsx`
2. **Contact Page:** `frontend/src/pages/Contact.jsx`
3. **WhatsApp Link:** Update phone number in URLs

### Add New Product

1. Edit `frontend/src/data/products.json`
2. Add new product object with id, name, description, etc.
3. Save and refresh page (dev server auto-reloads)

### Add New Service

1. Edit `frontend/src/data/services.json`
2. Add new service object with id, name, description, icon
3. Save and refresh page

### Change Colors

Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: '#5B2EFF',    // Change purple
  secondary: '#D4AF37',  // Change gold
}
```

### Change Website Title

Edit `frontend/index.html`:
```html
<title>Your New Title Here</title>
```

## 🔍 Debugging Tips

### Frontend Debugging

1. **Console Errors:** Check browser DevTools → Console tab
2. **Network Issues:** DevTools → Network tab
3. **Add Console Logs:**
   ```javascript
   console.log('Variable:', variable);
   ```
4. **React DevTools Extension:** Install from Chrome Web Store

### Backend Debugging

1. **Check Logs:** Look at terminal where backend is running
2. **Add Console Logs:**
   ```javascript
   console.log('Request received:', req.body);
   ```
3. **Test Endpoints:** Use Thunder Client or Postman
4. **Check Environment Variables:** Verify .env file

## 📊 Performance Tips

### Frontend
```bash
# Check bundle size
npm run build

# Analyze what's included
npm install --save-dev vite-plugin-visualizer
```

### Backend
```javascript
// Add response time middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`${req.method} ${req.path} - ${Date.now() - start}ms`);
  });
  next();
});
```

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module"

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm cache clean --force
npm install
```

### Issue: Port already in use

**Solution:**
```bash
# Find process using port 5000 (Windows)
netstat -ano | findstr :5000

# Kill process (Windows)
taskkill /PID <PID> /F

# Or change port in .env (backend) or vite.config.js (frontend)
```

### Issue: API calls failing

**Solution:**
1. Check if backend is running
2. Verify proxy in `vite.config.js`
3. Check CORS configuration
4. Test API endpoint directly with Thunder Client

### Issue: Styles not applying

**Solution:**
1. Check Tailwind class names are correct
2. Verify `globals.css` is imported in `main.jsx`
3. Restart dev server
4. Clear browser cache

### Issue: Form not submitting

**Solution:**
1. Check browser console for errors
2. Verify backend is running
3. Test API endpoint with Thunder Client
4. Check form validation logic

## 📦 NPM Package Management

### Update All Packages

```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

### Remove Package

```bash
npm uninstall package-name
```

### Add New Package

```bash
npm install new-package
```

## 🚀 Performance Benchmarks

### Expected Load Times (Development)
- Homepage: < 2 seconds
- Product Pages: < 1 second
- Contact Page: < 1 second

### Expected Load Times (Production with Vercel + Railway)
- Homepage: < 500ms
- Product Pages: < 300ms
- Contact Page: < 300ms

## 📱 Testing on Different Devices

### Using Browser DevTools
```
1. Open DevTools (F12)
2. Click device toggle button
3. Select device type
4. Test responsive design
```

### Manual Testing
- iPhone: Safari
- Android: Chrome
- Tablet: Chrome in tablet mode
- Desktop: Chrome, Firefox, Safari

## 🎨 CSS Debugging

```css
/* Add borders to debug layout */
.debug {
  border: 2px solid red !important;
}

/* Add after class name in JSX temporarily */
<div className="my-component debug">
```

## 🔐 Security Checklist

- [ ] No sensitive data in git
- [ ] Environment variables in .env
- [ ] .env in .gitignore
- [ ] HTTPS in production
- [ ] CORS configured properly
- [ ] Input validation working
- [ ] No console.log of sensitive data
- [ ] API keys protected

## 📚 Learning Resources

### React
- https://react.dev
- https://react-router.org

### Tailwind CSS
- https://tailwindcss.com/docs
- https://tailwindui.com

### Express.js
- https://expressjs.com
- https://developer.mozilla.org/en-US/docs/Learn/Server-side

### Deployment
- https://vercel.com/docs
- https://docs.railway.app

## 🎯 Next Steps After Setup

1. ✅ Get everything running locally
2. ✅ Customize company details
3. ✅ Change colors to match brand
4. ✅ Add product images (create `/public/images/` folder)
5. ✅ Test contact form thoroughly
6. ✅ Deploy frontend to Vercel
7. ✅ Deploy backend to Railway
8. ✅ Set up custom domain
9. ✅ Configure email notifications
10. ✅ Monitor and optimize

## 💡 Pro Tips

1. **Use Thunder Client** instead of Postman for lightweight API testing
2. **Keep .env files** in .gitignore always
3. **Test contact form** with a test email before deployment
4. **Use Vercel** for frontend - it's the easiest
5. **Monitor error logs** after deployment
6. **Set up GitHub** for version control
7. **Use VS Code** for best development experience
8. **Install React DevTools** for debugging
9. **Keep dependencies updated** regularly
10. **Test on mobile** before deployment

---

Happy coding! If you have questions, refer to the main README.md or specific component documentation.
