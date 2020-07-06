import React from 'react';
import './App.css';
import check from './Check.js'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      message: "^_^"
    }
  }
  
  componentWillMount() {
    console.log("WillMount");
  }



  componentWillReceiveProps() {
    console.log("Props");
  }

  componentWillUpdate() {
    console.log("WillUpdate");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  render(){
    console.log("Render");
    const { count, message }= this.state;
    const flag = check(count);
    var a = null;
    if(flag === true){
      a = "QwQ";
    }else{
      a = "o(^_^)o";
    }
  return (
    <div>
      <div className="App">
        <div className="left">
          <div className="pic">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
             alt="test"/>
            <p>
              <strong>Margaret Yao</strong> {message}
            </p>
            <button onClick={()=> this.setState({count: count+1, message:a})}>Change</button>
          </div>
        </div>
        <div className="right">
         <header class="right-header">
            Background
          </header>
          <ul className="App-ul">
            <li>Second year student at UofT</li>
            <li>Major: Computer Science</li>
          </ul>
          <header className="right-header">Experience</header>
          <ul className="App-ul">
            <li>1234</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="bot">
        <header className="bot-header">
          <strong>Contact</strong>
        </header>
        <p className="inf">
          email: <a href="mailto:yaoxinyv@gmail.com">yaoxinyv@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
}
export default App;
