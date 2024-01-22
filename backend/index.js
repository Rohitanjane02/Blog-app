const express = require('express');
const app=express();
const mongoose=require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments');
const cookieParser = require('cookie-parser');

//database
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!");
    } catch (err) {
        console.log(err);
    }
}

//middlewares
dotenv.config()
app.use(express.json())
app.use(cookieParser())
// origin:"http://localhost:5173"
app.use(cors({origin:"http://127.0.0.1:5173", credentials:true}))
app.use("/api/auth", authRoute) 
app.use("/api/users", userRoute) 
app.use("/api/posts", postRoute) 
app.use("/api/comments", commentRoute)



app.listen(process.env.PORT, ()=>{
    connectDB();
    console.log("app is running on port "+process.env.PORT);
})