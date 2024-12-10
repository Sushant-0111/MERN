import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from './routes/Product.route.js';
import mongoose from 'mongoose';

dotenv.config();

const app = 5000;
const Port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/products',productRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log('Server is running on port:'+PORT);
})


