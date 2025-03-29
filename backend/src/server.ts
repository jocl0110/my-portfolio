import "dotenv/config";
import express from "express";
import cors from "cors";
import messageRouter from "./routes/messageRouter";
import errorHandler from "./middleware/errorHandler";
import { PORT } from "./constants/env";

const app = express();

// Middlewares
// CORS configuration
app.use(
  cors({
    origin: [
      "https://flourishing-wisp-50b475.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
// Body parser middleware
app.use(express.json());

// Routes
app.use("/api", messageRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
