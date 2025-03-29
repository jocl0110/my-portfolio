import type { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http";

const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  console.log(`PATH ${req.path} - Error: ${err.message}`);
  res.status(INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
