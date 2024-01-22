const mongoose=require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    desc:{
        type:String,
        require:true,
        unique:true
    },
    photo:{
        type:String,
        require:false,
    },
    username:{
        type:String,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    },
    categories:{
        type:Array, 
    }
}, {timestamps:true})

// mongoose.model: This method is used to define a new model for a MongoDB collection.
//1arg->name of schema
//2arg->schema definition for the model
module.exports = mongoose.model("Post", PostSchema) 