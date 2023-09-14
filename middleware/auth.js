const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth =  (req,res,next) => {
        try{
            const token = req.body.token || req.header("Authorization").replace("Bearer ",""); 
            // console.log(req.header("Authorization"));

            if(!token || token === undefined){
                return res.status(401).json({
                     success:false,
                     message:"Token Missing"
                });
            }

            try{
                const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
                // console.log(decode);

                // req.user = decode;

            }
            catch(err){
                return res.status(401).json({
                    success:false,
                    message:"Token Invalid"
               });
            }

            next();
        }catch(err){
            return res.status(401).json({
                success:false,
                error:err.message,
                message:"Internal Server Error"
           });
        }
}

module.exports=auth;