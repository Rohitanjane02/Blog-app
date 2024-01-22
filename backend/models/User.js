const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
}, {timestamps:true})

// mongoose.model: This method is used to define a new model for a MongoDB collection.
//1arg->name of schema
//2arg->schema definition for the model
module.exports = mongoose.model("User", UserSchema)