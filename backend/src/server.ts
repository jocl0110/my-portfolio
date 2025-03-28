import "dotenv/config"
import express from "express";
import cors from "cors";
import messageRouter from "./routes/messageRouter";

const app = express();

// CORS configuration
app.use(cors({
  origin: ["https://flourishing-wisp-50b475.netlify.app", "http://localhost:5173"],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}));
app.use(express.json());
app.use("/api", messageRouter);

const PORT = process.env.PORT || 2133;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
