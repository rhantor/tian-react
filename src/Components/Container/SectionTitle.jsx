import React from "react";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="section-title about_title">
      <span>
        {title}
      </span>
      <h3>
        {desc}
      </h3>
    </div>
  );
};

export default SectionTitle;
