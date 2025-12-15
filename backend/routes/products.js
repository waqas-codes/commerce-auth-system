import express from 'express'
import Products from '../models/Products.js'
import verifyToken from './tokenVerify.js'
const router = express.Router()

router.get("/", verifyToken, async (req, res) => {
    const products = await Products.find({})
    res.send(products)
})

export default router;



