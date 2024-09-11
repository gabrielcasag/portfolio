import "./styles.css";

interface ExperienceCardProps {
  jobTitle: string;
  jobDescription: string;
  jobPeriod: string;
  company: string;
  jobType: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

const ExperienceCard = ({
  jobTitle,
  jobType,
  company,
  jobPeriod,
  jobDescription,
  skills,
}: ExperienceCardProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="card" onMouseMove={handleMouseMove}>
      {/* <!-- <span id="bg"></span> -->
        <!-- <span id="backdrop"></span> --> */}
      <div id="card__content">
        <div id="card__head">
          <h3>{jobTitle}</h3>
          <small className="skill__pill">{jobType}</small>
          <span id="company">{company}</span>
          <span>{jobPeriod}</span>
        </div>
        <p>{jobDescription}</p>
        <b>Skills</b>
        <ul id="stack__container">
          {skills.map((skill) => (
            <li className="skill__pill" title={skill.name} key={skill.name}>
              {
                // skill.icon &&
                // <Icon name={"skill-icons:" + skill.icon} className="skill-icon" />
              }
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
