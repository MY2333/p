import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


const PageA = (props) => {
    const [smile, setSmile] = useState("^_^");
    const [w, setW] = useState();
    useEffect(() => {
        setW("Hi")
    })
    return (
        <div>
            <div className = "App" onClick={() => setSmile("o(^_^)o")}>page1{smile}</div>
            <div>{w}</div>
        </div>
    )
}
export default PageA;