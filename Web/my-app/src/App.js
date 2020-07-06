import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <div className="left">
          <div className="pic">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
             alt="test"/>
            <p>
              <strong>Margaret Yao</strong>
            </p>
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

export default App;
