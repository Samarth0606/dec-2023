import GithubUser from "./component/GithubUser"

const App = () => {
  return (
    <div>
      <h1>GITHUB API CALLING</h1>
      <GithubUser username="Samarth0606" />
      <GithubUser username="priyansh159" />
      <GithubUser username="sattwik13" />
    </div>
  )
}

export default App