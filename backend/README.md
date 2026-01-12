# Ibrar International - Backend

Node.js + Express.js backend server for business showcase website

## Project Structure

```
backend/
├── server.js
├── .env
├── package.json
└── README.md
```

## Features

- ✅ Express.js server
- ✅ CORS enabled for frontend communication
- ✅ Body parser for JSON/form data
- ✅ Contact form API endpoint
- ✅ Health check endpoint
- ✅ Environment variables with dotenv
- ✅ Error handling and logging
- ✅ Request logging middleware

## Installation & Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Edit `.env` file (already configured with defaults)

4. Start the server:
   ```bash
   npm start
   ```

5. For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Health Check
- **GET** `/api/health`
- Response: `{ status: "OK", message: "Server is running" }`

### Contact Form Submission
- **POST** `/api/contact`
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in your products"
  }
  ```
- Response:
  ```json
  {
    "success": true,
    "message": "Your message has been received...",
    "data": { "timestamp": "...", "name": "...", "email": "...", "message": "..." }
  }
  ```

### Get Products
- **GET** `/api/products`
- Returns: All rice and marble products

### Get Services
- **GET** `/api/services`
- Returns: All available services

## Configuration

### Environment Variables (.env)
```
PORT=5000
NODE_ENV=development
```

### CORS
Currently allows requests from all origins. Update for production:
```javascript
const corsOptions = {
  origin: 'https://yourdomain.com',
  credentials: true
};
app.use(cors(corsOptions));
```

## Contact Form Logging

When a contact form is submitted, the server logs:
- Full name
- Email address
- Message content
- Timestamp

Data is logged to console (can be extended to database in production)

## Running Both Frontend & Backend

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm start
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. Frontend will be at `http://localhost:5173`
4. Backend will be at `http://localhost:5000`

The frontend is configured with proxy to `/api` routes to the backend.
