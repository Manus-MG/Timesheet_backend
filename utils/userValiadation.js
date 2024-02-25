
const Joi = require('joi');

const userRegisterValidate = (req, res, next)=>{
    const schema = Joi.object({
        Fname: Joi.string().min(3).max(100).required(),
        Lname: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).alphanum().required(),
        passwordConfirm:Joi.string().min(4).alphanum().required(),
        dateOfBirth:Joi.date(),
        mob:Joi.number(),
        niNumb:Joi.number()
    });
    const {error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad Request", error})
    }
    next();
}

const userLoginValidate = (req,res,next)=>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).alphanum().required()
    });
    const {error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad Request", error})
    }
    next();
}
module.exports = {
    userRegisterValidate,
    userLoginValidate
}