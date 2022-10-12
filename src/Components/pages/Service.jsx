import React from "react";
import {
  desing,
  edit,
  photoshop,
  socialMedia,
  ui
} from "../../constants/images";

const Service = ({ children }) => {
  return (
    <section className="services pb_140">
      <div className="container">
        {children}
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="single_service">
              <span className="icon">
                <img src={ui} alt="ui" />
              </span>
              <h3>UX/UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                dignissim mauris. Orci varius natoque...
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="single_service">
              <span className="icon">
                <img src={desing} alt="desing" />
              </span>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                dignissim mauris. Orci varius natoque...
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="single_service">
              <span className="icon">
                <img src={socialMedia} alt="social_meida" />
              </span>
              <h3>Digital Marketing</h3>
              <p>
                Web design is a similar process of creation, with the intention
                intention of the pre presenting...
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="single_service">
              <span className="icon">
                <img src={socialMedia} alt="s" />
              </span>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                dignissim mauris. Orci varius natoque...
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="single_service">
              <span className="icon">
                <img src={photoshop} alt="photoshop" />
              </span>
              <h3>Adobe Photoshop</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                dignissim mauris. Orci varius natoque...
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="single_service">
              <span className="icon">
                <img src={edit} alt="edit" />
              </span>
              <h3>Video Editing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                dignissim mauris. Orci varius natoque...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
