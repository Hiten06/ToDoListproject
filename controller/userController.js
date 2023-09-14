const Customer = require("../models/Customer");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            res.status(500).json({
                message:"Please entered the required information"
            })
        }
         const user = await Customer.find({email:email});
         if(user.length>0){
            res.status(400).json({
                message:"User is already registered"
            })
         }
         else{
            let hashPassword;
            try{
               
                 hashPassword = await bcrypt.hash(password,10);
            }
            catch(err){
                console.log(err.message);
            }
    
            const newuser = await Customer.create({
                name:name,
                email:email,
                password:hashPassword
            });
    
            if(newuser){
                res.status(201).json({
                    message:"User Registered Successfully"
                })
            }
         }

       
        
    }
    catch(err){
        res.status(500).json({
            error:err.message,
            message:"Internal server error"
        });
    }
}

const LoginUser = async(req,res)=>{
     try{
        const {email,password} = req.body;
        if(!email || !password){
            res.status(500).json({
                message:"The Information is Not Found"
            });
        }

        let user = await Customer.findOne({email:email});
        
        if(!user){
            res.status(404).json({
                message:"User is not registered"
            })
        }
        else{
            if(await bcrypt.compare(password,user.password)){
                const payload = {
                    id:user._id,
                    email:user.email,
                   };
                    let token = jwt.sign(payload,process.env.JWT_SECRET_KEY,{
                        expiresIn:'2h',
                    });

                

                    res.status(200).json({
                        message:"User Login Sucessfully",
                        generatedToken:token
                    });
            }
        }
     }
     catch(error){
        res.status(500).json({
            error:error.message,
            message:"Internal Server Error"
        })
     }
}

module.exports = {registerUser,LoginUser};