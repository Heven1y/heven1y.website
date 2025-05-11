"use client";

import { useTranslations } from "next-intl";

import { Tags } from "@/entities/project/model/enums";
import { Categories, Technologies } from "@/shared/models/enums";
import { Chip } from "@/shared/ui";

import styles from "./FilterByTags.module.scss";

type FilterByTagsProps = {
  type: Tags;
  tags: Map<Categories | Technologies, boolean>;
  onChangeStateTag: (tag: Categories | Technologies) => void;
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
        {Array.from(tags.entries()).map(([tag, isActive]) => (
          <Chip
            key={tag}
            active={isActive}
            label={tag}
            onChangeActive={() => onChangeStateTag(tag)}
          />
        ))}
      </div>
    </div>
  );
}
