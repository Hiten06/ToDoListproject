const mongoose= require("mongoose");

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Todo",TodoSchema);