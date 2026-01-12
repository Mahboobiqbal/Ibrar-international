# Deployment Guide - Ibrar International Website

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Environment variables configured
- [ ] Frontend built successfully
- [ ] Backend tested locally
- [ ] Contact form tested
- [ ] All pages tested
- [ ] Responsive design verified
- [ ] No console errors
- [ ] Custom domain ready (optional)

## 🌐 Deployment Options

### Option 1: Frontend on Vercel (Recommended)

**Easiest deployment for frontend**

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub account

2. **Connect Repository**
   - Connect your GitHub repo
   - Select `frontend` folder as root

3. **Environment Variables**
   - No additional config needed (uses proxy)

4. **Deploy**
   - Vercel auto-deploys on push
   - Your site goes live immediately

5. **Custom Domain**
   - Add domain in Vercel dashboard
   - Update DNS records

### Option 2: Frontend on Netlify

**Alternative frontend hosting**

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub

2. **Deploy**
   ```bash
   cd frontend
   npm run build
   npm install -g netlify-cli
   netlify deploy
   ```

3. **Configuration**
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Option 3: Backend on Railway

**Easiest backend deployment**

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy**
   - Connect GitHub repo
   - Railway auto-detects Node.js
   - Auto-deploys on push

3. **Environment Variables**
   - Set in Railway dashboard:
   ```
   PORT=5000
   NODE_ENV=production
   ```

4. **Database Connection** (if needed)
   - Railway provides MongoDB plugin
   - Add connection string

### Option 4: Backend on Heroku

**Traditional backend hosting**

1. **Create Heroku Account**
   - Go to https://heroku.com
   - Sign up

2. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

3. **Deploy**
   ```bash
   cd backend
   heroku create your-app-name
   heroku config:set NODE_ENV=production
   git push heroku main
   ```

### Option 5: Both on AWS

**Enterprise-level deployment**

**Frontend:**
- Build: `npm run build`
- Upload `dist/` to S3 bucket
- CloudFront CDN for distribution

**Backend:**
- Deploy to EC2 or Elastic Beanstalk
- Use RDS for database
- CloudWatch for monitoring

## 🔧 Production Configuration

### Frontend (.env.production)
```
VITE_API_URL=https://api.yourdomain.com
```

### Backend (.env.production)
```
PORT=5000
NODE_ENV=production
DATABASE_URL=your_database_url (if using DB)
CORS_ORIGIN=https://yourdomain.com
```

## 🚀 Complete Deployment Workflow

### Using Vercel (Frontend) + Railway (Backend)

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy Frontend to Vercel**
   - Push to GitHub
   - Vercel auto-deploys
   - Get frontend URL: `https://your-app.vercel.app`

3. **Deploy Backend to Railway**
   - Push backend folder to GitHub
   - Connect to Railway
   - Get backend URL: `https://your-app-api.railway.app`

4. **Update API Configuration**
   - In `frontend/vite.config.js`:
   ```javascript
   proxy: {
     '/api': {
       target: 'https://your-app-api.railway.app',
       changeOrigin: true,
     },
   }
   ```

5. **Redeploy Frontend**
   - Push changes
   - Vercel auto-redeployment

## 📊 Deployment Comparison

| Service | Frontend | Backend | Cost | Ease |
|---------|----------|---------|------|------|
| **Vercel** | ✅ Excellent | ❌ Limited | Free | ⭐⭐⭐⭐⭐ |
| **Netlify** | ✅ Excellent | ❌ No | Free | ⭐⭐⭐⭐ |
| **Railway** | ✅ Good | ✅ Excellent | $5/mo | ⭐⭐⭐⭐ |
| **Heroku** | ❌ No | ✅ Good | Paid | ⭐⭐⭐ |
| **AWS** | ✅ Complex | ✅ Complex | Varies | ⭐⭐ |

## 🔐 Security for Production

### 1. HTTPS/SSL
```
- Vercel: Auto-enabled
- Railway: Auto-enabled
- AWS: CloudFront + ACM
```

### 2. Environment Variables
```bash
# Never commit .env files
# Use service provider's secret management
```

### 3. CORS Configuration
```javascript
// Update for production
const corsOptions = {
  origin: 'https://yourdomain.com',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));
```

### 4. API Rate Limiting
```javascript
// Add to backend
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### 5. Input Validation
- Already implemented in contact form
- Validate all inputs on backend
- Sanitize data before processing

## 📈 Performance Optimization

### Frontend
```bash
# Build with optimizations
npm run build

# Check bundle size
npm install -g vite-plugin-visualizer
```

### Backend
```javascript
// Enable compression
import compression from 'compression';
app.use(compression());

// Add caching headers
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=3600');
  next();
});
```

## 📊 Monitoring & Analytics

### Frontend
- Vercel Analytics (auto-enabled)
- Google Analytics
- Sentry for error tracking

### Backend
- Railway logs dashboard
- Error tracking (Sentry)
- Performance monitoring (New Relic)

## 🆘 Troubleshooting Deployment

### API Connection Issues
1. Check backend URL in frontend config
2. Verify CORS settings
3. Check environment variables
4. Test API endpoint with Postman

### Build Failures
1. Clear cache: `npm cache clean --force`
2. Delete node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### Slow Performance
1. Check bundle size
2. Enable gzip compression
3. Use CDN for static assets
4. Optimize database queries

## 📱 Monitoring After Deployment

### Check Status
1. Visit your frontend URL
2. Test contact form
3. Check API endpoints
4. Monitor error logs

### Set Up Alerts
- Email notifications for errors
- Slack integration for notifications
- Uptime monitoring (UptimeRobot)

## 🔄 Continuous Deployment (CD)

### Automated Deployment
```yaml
# GitHub Actions example
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy Frontend
        run: npm run build --prefix frontend
      - name: Deploy Backend
        run: npm install --prefix backend
```

## 📞 Post-Deployment Checklist

- [ ] Test all pages
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify API calls
- [ ] Test WhatsApp link
- [ ] Check 404 pages
- [ ] Monitor error logs
- [ ] Set up analytics
- [ ] Configure email notifications
- [ ] Update DNS records

## 🎯 Deployment Summary

**Recommended Setup:**
- **Frontend:** Vercel (free, easy, excellent performance)
- **Backend:** Railway (free tier, great for Node.js)
- **Domain:** Namecheap or GoDaddy
- **Email:** SendGrid or Mailgun (for future)
- **Analytics:** Vercel + Google Analytics

**Estimated Monthly Cost:** $0-5 USD

---

For questions or issues during deployment, refer to official documentation:
- Vercel: https://vercel.com/docs
- Railway: https://docs.railway.app
- Express: https://expressjs.com
- React: https://react.dev
