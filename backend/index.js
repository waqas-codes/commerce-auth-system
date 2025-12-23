import express from 'express'
import router from './routes/user.js';
import productRouter from './routes/products.js'
import productRoute from "./routes/product.js"
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3001

const corsOptions = {
    exposedHeaders: ['Content-Length', 'token', 'Authorization'],
    origin: 'http://localhost:5173'
}
app.use(cors(corsOptions))

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.svlmqsf.mongodb.net/?appName=Cluster0`)

app.use(express.json())

app.use("/api/user", router)
app.use("/api/products", productRouter)
app.use("/api/product", productRoute)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);    
})