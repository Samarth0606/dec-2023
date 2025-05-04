import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = ()=>{
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;





