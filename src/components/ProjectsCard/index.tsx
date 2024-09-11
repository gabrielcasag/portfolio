import { useTranslation } from "react-i18next";

import "./styles.css";
import { CodeXml, ScanEye } from "lucide-react";

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
              <CodeXml size={16} />
            </a>
          </small>
        )}
        {demoURL && (
          <small>
            <a href={demoURL} target="_blank">
              {t("projects.see_demo")}
              <ScanEye size={16} />
            </a>
          </small>
        )}
      </div>
    </article>
  );
};

export default ProjectsCard;
