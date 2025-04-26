import axios from "axios"
import { useEffect, useState } from "react";
function Effects(){
    let [todos,setTodos] = useState([]);
    async function callApi() {
        let resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(resp.data)
        console.log(resp.data , "data");
        
    }
    useEffect(function(){
        callApi()
    },[])
    return(
        <>
            <div>
                {
                    todos.map((item)=>{
                        return (
                            <>
                                <h1>item: {item.id}</h1>
                                <h2>title: {item.title}</h2>
                                <h3>isCompleted: {JSON.stringify(item.completed)}</h3>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Effects