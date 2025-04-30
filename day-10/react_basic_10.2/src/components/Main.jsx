import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div>
        <h1>Main</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Main