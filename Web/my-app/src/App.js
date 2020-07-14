import React from 'react';
import './App.css';

class App extends React.Component{
  
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
  return (
    <div>
      <div className="App">
        <div className="left">
          <div className="pic">
          <img src="https://i.ibb.co/Y0sG35T/514910852025641237.jpg" height="120" width="100" alt="M"/>
            <p>
              <strong>Margaret Yao</strong> 
            </p>
          </div>
        </div>
        <div className="right">
          <div class="right-header"><header>
            Background
          </header>
          <ul className="App-ul">
            <li>Second year student at UofT</li>
            <li>Computer Science</li>
            <li>Mathmatics</li>
          </ul></div>
          <div className="right-header"><header>Experience</header>
          <ul className="App-ul">
            <li>Computer Science Club President in St. Joseph College in 2019</li>
            <li>Teach in Wells Academy</li>
          </ul></div>
        </div>
      </div>
      <div className="bot">
        <header className="bot-header">
          <strong>Contact</strong>
        </header>
        <p className="inf">
           <a href="mailto:yaoxinyv@gmail.com">email</a>
        </p>
      </div>
    </div>
  );
}
}
export default App;
