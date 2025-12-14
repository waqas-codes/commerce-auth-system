import express from 'express'
import Products from '../models/Products.js'
const router = express.Router()

router.get("/", async (req, res) => {
    const products = await Products.find({})
    res.send(products)
})

export default router;



