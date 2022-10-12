import React, { useEffect } from "react";
import About from "../../pages/About"
import Resume from "../../pages/Resume";
import Skills from "../../pages/Skills";
import MainBanner from "./MainBanner";

const AboutPage = () => {
  const title = document.querySelector('#page_title')
  useEffect(()=>{
    title.textContent = 'Tian | About'
  },[title])
  return (
    <>
     <MainBanner title='About' />
    <About />
    <Skills />
    <Resume />
    </>
 
  );
};

export default AboutPage;
