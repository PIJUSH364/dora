import dynamic from "next/dynamic";
import { useContext } from "react";
import { DoraContext } from "../Context";
const PortfolioIsotope = dynamic(() => import("./PortfolioIsotope"), {
  ssr: false,
});
const Works = () => {
  const { user } = useContext(DoraContext);

  return (
    <section className="works-section" id="works">
      <div className="container">
        {/* Work Title */}
        <div className="section_title wow fadeInUp center">
          <p>Portfolio</p>
          <h2>My Amazing Works</h2>
        </div>
        {/* Work Isotope */}
        {user?.projects && <PortfolioIsotope projects={user.projects} />}

      </div>
    </section>
  );
};
export default Works;
