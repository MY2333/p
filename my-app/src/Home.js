import React from 'react';
import './App.css';
import RootContext, { rootProvider } from './RootContext';

class HomePage extends React.Component{
    render(){
        console.log("yes");
        return (
            <div className = "App">Home</div>
        )
    }
}
export default HomePage;