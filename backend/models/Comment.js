const mongoose=require('mongoose')

// postId-> to get all comments related to that post
const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    postId:{
        type:String,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    }
}, {timestamps:true})

// mongoose.model: This method is used to define a new model for a MongoDB collection.
//1arg->name of schema
//2arg->schema definition for the model
module.exports = mongoose.model("Comment", CommentSchema)