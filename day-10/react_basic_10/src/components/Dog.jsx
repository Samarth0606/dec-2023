import { Link, useNavigate } from "react-router-dom";

function Dog(){

    let navigate = useNavigate();
    function redirectHandler(){
        console.log("mai click hogya");
        
        navigate('/')
    }

    return(
        <div>
            <h1>Woof Woof</h1>
            <Link to='/'>Main 1</Link>
            <button onClick={redirectHandler} >Visit Main component</button>
        </div>
    )
}

export default Dog;