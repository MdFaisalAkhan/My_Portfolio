import React from "react";
import "./blogPost.css";
import { BlogInfo } from "../json";

const BlogPost = () => {
  return (
    <div className="blog">
      <div className="blog-name">
        <span className="blog-tab">Blog</span>
        <h1>Latest Post</h1>
      </div>
      <div className="blog-card">
        {BlogInfo.blogs.map((item, index) => {
          return (
            <div className="blog-data" key={item.id}>
              <img src={item.image} alt="work"></img>

              <div className="blog-entry">
                <h6>{item.name}</h6>
                <p>{item.info}</p>
                <p>{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bttn">
        <button className="btn btn-danger">See All Post</button>
      </div>
    </div>
  );
};
export default BlogPost;
