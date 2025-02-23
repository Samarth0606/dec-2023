
// let arr = [10,20,30,40,50]

// let retArr = arr.map(function(item , index){
//     return item*item
// })
// console.log(arr);
// console.log(retArr);

// ---------------------------------------

// let arr = [11,22,35,40,76]

// let filArr = arr.filter(function(item,index){
//     return item%5 === 0
// })


// console.log(arr);
// console.log(filArr);


// ---------------------------------------------------------------------------------------------------------------------------------



// class are syntactical sugar of constructor function -> create objects


// function Sam(name , ph){
//     this.naam = name;
//     this.num = ph;
// }

// let s1 = new Sam("SAM" , 300);
// console.log(s1);

// ----------------------------------

// class Sam{
//     constructor(name , ph){
//         this.naam = name;
//         this.num = ph;
//     }
//     greet(){

//     }
// }

// class Vohra extends Sam{
//     constructor(name , ph){
//         super(name , ph)
//         this.isMale = true
//     }
//     greet(){
        
//     }
// }

// let s1 = new Vohra("SAM" , 300);
// console.log(s1);


// ---------------------------------------------------------------------------------------------------------------------------------

// this depends on how it is being called => 5

// functional calling     -> window      
// method calling         -> obj
// constructor calling    -> newly created object 
// indirect calling       -> changes the reference of this keyword
// arrow fn calling       ->

// ---------------------------

// function sam(){
//     console.log(this);
// }

// sam(); // direct/fn 

// ---------------------------


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); 
//     }
// }

// obj.fn() // object inside which this method is available

// ---------------------------

// let obj2 = {
//     a: 19,
//     fun: function(){
//         console.log(this , "1"); //window
//         function sam(){
//             console.log(this , "2"); // window
//         }
//         sam()
//         let abc = function(){
//             console.log(this , "3"); //window
//         }
//         abc();
//     }
// }

// let ans = obj2.fun;
// ans()

// ---------------------------

// function Sam(){
//     this.naam = "sam";
// }
// let s1 = new Sam()
// let s2 = new Sam()

// ---------------------------

// indirect calling -> call apply bind


// let obj1 = {
//     x: 100,
//     fn: function(a,b,c){
//         console.log(this.x,a,b,c);
//     }
// }
// obj1.fn();

// let obj2 = {
//     x: 20
// }
// obj1.fn.call(obj2,1,2,3)
// obj1.fn.apply(obj2,[10,20,30])

// let newww = obj1.fn.bind(obj2,1,2,3)
// newww();

// let newFn = obj1.fn.bind(obj2,1,2,3)
// newFn();


// --------------------------------------------------------
// const obj = {
//   prefix: 'ravi',
//   list: ['1', '2', '3'],
//   log() {
//     console.log(this.prefix , "1")
//     this.list.forEach(function (item) {
//       console.log(this.prefix + item , "2");  
//     });
//   },
// };
// obj.log();
// bhaiya idhar undefined kyon ata he in forEach me itna hi doubt tha


// --------------------------------------------------------

// const message = {
//     naame:'John',
//     greet:function(){
//         setTimeout(function(){
//             console.log(`Hey `+ this.naame+` , how are you ?`)
//         },1000);
//     }
// }


// message.greet();


// ---------------------------

// arrow fn

// let obj2 = {
//     a: 19,
//     fun: function(){
//         console.log(this , "1"); //obj
//         function sam(){
//             console.log(this , "2"); // window
//         }
//         sam()
//         let abc = ()=>{
//             console.log(this , "3"); //obj
//         }
//         abc();
//     }
// }

// obj2.fun();

// ---------------------------------------------------------------------------------------------------------------------------------


// let p1 = new Promise(function(resolve , reject){
//     resolve("i am sam");
// })

// // console.log(p1);

// p1
// .then(function(data){
//     console.log(data , "then");
// })
// .catch(function(err){
//     console.log(err , "catch");
// })
// .finally(function(){
//     console.log("ia m finally");
// })

// -----------------------------------------------

// https://api.tvmaze.com/search/shows?q=girls


// fetch("https://api.tvmaze.com/search/shows?q=superman")
// .then(function(resp){
//     console.log(resp , "then");
//     return resp.json()
// })
// .then(function(data){
//     console.log(data , "data");
//     // for(let item of data){
//     //     console.log("score", item.score); 
//     // }
// })
// .catch(function(err){
//     console.log(err , "catch");
// })

// ---------------------------------------------------------------------------------------------------------------------------------


// async function vohra(){
//     let partialData = await fetch("https://api.tvmaze.com/search/shows?q=superman");
//     let finalData = await partialData.json();
//     console.log(finalData);
// }

// console.log( vohra() );

// ----------


async function a(){
    console.log("10");
    console.log("20");
    let partialData = await fetch("https://api.tvmaze.com/search/shows?q=superman");
    let finalData = await partialData.json();
    console.log(finalData);
    console.log("30");
    
}
async function b(){
    console.log("100");
    console.log("200");
    console.log("300");
    let partialData = await fetch("https://api.tvmaze.com/search/shows?q=superman");
    let finalData = await partialData.json();
    console.log(finalData);
}

b()
a()
console.log("tata bye");




