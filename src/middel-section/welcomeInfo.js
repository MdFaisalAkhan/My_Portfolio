import React from 'react'
import "./style.css";
import { AboutMe } from "../json";



const WelcomeInfo = () => {
    return (
        <div className="myInfo">
            <div className="cover-img">
                <img style={{width: "100%"}} src="/images/1.jpeg" alt="coding"></img>
                <div className="row">
                    {AboutMe.info1.map((item, index) => {
                        return(
                            <div className="row-info">
                                <p>{item.heading}</p>
                                <span><h1>I'm <span className="name-color">Mack </span>Rizz</h1></span>
                                <span className="tab-style"><b>{item.work}</b></span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default WelcomeInfo;
