const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken");



//Controller for user signup

const signup = async (req, res) => {
    try {
     const {username, email, password} = req.body;

     const user = await UserModel.findOne({email:email})

     if(user){
        return res.status(400).json({message: "User already exists!",success: false});
     }

     const newUser=new UserModel({
        username: username,
        email: email,
        password: password
     });
     
     newUser.password = await bcrypt.hash(password,10);

     await newUser.save();

    res.status(201).json({message: "User created successfully!", success: true} );

    } 
    catch (error) {
        res.status(500).json({  message: "Internal server error", success: false, error: error.message});


    }      

};



const login = async (req,res)  =>{

    try{

        const {username, password} = req.body;
        const user = await UserModel.findOne({username});

        if(!user){
            return res.status(400).json({message: "Invalid credentials", success: false});

        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials", success: false });
        }  
         
        const JWT_token = sign(
            {username:user.username, email:user.email},
            process.env.JWT_SEC,
            {expiresIn: '24h'}

        )


        res.status(200).json({
            message: "Login successful!",
            success: true,
            token: JWT_token,
            username:user.username
        }); 

        

    }


    catch (error){

        res.status(500).json({ message: "Internal server error", success: false, error: error.message });
    }

}

module.exports = {
    signup,
    login
};
