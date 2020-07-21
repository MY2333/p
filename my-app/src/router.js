import React from 'react';
import './App.css';
import {
    Link,
    Route,
    Switch,
  } from "react-router-dom";
import pageA from './page1';

class Router extends React.Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                <ul>
                    <Link to="/">page1</Link>
                </ul>
                <hr />
                    <Switch>
                        <Route exact path="/">
                            <pageA />
                        </Route>

                  </Switch>
                </div>
          );
      }
  }
  export default Router;