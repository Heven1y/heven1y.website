"use client";

import React from "react";

import { CardProject } from "@/entities/cardProject";
import { Project } from "@/entities/project";
import { Tags } from "@/entities/project/model/enums";
import { DataProject } from "@/entities/project/model/types";
import { FilterByTags } from "@/features/filterByTags";
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

  const filterCategories: Map<Categories, boolean> = INITIAL_CATEGORIES;
  const filterTechnologies: Map<Technologies, boolean> = INITIAL_TECHNOLOGIES;

  const getActiveTags = (tags: Map<Categories | Technologies, boolean>) => {
    return Array.from(tags.entries())
      .filter(([, isActive]) => isActive)
      .map(([tag]) => tag);
  };

  const getProjectsByYear = () => {
    const activeCategories = getActiveTags(filterCategories) as Categories[];
    const activeTechnologies = getActiveTags(
      filterTechnologies,
    ) as Technologies[];

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
  };

  const getCategoriesToMap = (categories: Categories[]) => {
    return new Map(
      categories.map((category) => {
        return [category, !!filterCategories.get(category)];
      }),
    );
  };

  const onFilterTags = (tag: Categories | Technologies) => {
    if (tag in Categories) {
      const prevValue = filterCategories.get(tag as Categories);
      if (prevValue !== undefined) {
        filterCategories.set(tag as Categories, !prevValue);
      }
    }
    if (tag in Technologies) {
      const prevValue = filterTechnologies.get(tag as Technologies);
      if (prevValue !== undefined) {
        filterTechnologies.set(tag as Technologies, !prevValue);
      }
    }
  };

  return (
    <>
      <div className={styles["project-list__wrapper"]}>
        {Array.from(getProjectsByYear()).map(([year, projectsList]) => {
          return (
            <div key={year}>
              <YearDivider year={year} />
              <div>
                {projectsList.map((project) => {
                  return (
                    <CardProject
                      key={project.title}
                      colors={project.colors}
                      title={project.title}
                      description={project.shortDescription}
                      categories={getCategoriesToMap(project.categories)}
                      onClick={() => setOpenProject(project)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <div>
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
        data={openProject ?? undefined}
        filters={{
          categories: getActiveTags(filterCategories) as Categories[],
          stack: getActiveTags(filterTechnologies) as Technologies[],
        }}
      />
    </>
  );
}
