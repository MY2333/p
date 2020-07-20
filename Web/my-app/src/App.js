import React from 'react';
import './App.css';
import axios from 'axios';
import { sampleAction } from './actions/sampleAction'
import { connect } from 'react-redux';


class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      weather: null,
      description: null,
      quote: null,
      author: null,
    }
  }
  componentWillMount() {
    //this.getQuote()
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

  getQuote = () => {
    const that = this;
    axios.get('https://andruxnet-random-famous-quotes.p.rapidapi.com/?rapidapi-key=d1414469b9msh295dcc0f1350df1p127c99jsnda11b5f49959')
    .then(function(res){
      console.log(res);
      const q = res.data[0].quote
      const au = res.data[0].author
      that.setState({quote:q, author: au})
    })
    .catch(function (error){
      console.log(error)
    })
  }
  
  /*getWeather = () => {
    const that = this;
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a97f9aa187acc84f2e13a9ba46dfc714&cat=famous')
    .then(function (res) {
      // handle success
      console.log(res);
      const weatherString = res.data.weather[0].main;
      const weatherDes = res.data.weather[0].description;
      that.setState({weather: weatherString, description: weatherDes})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }*/

  buttonClick = () => {
    this.props.sampleAction();
  }

  render(){
    const {weather, description, quote, author} = this.state;
    const { sampleState} = this.props.counterVal;
    console.log("Render");
    return (
      <div>
        <div className="App">
          <div className="left">
            <div className="pic">
              <img src="./Ma.jpg" height="120" width="100" alt="M"/>
              <p className="name">
                <strong>Margaret Yao</strong> 
              </p>
              <p>
                <i>{quote} -- {author}</i>
              </p>
            </div>
          </div>
          <div className="right">
            <div className="right-header">
              <header>Background</header>
              <ul className="App-ul">
                <li>Second year student at UofT</li>
                <li>Computer Science</li>
                <li>Mathmatics</li>
              </ul>
            </div>
            <div className="right-header"><header>Experience</header>
              <ul className="App-ul">
                <li>Computer Science Club President in St. Joseph College in 2019</li>
                <li>Teach in Wells Academy</li>
              </ul>
            </div>
            <div>Weather in Toronto is:{sampleState}</div>
            <div onClick={() => this.buttonClick()}>Check Toronto's Weather</div>
            <p><strong>{weather}</strong></p>
            <p>{description}</p>
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

const mapStateToProps = ({ sampleReducer }) => ({
  counterVal: sampleReducer
});


export default connect(mapStateToProps, {sampleAction})(App);