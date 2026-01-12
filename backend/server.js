import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes

/**
 * GET /api/health - Health check endpoint
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

/**
 * POST /api/contact - Contact form submission
 * Body: { name, email, message }
 */
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Log contact form data
    const contactData = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    console.log("📬 New Contact Form Submission:");
    console.log("================================");
    console.log(`Name: ${contactData.name}`);
    console.log(`Email: ${contactData.email}`);
    console.log(`Message: ${contactData.message}`);
    console.log(`Timestamp: ${contactData.timestamp}`);
    console.log("================================\n");

    // Send success response
    res.status(200).json({
      success: true,
      message: "Your message has been received. We will get back to you soon.",
      data: contactData,
    });
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

/**
 * GET /api/products - Get all products (for future use)
 */
app.get("/api/products", (req, res) => {
  const products = {
    rice: [
      { id: 1, name: "Basmati Rice", category: "rice" },
      { id: 2, name: "Sella Rice", category: "rice" },
      { id: 3, name: "Brown Rice", category: "rice" },
      { id: 4, name: "Long Grain Rice", category: "rice" },
    ],
    marbles: [
      { id: 1, name: "White Marble", category: "marble" },
      { id: 2, name: "Italian Marble", category: "marble" },
      { id: 3, name: "Granite", category: "marble" },
      { id: 4, name: "Onyx Marble", category: "marble" },
    ],
  };

  res.json({
    success: true,
    data: products,
  });
});

/**
 * GET /api/services - Get all services (for future use)
 */
app.get("/api/services", (req, res) => {
  const services = [
    {
      id: 1,
      name: "Export & Supply",
      description: "Global export and supply chain management",
    },
    {
      id: 2,
      name: "Custom Packaging",
      description: "Tailored packaging solutions",
    },
    {
      id: 3,
      name: "Quality Inspection",
      description: "Rigorous quality control standards",
    },
    {
      id: 4,
      name: "Marble Cutting & Finishing",
      description: "Expert marble cutting services",
    },
    {
      id: 5,
      name: "Logistics Support",
      description: "Reliable logistics and delivery",
    },
    {
      id: 6,
      name: "Technical Consultation",
      description: "Expert guidance on product selection",
    },
  ];

  res.json({
    success: true,
    data: services,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.path,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error:
      process.env.NODE_ENV === "development" ? err.message : "Server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log("\n🚀 Ibrar International Backend Server");
  console.log("=====================================");
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
  console.log("=====================================\n");
  console.log("Available Endpoints:");
  console.log("  GET  /api/health");
  console.log("  POST /api/contact");
  console.log("  GET  /api/products");
  console.log("  GET  /api/services\n");
});

export default app;
