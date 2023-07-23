import React from "react";
import "./services.css";
import { ServiceProvider } from "../json";

const Services = () => {
  return (
    <div className="services">
      <div className="box">
        <span className="servise-tab">Service</span>
        <h1>What Can I Do?</h1>
      </div>
      <div className="service-card">
        {ServiceProvider.services.map((item, index) => {
          return (
            <div className="cards">
              <div className="card-logo">{item.logo}</div>
              <div className="caption">
                  <h4>{item.name}</h4>
                  <p>{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
