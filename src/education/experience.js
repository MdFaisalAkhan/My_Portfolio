import React from "react";
import "./experience.css";
import { EducationsExper } from "../json";

const Experience = () => {
  return (
    
    <div className="box2">
      {EducationsExper.education.map((item, index) => {
        return (
          
          <div className="education-card">
            <ul>
            <h3>{item.name}</h3>
              <li>
                <span className="border-box">{item.year}</span>
                <div className="border-box1">
                  <span style={{fontSize: "46", fontWeight:"600" }}>{item.course}</span>
                  <div>
                    <span style={{color:"red"}}>{item.colleg}</span>
                  </div>
                  <div>
                    <span>{item.details}</span>
                  </div>
                </div>
              </li>
              <li>
                <span className="border-box">{item.year1}</span>
                <div className="border-box1">
                  <span style={{fontSize: "46", fontWeight:"600" }}>{item.course1}</span>
                  <div>
                    <span style={{color:"red"}}>{item.colleg1}</span>
                  </div>
                  <div>
                    <span>{item.details1}</span>
                  </div>
                </div>
              </li>
              <li>
                <span className="border-box">{item.year1}</span>
                <div className="border-box1">
                  <span style={{fontSize: "46", fontWeight:"600" }}>{item.course1}</span>
                  <div>
                    <span style={{color:"red"}}>{item.colleg1}</span>
                  </div>
                  <div>
                    <span>{item.details1}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        );
      })}
    </div>
    
  );
};
export default Experience;
