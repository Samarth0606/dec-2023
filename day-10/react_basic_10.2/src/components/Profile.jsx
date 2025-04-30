import { useNavigate } from "react-router-dom"

const Profile = () => {

    const navigatee = useNavigate()
    function handleProfile(){
        navigatee('/dashboard')
    }
 
  return (
    <div>
        <h1>Profile</h1>
        <button onClick={handleProfile} >Visit Dashboard</button>
    </div>
  )
}

export default Profile