import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {

    const token = req.header("token-auth")
    if(!token) return res.status(400).send("token not found!")

    try {
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verify
        next()
    } catch (error) {
        res.status(400).send(error)
    }
}

export default verifyToken