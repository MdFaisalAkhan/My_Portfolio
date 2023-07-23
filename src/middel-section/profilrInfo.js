import React from "react";
import { UserInfo } from "../json";
import "./style.css";

const ProfilrInfo = () => {
  return (
    <div className="info">
      {UserInfo.profile.map((item, index) => {
        return (
          <div className="profile__info">
            <div className="photo__frame">
              <span className="photo">
                <img style={{ width: "100%" }} src={item.image} alt="pic" />
              </span>
            </div>
            <div className="text__style">
              <h1>{item.name}</h1>
              <h3>{item.occupation}</h3>
              <p>{item.details}</p>
              <p><b>From:</b> {item.from}</p>
              <p><b>Lives:</b> {item.lives}</p>
              <p><b>Age:</b> {item.age}</p>
              <p><b>Gender:</b> {item.gender}</p>
              <button className="btn btn-danger">Download CV</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProfilrInfo;
