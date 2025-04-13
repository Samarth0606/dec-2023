
const NameChange = ({naam}) => {
    let namee = naam;
    function handleLogout(){
        console.log(namee , "1");
        namee = "anonymous"
        console.log(namee , "2");
    }
  return (
    <div>
        <h1>Name: {namee}</h1>
        <button onClick={handleLogout} >Logout me!!</button>
        {/* <button onClick={()=>handleLogout()} >Logout me!!</button> */}
    </div>
  )
}

export default NameChange