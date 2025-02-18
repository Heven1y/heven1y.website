"use client";

import { useTranslations } from "next-intl";

import { Tags } from "@/entities/project/model/enums";
import { ProjectTag } from "@/entities/project/model/types";
import { Chip } from "@/shared/ui";

import styles from "./FilterByTags.module.scss";

type FilterByTagsProps = {
  type: Tags;
  tags: ProjectTag[];
  onChangeStateTag: (label: string) => void;
};

export default function FilterByTags({
  type,
  tags,
  onChangeStateTag,
}: FilterByTagsProps) {
  const t = useTranslations("features_FilterByTags");

  return (
    <div className={styles["filter-by-tags__wrapper"]}>
      <h4 className={styles["filter-by-tags__title"]}>{t(type)}</h4>
      <div className={styles["filter-by-tags__wrapper-tags"]}>
        {tags.map((tag) => (
          <Chip
            key={tag.label}
            active={tag.active}
            label={tag.label}
            onChangeActive={() => onChangeStateTag(tag.label)}
          />
        ))}
      </div>
    </div>
  );
}
