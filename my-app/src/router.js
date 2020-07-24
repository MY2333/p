import React from 'react';
import './App.css';
import {
    Link,
    Route,
    Switch,
  } from "react-router-dom";
import PageA from './PageA';
import PageB from './PageB';
import HomePage from './Home';
import NotFound from './NotFound';

class Router extends React.Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                <ul>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/PageA">page1</Link></li>
                    <li><Link to="/PageB">page2</Link></li>
                    <li><Link to="/NotFound">404</Link></li>
                </ul>
                <hr />
                {

                }
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/PageA">
                            <PageA />
                        </Route>
                        <Route path="/PageB">
                            <PageB />
                        </Route>
                        <Route path="/NotFound">
                            <NotFound />
                        </Route>

                  </Switch>
                </div>
          );
      }
  }
  export default Router;