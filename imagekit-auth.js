// This is a basic implementation - for production, use a proper backend

const express = require("express")
const crypto = require("crypto")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const IMAGEKIT_PRIVATE_KEY = "private_ocuHLfwK9n883Jf7W+xt4TAQGUY="

app.get("/auth", (req, res) => {
  const token = req.query.token || crypto.randomUUID()
  const expire = req.query.expire || Math.floor(Date.now() / 1000) + 2400

  const authSignature = crypto
    .createHmac("sha1", IMAGEKIT_PRIVATE_KEY)
    .update(token + expire)
    .digest("hex")

  res.json({
    token: token,
    expire: expire,
    signature: authSignature,
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`ImageKit auth server running on port ${PORT}`)
})

module.exports = app
