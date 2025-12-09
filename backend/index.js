import express from 'express'
import router from './routes/user.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3001

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.svlmqsf.mongodb.net/?appName=Cluster0`)

app.use(express.json())

app.use("/api/user", router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);    
})