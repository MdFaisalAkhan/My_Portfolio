import React,{ useState } from 'react'
import "./nevbar.css";
import MenuIcon from '@material-ui/icons/Menu';


const Nevbar = () => {
    const [showRightBar, setshowRightBar] = useState(false);
    return (
        <div className="navbar">
            <div className="right_navbar">
                <h3>MackRizz.com</h3>
            </div>
            <div className="right-bar" id={showRightBar ? "hidden" : ""}>
            <div className="middle_navbar" >
                <span className="nav-link">Home</span>
                <span className="nav-link">About</span>
                <span className="nav-link">Portfolio</span>
                <span className="nav-link">Blog</span>
                <span className="nav-link">Contact</span>
            </div>
            </div>
            <div className="left_navbar">
                <span className="btn-last">
                <button className="btn btn-fab btn-theme no-shadow">En</button>
                </span>
            </div>
            
            <button onClick={()=> setshowRightBar(!showRightBar)} className="btn_hide"><MenuIcon /></button>
        </div>
    )
}
export default Nevbar;

