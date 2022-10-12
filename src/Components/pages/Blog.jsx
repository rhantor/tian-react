/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { blogData } from "../data/blogData";
const Blog = ({ children }) => {
  return (
    <section className="blog section-padding gray_bg">
      <div className="container">
        {children}

        <div className="row">
          {blogData.map((item, index) =>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12"
              key={index * (Math.random() * 10)}
            >
              <div className="single_blog">
                <img src={item.img} alt="blogimage" />
                <div className="blog_text">
                  <h3>
                    <a href="#">
                      {item.title}
                    </a>
                  </h3>
                  <div className="blog_meta">
                    <ul>
                      <li>
                        <img src={item.userIcon} alt="userIcon" />
                        <a href="#">
                          {item.userName}
                        </a>
                      </li>
                      <li>
                        <img src={item.calendarIcon} alt="calendarIcon" />
                        {item.date}
                      </li>
                    </ul>
                  </div>
                  <p>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
