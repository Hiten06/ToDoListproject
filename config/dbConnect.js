const mongoose = require("mongoose");

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true

      });
      console.log("Connected to the Mongodb");
    }  
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
    
}

module.exports = dbConnect;