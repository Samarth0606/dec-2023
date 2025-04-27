import { Fragment, useState } from "react";

function Todos(){
    let todosArr = [
        {title:"surya namaskaar", desc:"good for gut"},
        {title:"shaam namaskaar", desc:"good for timepaaas"},
        {title:"raat namaskaar",  desc:"good for sleeping"}
    ]
    let [myTodos,setMyTodos] = useState(todosArr);
    return(
        <Fragment>
            {/* <Todo title="surya namaskaar" desc="good for gut" />
            <Todo title="shaam namaskaar" desc="good for timepaaas"/>
            <Todo title="raat namaskaar"  desc="good for sleeping"/> */}
            <AddTodo todos={todosArr} setMyTodos={setMyTodos} />
            <Todo todos={myTodos} />
        </Fragment>
    )
}

function Todo({todos}){

    return(
           todos.map((item,index)=>{
            return(
               <div key={index}>
                   <h1>Title:{item.title} </h1>
                   <p>Desc: {item.desc} </p>
               </div>
            )
           }) 
    )
}

function AddTodo({todos,setMyTodos}){
    let [inp1,setInp1] = useState("");
    let [inp2,setInp2] = useState("");
    function handleInp1(e){
        setInp1(e.target.value)
    }
    function handleInp2(e){
        setInp2(e.target.value)
    }
    function handleAdd(){
        setMyTodos(()=>{return[...todos, {title: inp1, desc:inp2}]})
        setInp1("")
        setInp2("")
    }
    return(
        <div>
            <input onChange={handleInp1} type="text" value={inp1} />
            <input onChange={handleInp2} type="text" value={inp2} />
            <button onClick={handleAdd} >Add Todo</button>
        </div>
    )
}

export default Todos;