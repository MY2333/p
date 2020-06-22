import React from 'react';
import logo from './logo.svg';
import './App.css';
import check from './Change.js'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      message: "^_^"
    }
  }
  
  render(){

    const { count, message }= this.state;
    const flag = check(count);
    var a = null;
    if(flag === true){
      a = "QwQ";
    }else{
      a = "o(^_^)o";
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Nice to see you {message}.
          </p>
            
          <a
            className="App-link"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          <button onClick={()=> this.setState({count: count+1, message:a})}>Change</button>
        </header>
      </div>
    );
  }
}


export default App;
