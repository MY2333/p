import React from 'react';
import logo from './logo.svg';
import './App.css';
import check from './change';
import { count_increase } from './action/SampleAction.js';
import axios from 'axios';
import TestComponent from './TestComponent';
import { sampleAction } from './actions/SampleAction'
import { connect } from 'react-redux';
import weatherApi from './api/weatherApi';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { counter: 0, weather: null};
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
  
  getWeather = () => {
    const that = this;
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a97f9aa187acc84f2e13a9ba46dfc714')
    .then(function (res) {
      // handle success
      console.log(res);
      const weatherString = `${res.data.weather[0].main} ${res.data.weather[0].description}`;
      that.setState({weather: weatherString})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render(){const { counter  } = this.state;
  const { sampleState} = this.props.counterVal;
  const date = new Date();
  return(
  <div className="App">
    <header className="App-header">
      {/* <div onClick={() => this.reset()}>button</div>
      <div>Receiver in Parent: {this.state.counter}</div> */}
      <div>Weather in Toronto is:{sampleState}</div>
      <div onClick={() => this.onBtnClicked()}>Click to get weather :)</div>
      {/* <TestComponent /> */}
    </header>

  </div>
  );
}
}

const mapStateToProps = ({ sampleReducer }) => ({
counterVal: sampleReducer
});


export default connect(mapStateToProps, {sampleAction})(App);
