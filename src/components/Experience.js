import { useContext } from "react";
import { DoraContext } from "../Context";

const Experience = () => {
  const { user } = useContext(DoraContext);

  const ExperienceCard = ({ skill }) => {
    const { percentage, name } = skill
    return (
      <div className="experience-item">
        <div className="experience-info">
          <p>{name}</p>
          <p>{percentage}%</p>
        </div>
        <div className="progress-line" data-percent={`${percentage}%`}>
          <span />
        </div>
      </div>
    )
  }

  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {/* all  skills*/}
          {user?.skills?.map((skill) => <ExperienceCard key={skill._id} skill={skill} />)}
        </div>
      </div>
    </section>
  );
};
export default Experience;
