import "./config/env.js"
import app from "./app.js"
import connectDB from "./config/db.js"

const startServer = async () => {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is missing. Add it to server/.env before starting the server.")
    process.exit(1)
  }

  await connectDB()
  const PORT = process.env.PORT || 5000
  const server = app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT)
  })
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") console.log("Port " + PORT + " busy. Kill it first.")
  })
}

startServer()
