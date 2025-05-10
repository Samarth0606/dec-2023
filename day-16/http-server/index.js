
const http = require('http');
const myServer = http.createServer((req,res)=>{ // cb fn = request listener
    // console.log("new request has been initiated");
    // console.log(req , "req");
    
    res.end("hello from server from http module")
}); 


const PORT = 8000;   //8080 5050 5000 8000 => (3000-9000)
myServer.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})











