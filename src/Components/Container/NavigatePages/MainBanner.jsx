import React from "react";
import { Link } from "react-router-dom";
import { arrowIcon } from "../../../constants/images";
const MainBanner = ({ title }) => {
  return (
    <section className="main_banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="breadcrumbs">
              <li>
                <Link to={"/react-templates/tian"}>Home</Link>
              </li>
              <li>
                <img src={arrowIcon} alt="right-arrow" />
              </li>
              <li>
                {title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
