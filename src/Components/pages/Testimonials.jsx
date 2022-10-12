import React from "react";
import { testimonialData } from "../data/testimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-title text-start">
          <span>Testimonials</span>
          <h3>What Clients Say</h3>
        </div>

        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={3}
              spaceBetween = {30}
              loop
              breakpoints={{
                140: { slidesPerView: 1 },
                990: { slidesPerView: 3 }
              }}
              centeredSlides={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              grabCursor={true}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              {testimonialData.map((item, index) =>
                <SwiperSlide
                  className="testimonials_slider owl-carousel"
                  key={index * (Math.random() * 10)}
                >
                  <div className="testimonial">
                    <div className="tes_top">
                      <div className="timage">
                        <div
                          className="tm_img"
                          style={{ backgroundImage: `url(${item.img})` }}
                        />
                      </div>
                      <div className="tt_text">
                        <h4>
                          {item.name}
                        </h4>
                        <p>
                          {item.title}
                        </p>
                      </div>
                    </div>

                    <div className="tes_text">
                      <p>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
