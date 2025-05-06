import { Outlet } from "react-router-dom";
// import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const App = ()=>{
  return(
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}

export default App;





