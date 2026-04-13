import express from "express";

const app = express();

// Middleware
app.use(express.json());

//Health Check Route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
