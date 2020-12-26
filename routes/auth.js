const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')


// Validation

// const joi = require('@hapi/joi');
const { validate } = require('../models/User');

// const validateSchema = {
//     name:joi.string().min(3).max(25).required(),
//     email:joi.string().min(6).max(256).required(),
//     password:joi.string().max(6).max(20).required()
// }

router.post('/register',async(req,res) => {

    // const {validateObj,error} = validateSchema.validate(req.body)

    // res.send(validateObj,error)
    // console.log(validateObj,error)
    
    // Hash password.
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    });
    try {
        const saveUser = await user.save();
        res.send(saveUser)
    }
    catch(err){
        res.status(400).send(err)
    }
     
})

router.post('/login', async (req,res) => {
    const user = await User.findOne({email: req.body.email})

    if(!user) {
        res.status(400).send("user mail id or password not found")
    }
    else {
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        if(validPassword) {
            res.send({user})
        }
        else {
            res.send("wrong Password entered")
        }
    }

})

module.exports = router