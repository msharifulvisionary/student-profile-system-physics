// ImageKit Authentication Server
// This file needs to be deployed to handle ImageKit authentication
// You can deploy this to Vercel, Netlify, or any Node.js hosting service

const express = require("express")
const cors = require("cors")
const ImageKit = require("imagekit")

const app = express()

// Enable CORS for your domain
app.use(
  cors({
    origin: ["https://yourusername.github.io", "http://localhost:3000", "http://127.0.0.1:5500"],
    credentials: true,
  }),
)

// Initialize ImageKit
const imagekit = new ImageKit({
  publicKey: "public_hVAN26ygTqOwXiKvqHBCVcY6jXA=",
  privateKey: "private_ocuHLfwK9n883Jf7W+xt4TAQGUY=",
  urlEndpoint: "https://ik.imagekit.io/msharifulvisionary",
})

// Authentication endpoint for ImageKit
app.get("/auth", (req, res) => {
  try {
    const authenticationParameters = imagekit.getAuthenticationParameters()
    res.json(authenticationParameters)
  } catch (error) {
    console.error("ImageKit auth error:", error)
    res.status(500).json({ error: "Authentication failed" })
  }
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "ImageKit auth server is running" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`ImageKit auth server running on port ${PORT}`)
})

module.exports = app
