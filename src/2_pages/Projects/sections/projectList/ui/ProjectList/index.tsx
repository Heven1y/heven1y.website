"use client";

import React from "react";

import { useTranslations } from "next-intl";

import { CardProject } from "@/entities/cardProject";
import { Project } from "@/entities/project";
import { Tags } from "@/entities/project/model/enums";
import { DataProject } from "@/entities/project/model/types";
import { FilterByTags } from "@/features/filterByTags";
import { useMapState } from "@/shared/hooks/useMapState";
import { Categories, Technologies } from "@/shared/models/enums";

import { dataProjects } from "../../model/dataProjects";
import YearDivider from "../YearDivider";

import styles from "./ProjectList.module.scss";

const INITIAL_CATEGORIES = new Map(
  Object.values(Categories).map((category) => [category, false]),
);

const INITIAL_TECHNOLOGIES = new Map(
  Object.values(Technologies).map((tech) => [tech, false]),
);

export default function ProjectList() {
  const [openProject, setOpenProject] = React.useState<DataProject | null>(
    null,
  );

  const t = useTranslations("pages_ProjectList");

  const { map: filterCategories, set: setCategory } = useMapState<
    Categories,
    boolean
  >(INITIAL_CATEGORIES);

  const { map: filterTechnologies, set: setTechnology } = useMapState<
    Technologies,
    boolean
  >(INITIAL_TECHNOLOGIES);

  const getActiveTags = <T extends string>(tags: Map<T, boolean>): T[] => {
    return Array.from(tags.entries())
      .filter(([, isActive]) => isActive)
      .map(([tag]) => tag);
  };

  const sortedAndFilteredProjects = React.useMemo(() => {
    const activeCategories = getActiveTags(filterCategories);
    const activeTechnologies = getActiveTags(filterTechnologies);

    const filteredProjects = dataProjects.filter((project) => {
      const matchCategories =
        activeCategories.length === 0 ||
        project.categories.some((category) =>
          activeCategories.includes(category),
        );

      const matchTechnologies =
        activeTechnologies.length === 0 ||
        project.stack.some((tech) => activeTechnologies.includes(tech));

      return matchCategories && matchTechnologies;
    });

    const projectsByYear: Map<number, DataProject[]> = new Map();

    for (const project of filteredProjects) {
      const year = project.year;
      if (!projectsByYear.has(year)) {
        projectsByYear.set(year, []);
      }
      projectsByYear.get(year)?.push(project);
    }

    return projectsByYear;
  }, [filterCategories, filterTechnologies]);

  const getCategoriesToMap = (categories: Categories[]) => {
    return new Map(
      categories.map((category) => {
        return [category, !!filterCategories.get(category)];
      }),
    );
  };

  const onFilterTags = <T extends string>(tag: T) => {
    if (Object.values(Categories).includes(tag as Categories)) {
      const prevValue = filterCategories.get(tag as Categories);
      if (prevValue !== undefined) {
        setCategory(tag as Categories, !prevValue);
      }
    }
    if (Object.values(Technologies).includes(tag as Technologies)) {
      const prevValue = filterTechnologies.get(tag as Technologies);
      if (prevValue !== undefined) {
        setTechnology(tag as Technologies, !prevValue);
      }
    }
  };

  return (
    <>
      <div className={styles["project-list__wrapper"]}>
        <div className={styles["project-list__periods"]}>
          {Array.from(sortedAndFilteredProjects).map(([year, projectsList]) => {
            return (
              <div className={styles["project-list__period"]} key={year}>
                <YearDivider year={year} />
                <div className={styles["project-list__list"]}>
                  {projectsList.map((project) => {
                    return (
                      <CardProject
                        key={project.title}
                        colors={project.colors}
                        title={project.title}
                        description={t(project.shortDescription)}
                        categories={getCategoriesToMap(project.categories)}
                        onClick={() => setOpenProject(project)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["project-list__filters"]}>
          <FilterByTags
            type={Tags.Category}
            tags={filterCategories}
            onChangeStateTag={onFilterTags}
          />
          <FilterByTags
            type={Tags.Stack}
            tags={filterTechnologies}
            onChangeStateTag={onFilterTags}
          />
        </div>
      </div>
      <Project
        isShow={openProject !== null}
        onHide={() => setOpenProject(null)}
        data={openProject}
        filters={{
          categories: getActiveTags(filterCategories) as Categories[],
          stack: getActiveTags(filterTechnologies) as Technologies[],
        }}
      />
    </>
  );
}
