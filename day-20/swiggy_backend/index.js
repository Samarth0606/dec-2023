import express from 'express';
const app = express();
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://samarthvohraindia:TqyEEJgrzyHbJJCQ@cluster0.vpxahlo.mongodb.net/')
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log("DB NOT CONNECTED" , err);
})

app.use(express.json()) //middleware


app.get('/' , (req,res)=>{
    res.send("Welcome to root route")
})


const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`SERVER CONNECTED AT PORT:${PORT}`);
})


// mongodb+srv://samarthvohraindia:TqyEEJgrzyHbJJCQ@cluster0.vpxahlo.mongodb.net/
// samarthvohraindia
// TqyEEJgrzyHbJJCQ