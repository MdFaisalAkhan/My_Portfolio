import React,{  } from 'react';
import "./review.css"
import { ClientRewiew } from "../json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    
        let settings = {
        dots: true,
        arrows:false,
        Infinite:false,
        speed: 500,
        sliderToShow: 1,
        sliderToScroll: 1,
        cssEase:"linear"
        }

    
    return (
        <div className="">
            <div className="heading">
                <h2>What Client are Saying</h2>
            </div>
            <div className="wraper-section">
            <Slider{...settings}> 
            {ClientRewiew.review.map((item, index) => {
        return (
            
            <div className="reviewPoint-top" >
                
            <div className="review-point" key={item.id}>
            <img style={{ width: "100%" }} src={item.image} alt="pic" />
            </div>
            <div className="review-info">
                <p>{item.description}</p>
                <div className="wraper-tag">
                <div className="img-tag">
                <img style={{ width: "100%" }} src={item.image} alt="pics" />
                </div>
                <div className="name-tag">
                    <b>{item.name}</b>
                    <p>{item.job}</p>
                </div>
                </div>
            </div>  
             
            </div>
            
        )
    })}
    </Slider>
            </div>
            
            
        </div>
    )
}
export default Review;
