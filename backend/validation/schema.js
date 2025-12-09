import Joi from "joi";

const regSchema = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        address: Joi.string().min(5).max(100)
    })

    const valid = schema.validate(data)
    return valid;
}
const loginSchema = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })

    const valid = schema.validate(data)
    return valid;
}

export { regSchema, loginSchema };