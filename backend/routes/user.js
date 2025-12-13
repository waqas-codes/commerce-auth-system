import express from 'express'
import { regSchema, loginSchema } from '../validation/schema.js';
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import verifyToken from './tokenVerify.js';
const router = express.Router();

router.get("/register", verifyToken, (req, res) => {
    res.send('i am register get method')
})
router.post("/register", async (req, res) => {

    const {name, email, password, address} = req.body
    const {error} = regSchema(req.body)

    if(error) res.send(error.details[0].message)

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const findUser = await User.findOne({email: req.body.email})

    if(findUser) return res.status(400).send("user is already registered!!!")

    const user = new User({
        name,
        email,
        password: hash,
        address
    })

    try {
        const userSaved = await user.save();
        res.send(userSaved)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.patch("/register", (req, res) => {

})
router.delete("/register", (req, res) => {

})

router.get("/login", (req, res) => {
    res.send("i am in login get method")
})
router.post("/login", async (req, res) => {

    const {email, password} = req.body;
    const user = await User.findOne({email: email})

    if(!user) return res.status(400).send("email not found!") // for more security we should add this sentence --> email or password incorrect

    const compare = await bcrypt.compare(password, user.password)
    if(!compare) return res.status(400).send("password is incorrect!")

    res.send("User is logged in")
    // const token = jwt.sign({email: user.email}, process.env.TOKEN_SECRET)
    // res.header("token-auth", token).send(token)

    // res.send(token)

    // res.send("user is logged in!")

})
router.patch("/login", (req, res) => {

})
router.delete("/login", (req, res) => {

})


export default router
