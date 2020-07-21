import React from 'react';
import './App.css';
import Router from './router';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  const date = new Date();
  return(
  <div className="App">
    <header className="App-header">
      <Router/>

    </header>

  </div>
  );
}
}

export default App;
