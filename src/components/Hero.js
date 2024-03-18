import { useContext } from "react";
import { DoraContext } from "../Context";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";

const Hero = () => {
  const { user } = useContext(DoraContext);
  console.log("user", user)
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            {user?.about && <>
              <h1 className="">{user.about.name}</h1>
              <h3>{user.about.title}</h3>
              <p>
                {user.about.description}
              </p>
            </>

            }

            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <ThreeDCardDemo url={user?.about ? user.about.avatar.url : "images/hero-person-img.png"} />
            {/* <img src={user?.about ? user.about.avatar.url : "images/hero-person-img.png"} alt="dora_img" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
