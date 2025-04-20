import AxiosApiCallingAsyncAwait from "./component/AxiosApiCalling";
import ApiCalling from "./component/CallApi";

const App = ()=>{
  return(
    <div>
      <h1>I am APP</h1>
      {/* <ApiCalling /> */}
      <AxiosApiCallingAsyncAwait />
    </div>
  )
}

export default App;