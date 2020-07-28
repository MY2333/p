import React from 'react';
import './App.css';
import Router from './router';
import RootContext, { RootProvider } from './RootContext';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { user: {name: "M", age: 19},}
  }
  setU = () => {
    this.setState({name:"Y", age: 0})
  }
  render(){
    const user = this.state;
  return(
    <RootProvider value = {user, setU}>
      <div className="App">
      <header className="App-header">
        <Router/>
      </header>

      </div>
    </RootProvider>
  );
}
}

export default App;
