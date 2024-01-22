const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const verifyToken = require('../verifyToken')


//CREATE
router.post("/create", verifyToken, async (req,res)=>{
    try {
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", verifyToken, async (req, res)=>{
    try {
        const updatedUser = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }  
})

//DELETE
router.delete("/:id", verifyToken, async (req, res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted!")

    } catch (err) {
        res.status(500).json(err)
    }  
})


//GET POST DETAILS
router.get("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }  
})


//GET POSTS
//REGEX-> to search some Substring(pattern) value in a particular string in MongoDB
//$options:"i"->handle case when someone search post in uppercase it should still display the o/p
//->i-->to match both lowerCase and upperCase
router.get("/", async (req, res)=>{
    const query = req.query
    console.log(query);
    try {
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        // query.search?searchFilter:null-->here we used js if we have some pattern than i have to use SearchFilter, o/w null
        const posts = await Post.find(query.search?searchFilter:null)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }  
})


//GET USER POSTS
router.get("/user/:userId", async (req, res)=>{
    try {
        const posts = await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }  
})






module.exports = router 