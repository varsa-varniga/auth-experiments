import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
 
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

//DATABASE
connectDB();

//MIDDLEWEAR


//ROUTES 
//AUTH ROUTES
app.use("/api/auth",authRoutes);



export default app;
