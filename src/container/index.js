import React from 'react';
import "./container.css";
import { background }from "../json";

const Info = () => {
    return (
        <div className="background-img">
            <img src="images/background.jpg" alt="pic"></img>
            <div className="column">
            {background.data.map((item,index) => {
                return(
                
                <div className="data-info">
                
                    <span><h1>{item.number}</h1></span>
                    <span>{item.name}</span>
                
            </div>
                )
            })}
            </div>
        </div>
    )
}
export default Info;
