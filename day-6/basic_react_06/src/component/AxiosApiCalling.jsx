import { Fragment, useEffect, useState } from "react"
import axios from "axios";

const AxiosApiCallingAsyncAwait = ()=>{
    let [axiosData,setAxiosData] = useState([]);
    const API = "https://api.tvmaze.com/search/shows?q=girls";
    //way-1
    // axios.get(API)
    // .then(function(resp){
    //     console.log(resp.data , "then");
    // })
    // .catch(function(err){
    //     console.log(err , "catch"); 
    // })
    //way -2
    async function callingApii(){
        let resp = await axios.get(API);
        // console.log(resp.data , "respp");
        setAxiosData(resp.data) //chnage in state
    }
    
    useEffect(function(){
        callingApii()
    } , [])

    console.log(axiosData , "11");
    
    return(
        <Fragment>
            <h1>Api calling using async and axios</h1>
            {
                axiosData.map((item)=>{
                    return(
                        <>
                            <h1>Score: {item.score} </h1>
                            <img src={item.show.image.medium} />
                        </>
                    )
                })
            }
        </Fragment>
    )
} 

export default AxiosApiCallingAsyncAwait