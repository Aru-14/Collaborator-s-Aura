const Joi = require('joi');

//Validation middleware for signup


const signupValidate = (req,res,next)=>{
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }   
    next();
}



//Validation middleware for login

const loginValidate = (req,res,next)=>{     
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required()
    });    

    const {username, password} = req.body;
    const { error } = schema.validate({ username, password });
    if (error) {

        return res.status(400).send(error.details[0].message);  

    }
    next();


}



//Exporting the validation functions

module.exports = {
    signupValidate,
    loginValidate
};


