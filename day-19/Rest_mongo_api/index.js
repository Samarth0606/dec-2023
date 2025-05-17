import express from 'express';
const app = express(); //instance of app -> poori application
import mongoose  from 'mongoose';
import {commentRoutes} from './routes/comment.routes.js'

mongoose.connect('mongodb://127.0.0.1:27017/rinkiakepapa')// returns a promise
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log("DB NOT CONNECTED" , err);
})

app.use(express.json()) //body parsing middleware

// root route
app.get('/' , (req,res)=>{
    res.send("WELCOME TO ROOT ROUTE")
})

// middleware
commentRoutes(app)

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`); 
})

