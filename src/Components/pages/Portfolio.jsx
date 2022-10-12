/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import { portfolioData } from "../data/portfolioData";
import LightBox from "./LightBox";

const Portfolio = ({ children }) => {
  const [lightImg, setLightImg] = useState();
  const [totalImg, setTotalImg] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const body = document.querySelector("body");

  const handleLightBox = (item, index) => {
    body.style.overflowY = "hidden";
    body.classList.add("active");
    document.querySelector(".box_body").classList.add("active");
    setLightImg(item.img);
    setCurrentIndex(index);
    setTotalImg(portfolioData.length);
  };

  const handelRight = () => {
    const totalLength = portfolioData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = portfolioData[0].img;
      setLightImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = portfolioData.filter(item => {
      return portfolioData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setLightImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelLeft = () => {
    const totalLength = portfolioData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = portfolioData[totalLength - 1].img;
      setLightImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = portfolioData.filter(item => {
      return portfolioData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setLightImg(newItem);
    setCurrentIndex(newIndex);
  };



  return (
    <>
    <section className="Portfolio section-padding gray_bg">
      <LightBox
        img={lightImg}
        totalImgNum={totalImg}
        currentIndex={currentIndex}
        handleRight={handelRight}
        handelLeft={handelLeft}
      />
      <div className="container">
        {children}

        <div className="row">
          {portfolioData.map((item, index) =>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              key={index * (Math.random() * 10)}
            >
              <div className="single_portfolio">
                <div className="port_img">
                  <img src={item.img} alt="portfolio" />
                  <div
                    onClick={() => handleLightBox(item, index)}
                    className="port_popup"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={item.hoverImg} alt="camera" />
                  </div>
                </div>
                <h4>
                  {item.title}
                </h4>
                <p>
                  {item.desc}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="port_btn text-center">
          <a href="#" className="dark_btn">
            View More
          </a>
        </div>
      </div>
    </section>


    </>
  );
};

export default Portfolio;
