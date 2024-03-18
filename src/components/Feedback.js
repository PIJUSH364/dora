import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
import { DoraContext } from "../Context";
import { useContext } from "react";
import SwiperCard from "./subComponent/SwiperCard";

const Feedback = () => {
  const { user } = useContext(DoraContext);


  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-section-title-cont">
          {/* Feedback Title */}
          <div className="section_title wow fadeInUp">
            <h2>
              Clients are satisfied for <br />
              our work, view feedback
            </h2>
          </div>
          {/* Slider arrow */}
          <div className="feedback-btn-cont wow fadeInUp">
            <a href="#" className="slider-arrow feedback-left">
              <img
                className="svg"
                src="images/icons/arrow-left.svg"
                alt="dora_img"
              />
            </a>
            <a href="#" className="slider-arrow active feedback-right">
              <img
                className="svg"
                src="images/icons/arrow-right.svg"
                alt="dora_img"
              />
            </a>
          </div>
        </div>
        <Swiper
          {...doraSlider.feedbackSlider}
          className="swiper feedback-items-cont"
        >
          <div className="swiper-wrapper feedback-items wow fadeInUp">
            {user?.testimonials?.map((feedbackDetails) =>
              <SwiperSlide className="swiper-slide feedback-item" key={feedbackDetails._id}>
                <SwiperCard data={feedbackDetails} />
              </SwiperSlide>
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default Feedback;
