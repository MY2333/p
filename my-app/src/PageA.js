import React, {useState, useEffect} from 'react';
import './App.css';


const PageA = (props) => {
    const [smile, setSmile] = useState("^_^");
    return (
        <div className = "App" onClick={() => setSmile("o(^_^)o")}>page1{smile}</div>
    )
}
export default PageA;