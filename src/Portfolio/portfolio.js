import React, { useState } from "react";
import { myWork } from "../json";
import "./portfolio.css";
// import { workDetail } from '../json';



const Portfolio = () => {

  const [data, setData] = useState(myWork);
  
  

  const handleChange = (e) => {

    let word= e.target.value;

    if( word ==="All"){
      setData(myWork)
      console.log(myWork);
    }
    else if(word==="Apps"){
      const filtered = myWork.work.filter(item=>
           item.name==="Gaming Dashboard App"|| item.name==="Drug Delivery App"||
           item.name==="Music App Creatore");
           setData({work:filtered});
           
           console.log(filtered);
    }
    else if(word==="Templet"){
      const filtered = myWork.work.filter(item=>
           item.name==="Mobile Travel App"|| item.name==="Drug Delivery App"||
           item.name==="Music App Creatore");
           setData({work:filtered});
    }
  };
    // if(button === "All"){
    //   setData(myWork)
    // }
    // else if (button === "App"){
    
    //      let work =[]
    //   myWork.work.forEach((item, index)  => {
    //    if( item.name === "Mobile Travel App"|| item.name ==="Music App Creatore" )
    //    work.push(item)
       
    //  })
    //  let  AppData ={work:[...work]}
    
    //  setData(AppData)
    // }
    // else if(button === "Templet"){
    //   let work =[]
    //   const filtered = myWork.work.filter((item, index)=>{
    //    if( item.name==="Gaming Dashboard App"|| item.name==="Drug Delivery App"||
    //    item.name==="Music App Creatore")
    //    work.push(item)

    //    setData(filtered);
    //     console.log(filtered);
    // })}
    
    
    
  return (
    
    <div className="portfolio">
      <div className="portfolio-name">
        <span className="portfolio-tab">Portfolio</span>
        <h1>See My Works</h1>
      </div>
      <div className="works-tab">
        <button className="selected" value="All" onClick={handleChange}>
          All
        </button>
        <button className="filter-btn" value="Apps" onClick={handleChange}>
          Apps
        </button>
        <button className="filter-btn" value="Templet" onClick={handleChange}>
          Templet
        </button>
        <button className="filter-btn" value="Ios" onClick={handleChange}>
          IOS
        </button>
        <button className="filter-btn" value="UI?UX" onClick={handleChange}>
          UI/UX
        </button>
        <button className="filter-btn" value="Graphic" onClick={handleChange}>
          Graphic
        </button>
        <button className="filter-btn" value="Wireframes" onClick={handleChange}>
          Wireframes
        </button>
      </div>
      <div className="work-card">
        {data.work.map((item, index) => {
          return (
            
            <div className="work-data" key={item.id}>
              <img src={item.image} alt="work"></img>

              <div className="work-entry">
                <h4>{item.name}</h4>
                <p>{item.content}</p>
              </div>
             
            </div>
            
            
          );
          })}
      </div>
      <div className="button">
            <button className="btn btn-danger">Load More</button>
            </div> 
    </div>
    
  );
};
export default Portfolio;

 //    onClick={()=>handleChange("All")}
