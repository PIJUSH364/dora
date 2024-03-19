import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
const worksList = ["Reactjs", "Nextjs", "Mern", "CSS", "TailwindCSS"];

import ProjectModal from "./popup/ProjectModal";
const PortfolioIsotope = ({ projects, }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [projectDetails, setProjectDetails] = useState(null)
  const [isOpen, setIsOpen] = useState(false)



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



  const WorkCard = ({ workDetails, setProjectDetails, setIsOpen }) => {
    const { image, techStack } = workDetails;

    return (
      <div className={`works-col ${techStack.reduce((curr, acc) => curr += " " + acc, "")}`}>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          setProjectDetails(workDetails);
          setIsOpen(prev => !prev)
        }}>
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

  const ChildComponent = ({ projectDetails }) => {
    console.log(projectDetails)
    return <div className="">
      <img src={projectDetails.image.url} alt="dora_img" />
    </div>
  }


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
        {
          isOpen && projectDetails && <ProjectModal setIsOpen={setIsOpen}><ChildComponent projectDetails={projectDetails} /></ProjectModal>
        }
        {projects.map((project) => <WorkCard key={project._id} workDetails={project} setProjectDetails={setProjectDetails} setIsOpen={setIsOpen} />)}
      </div>
    </div>
  );
};
export default PortfolioIsotope;


