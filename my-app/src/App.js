import React from 'react';
import logo from './logo.svg';
import './App.css';
import check from './change';
import { count_increase } from './action/SampleAction.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { counter: 0};
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
  
  handle_count_increase() {
    this.store.dispatch(count_increase());
  }

  increase = () => {
    this.setState({counter: this.state.counter+ 1});
    count_increase(this.state.counter);
  }

  render(){
    console.log("Render");
    const { counter }= this.state;
    const flag = check(counter);
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
            Nice to see you {a}.
          </p>
          <button onClick={()=> this.increase()}>Change { counter }</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ sampleReducer }) => ({
  counterVal: sampleReducer
});

const mapDispatchToProps = {
  sampleAction,
 };


export default connect(mapStateToProps, mapDispatchToProps)(App);