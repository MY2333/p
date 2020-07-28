import React from 'react';
import './App.css';
import RootContext from './RootContext';

class PageB extends React.Component{
    static contextType = RootContext;
    render(){
        const {m, setU} = this.context;
        console.log("yes");
        return (
            <div className = "App">page2 {m.name}
            <button onclick = {() => {setU()}}>change</button>
            </div>
        )
    }
}
export default PageB;