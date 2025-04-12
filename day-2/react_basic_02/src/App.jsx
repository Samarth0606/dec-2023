import Carr,{BMBabloo,RangeRover,Div} from "./components/Car"
// import {BMBabloo,RangeRover,Nano} from "./components/Car"
// import Person from "./components/Person"

//rafce
const App = () => {
    //upper world -> statements ✅ -> for,while,let,var,if-else,console

    //lower world -> statements ❌ -> map,foreach,filter,ternary oprator
    return (
    <div>
        <>
        {/* name is an attribute === props here */}
            {/* <Person name="Samarth Vohra"  age="25" favColor="blue"  />
            <Person name="Maverick Vohra" age="5"  favColor="brown" />
            <Person name="Kashish Vohra"  age="30" favColor="black" /> */}

            {/* <br /> */}
            <Carr />
            <BMBabloo name="tata" />
            <RangeRover bhai="sam"  />
            <Div/>
        </> 
    </div>
  )
}


export default App