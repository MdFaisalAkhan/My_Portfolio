import React from 'react';
import './App.css';
import Navbar from "./header/nevbar";
import WelcomeInfo from "./middel-section/welcomeInfo";
import ProfilrInfo from './middel-section/profilrInfo';
import Skills from "./skills/skills";
import Experience from "./education/experience";
import Services from "./service/services";
import Info from "./container/index";
import Portfolio from"./Portfolio/portfolio";
import Review from "./clientsReview/review";
import BlogPost from "./blog/blogPost";
import Contacts from "./contact/contacts";
function App() {
  return (
    
    <div className="App">
      <Navbar />
      <WelcomeInfo />
      <ProfilrInfo />
      <Skills />
      <Experience />
      <Services />
      <Info />
      <Portfolio />
      <Review />
      <BlogPost />
      <Contacts />
    </div>
    
  );
}

export default App;
