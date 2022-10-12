import React from "react";
import { arrowIcon } from "../../constants/images";

const LightBox = ({
  img,
  totalImgNum,
  currentIndex,
  handleRight,
  handelLeft,
}) => {
  const body = document.querySelector("body");
  let lightImg = img;
  const closeBox = () => {
    body.style.overflowY = "auto";
    body.classList.remove("active");
    document.querySelector(".box_body").classList.remove("active");
  };

  return (
    <div className="box_body">
      <div className="box_content">
        <div className="img_content">
          <div className="img_div">
            <button className="close_btn" onClick={closeBox}>
              x
            </button>
            <img src={lightImg} alt="imgs" />
            <p className="length">
              {currentIndex + 1} of {totalImgNum}
            </p>
          </div>
        </div>
        <div className="left_arrow arrow">
          <img src={arrowIcon} alt="" onClick={handelLeft} />
        </div>
        <div className="right_arrow arrow">
          <img src={arrowIcon} alt="" onClick={handleRight} />
        </div>
      </div>
      <div className="responsive_arrow">
        <div className="left_arrow res_arrow">
          <img src={arrowIcon} alt="" onClick={handelLeft} />
        </div>
        <div className="right_arrow res_arrow">
          <img src={arrowIcon} alt="" onClick={handleRight} />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
