import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default Home