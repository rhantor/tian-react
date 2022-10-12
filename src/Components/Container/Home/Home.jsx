import React, { useEffect } from "react";
import Contacts from "../../pages/Contacts";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Hero from "../../pages/Hero";
import Portfolio from "../../pages/Portfolio";
import Service from "../../pages/Service";
import Testimonials from "../../pages/Testimonials";
import SectionTitle from "../SectionTitle";

const Home = () => {
  const title = document.querySelector('#page_title')
  useEffect(()=>{
    title.textContent = 'Tian | Home' ;
    document.documentElement.scrollTop = 0 ;
  },[title])
 
  return (
    <>
      <Hero />
      <About>
        <SectionTitle
          title={"About Me"}
          desc="Creative Designer with Modern Technolgy"
        />
      </About>
      <Service>
        <SectionTitle title={"Service"} desc="We Provide the Best Solution" />
      </Service>
      <Portfolio>
        <SectionTitle title={"Portfolio"} desc="Our Featured Works" />
      </Portfolio>
      <Testimonials />
      <Blog>
        <SectionTitle desc={"Latest News From Blog"} title={"Blog"} />
      </Blog>
      <Contacts>
        <SectionTitle title={"Contact"} desc={"Get In Touch"} />
      </Contacts>
    </>
  );
};

export default Home;
