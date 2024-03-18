import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: "images/icons/ui-ux.svg",
      title: "UI/UX Design",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 2,
      icon: "images/icons/web-desgin.svg",
      title: "Web Design",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 3,
      icon: "images/icons/digital-marketing.svg",
      title: "Digital Marketing",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 4,
      icon: "images/icons/app-desgin.svg",
      title: "App Development",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 1,
      icon: "images/icons/ui-ux.svg",
      title: "UI/UX Design",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 2,
      icon: "images/icons/web-desgin.svg",
      title: "Web Design",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 3,
      icon: "images/icons/digital-marketing.svg",
      title: "Digital Marketing",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
    {
      id: 4,
      icon: "images/icons/app-desgin.svg",
      title: "App Development",
      des: "Rror te inal desiga othe fal dveoprer age your adcased men Mageeef speists",
    },
  ];

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <p>Services</p>
              <h2>I Provide Wide Range Of Digital Services</h2>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>
          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {" "}
            {serviceData.map((service, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span
                    className={`service-item-logo service-item-logo-cont-${service.id}`}
                  >
                    <img src={service.icon} alt="service" />
                  </span>
                  <h4>{service.title}</h4>
                  <p>
                    Rror te inal desiga othe fal dveoprer age your adcased men
                    Mageeef speists
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Service;
