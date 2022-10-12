import React from "react";
import { certficate, education } from "../../constants/images";

const Resume = () => {
  return (
    <section className="resume section-padding">
      <div className="container">
        <div className="section-title">
          <span>Resume</span>
          <h3>My Resume</h3>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="single_resume">
              <div className="r_icon">
                <img
                  src={education}
                  alt="education icon"
                />
              </div>
              <span className="r_date">2015-2016</span>
              <h2>Master Degree</h2>
              <div className="r_position">Oxford Univercity</div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country,
              </p>
            </div>

            <div className="single_resume">
              <div className="r_icon">
                <img
                  src={education}
                  alt="education icon"
                />
              </div>
              <span className="r_date">2011-2015</span>
              <h2> Bachelor Degree </h2>
              <div className="r_position">Texas Univercity</div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country,
              </p>
            </div>

            <div className="single_resume">
              <div className="r_icon">
                <img
                  src={education}
                  alt="education icon"
                />
              </div>
              <span className="r_date">2009-2011</span>
              <h2> Associate Degree </h2>
              <div className="r_position">New York College</div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country,
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="single_resume">
              <div className="r_icon">
                <img src={certficate} alt="certification icon" />
              </div>
              <span className="r_date">2015-2022</span>
              <h2>Envato Market</h2>
              <div className="r_position">Exclusive Author </div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country,
              </p>
            </div>

            <div className="single_resume">
              <div className="r_icon">
                <img src={certficate} alt="certification icon" />
              </div>
              <span className="r_date">2015-2018</span>
              <h2>AZF Company</h2>
              <div className="r_position">Web Developer</div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country,
              </p>
            </div>

            <div className="single_resume">
              <div className="r_icon">
                <img src={certficate} alt="certification icon" />
              </div>
              <span className="r_date">2016-2019</span>
              <h2>MSN Company</h2>
              <div className="r_position">Web Designer</div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
