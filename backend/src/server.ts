require("dotenv").config();
import express from "express";
import messageRouter from "./routes/messageRouter";

const app = express();

app.use(express.json());
app.use("/api", messageRouter);

const PORT = 2133;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
