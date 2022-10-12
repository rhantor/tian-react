import React, { useState } from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="skills gray_bg section-padding">
      <div className="container">
        <div className="section-title tbg_white skills_title">
          <span>Skills</span>
          <h3>My Skills</h3>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12 skill_content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting remaining.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="skillbar clearfix ">
              <div className="skillbar-title">
                <span>HTML5</span>
              </div>

              <motion.div
                whileInView={() => {
                  setShow(true);
                }}
                animate={show ? { width: "95%" } : { width: "90" }}
                transition={{ duration: 0.5 }}
                className="skillbar-bar"
              />
              <div className="skill-bar-percent">95%</div>
            </div>

            <div className="skillbar clearfix ">
              <div className="skillbar-title">
                <span>CSS3</span>
              </div>
              <motion.div
                whileInView={() => {
                  setShow(true);
                }}
                animate={show ? { width: "90%" } : { width: "90" }}
                transition={{ duration: 0.6 }}
                className="skillbar-bar"
              />
              <div className="skill-bar-percent">90%</div>
            </div>

            <div className="skillbar clearfix ">
              <div className="skillbar-title">
                <span>Wordpress</span>
              </div>
              <motion.div
                whileInView={() => {
                  setShow(true);
                }}
                animate={show ? { width: "85%" } : { width: "90" }}
                transition={{ duration: 0.7 }}
                className="skillbar-bar"
              />
              <div className="skill-bar-percent">85%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
