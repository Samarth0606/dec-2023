import { Route, Routes, Link} from "react-router-dom";import Cat from './components/Cat';
import Dog from './components/Dog';
import Mainn from './components/Mainn';

function App(){
  return(
    <div>
      <h1>I am App</h1>
      {/* <ul>
        <li> <a href="/">Main</a> </li>
        <li> <a href="/dog">Dog</a> </li>
        <li> <a href="/cat">Cat</a> </li>
      </ul> */}

      <ul>
        <li> <Link to="/">Main</Link> </li>
        <li> <Link to="/cat">Cat</Link> </li>
        <li> <Link to="/dog">Dog</Link> </li>
      </ul>

        <Routes>
          <Route element={ <Mainn /> } path="/" />
          <Route element={ <Cat />} path="/cat" />
          <Route element={ <Dog/> } path="/dog" />
        </Routes>

    </div>
  )
}

export default App;
