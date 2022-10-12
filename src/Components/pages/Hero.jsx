/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { hero, heroIcon1, heroIcon2, heroIcon3 } from "../../constants/images";

const Hero = () => {
  return (
    <>
      <section className="hero_area">
        <div className="hero_overlay"></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="hero_content">
                <h3 className="title">
                  Masum <span>Billah</span>
                </h3>
                <p>
                  I am a Full Stack Web Developer at heart and produce features{" "}
                  <br /> that are best suited for the job at hand.{" "}
                </p>
                <ul className="designation">
                  <li>UI/UX Designer</li>
                  <li>Web Designer</li>
                  <li>Freelancer</li>
                </ul>

                <ul className="social_link">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 col-12 text-end">
              <div className="hero_images">
                <img src={hero} className="hero_img" alt="hero_image" />
                <img src={heroIcon1} className="icon_1" alt="hero icon" />
                <img src={heroIcon2} className="icon_2" alt="hero icon" />
                <img src={heroIcon3} className="icon_3" alt="hero icon" />
                <div className="experience">
                  <span>10 Years</span> Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
