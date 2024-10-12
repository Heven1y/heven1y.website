import { ReactNode } from "react";

import { useTranslation } from "next-i18next";

import { BorderColorsSkills } from "@/shared/models/enums";

import styles from "./CardProject.module.scss";

type IToolsAndTechnologies = {
  name: string;
  borderColor: BorderColorsSkills;
};

type IDataCardProject = {
  title: string;
  description: string;
  performedWork: string[];
  toolsAndTechnologies: IToolsAndTechnologies[];
};

type CardProjectProps = {
  onClick?: () => void;
  dataCard: IDataCardProject;
  actionsHeaderCard: ReactNode;
  showPerformedWork?: boolean;
};

export default function CardProject(props: CardProjectProps) {
  const { t } = useTranslation("shared.CardProject");

  return (
    <div className={styles["card-project"]}>
      <div className={styles["card-project__header"]}>
        <h3 className={styles["card-project__title"]}>
          {props.dataCard.title}
        </h3>
        {props.actionsHeaderCard}
      </div>
      <div className={styles["card-project__description"]}>
        <h4>{t("titleDescriptionCard")}</h4>
        <p>{props.dataCard.description}</p>
      </div>
      {props.showPerformedWork && (
        <div className={styles["card-project__performed-work"]}>
          <h4>{t("titlePerformedWorkCard")}</h4>
          <ul>
            {props.dataCard.performedWork.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
