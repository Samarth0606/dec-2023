
const express = require('express');
const app = express(); //instance of application


app.get('/home' , (req,res)=>{
    return res.send("<h1> I am h1</h1>")
})
app.get('/about' , (req,res)=>{
    return res.send("<h1> I am about page</h1>")
})

app.get('/shinchan' , (req,res)=>{
    res.send("hi from shinchan GET")
})
app.post('/shinchan' , (req,res)=>{
    res.send("hi from shinchan POST")
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})








