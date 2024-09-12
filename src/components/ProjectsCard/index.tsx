import "./styles.css";

import { useTranslation } from "react-i18next";
import { LuCode2, LuEye } from "react-icons/lu";

interface ProjectsCardProps {
  title: string;
  description: string;
  codeURL?: string;
  demoURL?: string;
}

const ProjectsCard = ({
  title,
  description,
  codeURL,
  demoURL,
}: ProjectsCardProps) => {
  const { t } = useTranslation();

  return (
    <article>
      <h5>{title}</h5>
      <p>{description}</p>
      <div className="actions">
        {codeURL && (
          <small>
            <a href={codeURL} target="_blank">
              {t("projects.see_code")}
              <LuCode2 size={16} />
            </a>
          </small>
        )}
        {demoURL && (
          <small>
            <a href={demoURL} target="_blank">
              {t("projects.see_demo")}
              <LuEye size={16} />
            </a>
          </small>
        )}
      </div>
    </article>
  );
};

export default ProjectsCard;
