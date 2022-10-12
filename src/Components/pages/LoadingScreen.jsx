import React from "react";

const LoadingScreen = () => {
  return (
    <div className="preloader">
      <div className="gooey">
        <span className="dot" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
