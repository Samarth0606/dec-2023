// const ApiCalling = ()=>{
//     return(
//         <>
//             <h1>I am api calling</h1>
//         </>
//     )
// }


// --------------------------------------


// import { Fragment } from "react"

// const ApiCalling = ()=>{
//     return(
//         <React.Fragment>
//             <h1>I am api calling</h1>
//         </React.Fragment>
//     )
// }
// export default ApiCalling;



// --------------------------------------

//better way to write code
import { Fragment, useEffect, useState } from "react"

const ApiCalling = ()=>{
    let [apiData, setApiData] = useState([]);

    const API = "https://api.tvmaze.com/search/shows?q=girls";
    function calling(){
        fetch(API)
        .then(function(data){
            return data.json()
        })
        .then(function(resp){
            // console.log(resp , "then x 2") 
            setApiData(resp) //change in state => component rerenders
        })
        .catch(
            function(err){
            console.log(err , "catch") 
        })
    }

    // only first time + when dependency array changes
    useEffect( function(){
        calling();
    }, [])

    console.log(apiData , "1");

    return(
        <Fragment>
            <h1>I am api calling</h1>
        </Fragment>
    )
}
export default ApiCalling;




