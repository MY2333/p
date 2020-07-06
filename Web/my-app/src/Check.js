import React from 'react';
import './App.css';

class Check extends React.Component{
    render(){
        const {count} = this.props;
        if(count%2===0){
            return(
                <div>
                    <p>^_^</p>
                </div>
            )
        }
        return(
            <div>
                <p>QwQ</p>
            </div>
        )
    }
  }
  
  
  export default check;
  