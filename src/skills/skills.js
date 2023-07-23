import React from 'react'
import "./skills.css";
import { mySkills } from "../json";

const Skills = () => {
    return (
        <div className="skill">
            <div className="skill_heading">
            <h1>My Skills</h1>
            </div>
            <div className="info_heading1">
                {mySkills.skills.map((item, index) => {
                    return(
                        <div className="info_heading">
                            <h4>{item.name}</h4>
                            <div className="wrapper">
                            <span className="caption">{item.name1}</span>
                            <span className="progress">{item.roller}</span>
                            <span className="caption">{item.name2}</span>
                            <span className="progress">{item.roller1}</span>
                            <span className="caption">{item.name3}</span>
                            <span className="progress">{item.roller2}</span>
                            <span className="caption">{item.name4}</span>
                            <span className="progress">{item.roller3}</span>
                            <span className="caption">{item.name5}</span>
                            <span className="progress">{item.roller4}</span>
                            </div>
                        </div>
                    )
                } )}
                </div>
                {/* <h1>My Skills</h1>
            </div>
            <div className="info_heading">
                <h4>Coding Skills</h4>
                <div className="wrapper">
                    <span className="caption">JavaScript</span>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:"86%"}}
                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%
                     </div>
                    </div>
                </div>
                <div className="wrapper">
                    <span className="caption">PHP</span>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar"
                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%
                     </div>
                    </div>
                </div>
                <div className="wrapper">
                    <span className="caption">HTML + CSS</span>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar"
                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%
                     </div>
                    </div>
                </div>
                <div className="wrapper">
                    <span className="caption">python</span>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar"
                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">46%
                     </div>
                    </div>
                </div> */}
            </div>
        
    )
}
export default Skills;
