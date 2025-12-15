import express from 'express'
import verifyToken from './tokenVerify.js'
import Products from '../models/Products.js'
const router = express.Router()

router.get("/", verifyToken, async (req, res) => {
    const pid = req.query.pid
    const product = await Products.findOne({id: pid})
    res.send(product)
})

export default router