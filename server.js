import dotenv from "dotenv"; // Load environment variables
dotenv.config();

import app from "./app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define the PORT (use default 5000 if not set)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});

