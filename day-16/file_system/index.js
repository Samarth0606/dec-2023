

const fs = require('fs') //node + extrernally installed
// const http = require('http') //node + extrernally installed
// console.log(fs);

// -------- create ---------
// const data = "Samarth Vohra -> 9560780335"
// fs.writeFileSync('./test.txt' , data )

// const data2 = "Maverick Vohra -> 9999999999"
// fs.writeFileSync('./test.txt' , data2 )

// ----------------------------------------------
// -------- read ----------
// fs.readFileSync('./contact.txt' , "utf-8")
// let result = fs.readFileSync('./contact.txt' , {encoding:"utf-8"})
// console.log(result);

// fs.readFile('./contact.txt' , "utf-8" , (err,result)=>{
//     if(err){ throw err}
//     else console.log(result);
//     else console.log(result.toString());
// })


// ----------------------------------------------
// -------- update ---------

// fs.appendFileSync('./test.txt' , `${new Date().getDate().toLocaleString()} is the date today \n`)

// ----------------------------------------------
// copy
// fs.copyFileSync('./test.txt' , "./sam.txt")

// ----------------------------------------------
// stats
// console.log( fs.statSync('./test.txt') );

// ----------------------------------------------
// delete
// fs.unlinkSync('./sam.txt')
// fs.unlinkSync('./contact.txt')

// -------------------------------------------------------
// blocking     -> sync ❌
// console.log(10);
// const result = fs.readFileSync('./test.txt' , "utf-8") //blocking the tread here
// console.log(result);
// console.log(20);

// non-blocking -> async ✅
// console.log(10);
// fs.readFile('./test.txt' , "utf-8" , (err , result)=>{ //non-blocking
//     console.log(result);
// })
// console.log(20);

// const os = require('os');
// console.log( os.cpus().length );




