import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DoraContext } from "../Context";
const PortfolioIsotope = ({ projects }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  const { portfolio_modal_show } = useContext(DoraContext);

  const WorkCard = ({ workDetails }) => {
    const { image, techStack } = workDetails;

    return (
      <div className={`works-col ${techStack.reduce((curr, acc) => curr += " " + acc, "")}`}>
        <a href="#">
          <img src={image.url} alt="dora_img" />
        </a>
      </div>
    )
  }
  const Tab = ({ title }) => {
    return (
      <li
        className={`c-pointer ${activeBtn(title)}`}
        onClick={handleFilterKeyChange(title)}
        data-filter={`.${title}`}>


        {title}
      </li>)
  }

  const worksList = ["Reactjs", "Nextjs", "Mern", "CSS", "TailwindCSS"]

  return (
    <div className="work-isotope-filter">
      {/* work isotope menu */}
      <ul className="works-list-ul wow fadeInUp">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        {/* {
          worksList.map((technology, key) => <Tab key={key} title={technology} />)
        } */}

      </ul>
      {/* work isotope items */}
      <div className="works-row wow fadeInUp">
        {/* Youtube */}
        {projects.map((project) => <WorkCard key={project._id} workDetails={project} />)}
      </div>
    </div>
  );
};
export default PortfolioIsotope;


