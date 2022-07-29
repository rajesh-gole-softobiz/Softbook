const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register',async (req,res)=>{
    try {
        //Create Password
        //Generate Salt
        const salt = await bcrypt.genSalt(10);
        //Hash Password
        const hashedPassword =await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword, //req.body.password,
        })

        //save user and return respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(err); //console.log(err);
    }
})


//LOGIN
router.post('/login', async (req,res)=>{
    try {
        // user-id is not found
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json('user not found')

        // wrong password
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json('wrong password')

        // success
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err); //console.log(err);
    }
    
})


module.exports = router;