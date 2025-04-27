import React from "react"

export default class App extends React.Component{
  //creating variables in CBC
  constructor(){
    super();
    this.state = {
      count : 0,
    }
  }

  // renders for the first time
  componentDidMount(){
    console.log("1st time chala");
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.count !== prevProps.count){
      console.log("hi i am updated");
    }
  }
  handleInc(){
    this.setState({count:this.state.count+1})
  }
  handleDec(){
    this.setState({count:this.state.count-1})
  }

  render(){
        return(
            <div>
              <h1>{this.state.count}</h1>
              {this.state.count<5 ? <Greeting /> : null}
              <button onClick={this.handleInc.bind(this)}>inc</button>
              <button onClick={this.handleDec.bind(this)}>dec</button>
            </div>
        )
    }
}

class Greeting extends React.Component{

  componentWillUnmount(){
    console.log("component hatt gya");
  }
  render(){
    return(
      <h1>Greeting from samarth</h1>
    )
  }
}


// import React from 'react'
// import ClassBasedComp from './components/ClassBasedComp'

// const App = () => {
//   return (
//     <div>
//       <ClassBasedComp />
//     </div>
//   )
// }

// export default App

