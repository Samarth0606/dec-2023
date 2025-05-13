// const express = require('express');
// const app  = express();

//middleware -> runs on every incoming request
// app.use((req,res,next)=>{
//     console.log("middleware-1");
//     // res.send("mai middleware hu") //req-res cycle ended here
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("middleware-2");
//     next();
// })

//root route
// app.get('/' , (req,res)=>{
//     res.send('<h1>I AM ROOT ROUTE</h1>')
// }) 

// app.get('/sam' , (req,res)=>{
//     res.send('<h1>I AM SAM ROUTE</h1>')
// })

// const PORT = 5050;
// app.listen(PORT , ()=>{
//     console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
// })



// // ---------------------------------------------------

// const express = require('express');
// const app  = express();

// // app.use( (req,res,next)=>{
// app.use('/sam' , (req,res,next)=>{
//     let username = req.query.username;
//     if(username === "samarth"){
//         next()
//     }
//     else{
//         return res.send("INVALID USER")
//     }
// })

// app.get('/sam' , (req,res)=>{
//     res.send('<h1>I AM SAM ROUTE</h1>')
// })

// const PORT = 5050;
// app.listen(PORT , ()=>{
//     console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
// })


// ---------------------------------------------------

const express = require('express');
const app  = express();

app.use('/sam/:iddd' , (req,res,next)=>{
    const {iddd} = req.params;
    console.log(iddd ,"paramss");
    res.send(iddd)
    next();
})

app.get('/sam/:id' , (req,res)=>{
    // const paramss = req.params;
    // console.log(paramss ,"paramss");
    // res.send(paramss)
    res.send('<h1>I AM SAM ROUTE</h1>')
})

const PORT = 5050;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})



