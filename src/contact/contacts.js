import React from "react";
import "./contacts.css";
import { Map,  Marker, GoogleApiWrapper } from "google-maps-react";

// const style = {
//   width: "45%",
//   height: "65%",
// };
const Contacts = (props) => {
  return (
      <React.Fragment>
    <div className="contact">
      <div className="contact-name">
        <span className="contact-tab">Contact</span>
        <h1>Get In touch</h1>
      </div>
      <div className="contact-map_form">
        <div className="maps">
          <Map  google={props.google} zoom={14}>
            <Marker onClick={props.onMarkerClick} name={"Current location"} />
          </Map>
        </div>
        </div>
        <div className="form">
          <form>
            <div className="form-inner">
              <input
                id="name"
                name="fullname"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="form-inner">
              <input
                name="email"
                type="email"
                placeholder="Enter Your Mail"
                // value={values.email}
                // onChange={handleChange}
              />
            </div>
            <div>
            <div className="form-inner">
              <input
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="form-inner">
              <textarea
                className="form-big"
                name="message"
                type="text"
                placeholder="Write What You Feel"
              />
            </div>
            </div>
            <div className="style">
            <button className="btn btn-danger">Send message</button>
            </div>  
          </form>
        </div>
      
    </div>
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmdrNZyTy7ikO6DfOf6BcAcyNQDKy1Ks4",
})(Contacts);
