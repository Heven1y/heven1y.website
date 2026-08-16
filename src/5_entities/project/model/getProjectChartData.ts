import { dataProjects } from "./dataProjects";
import type { DataProject, ProjectChartPoint } from "./types";

export function getProjectChartData(
  projects: DataProject[] = dataProjects,
): ProjectChartPoint[] {
  const projectsByYear = new Map<number, DataProject[]>();

  for (const project of projects) {
    const projectsForYear = projectsByYear.get(project.year) ?? [];
    projectsForYear.push(project);
    projectsByYear.set(project.year, projectsForYear);
  }

  let total = 0;

  return [...projectsByYear.entries()]
    .sort(([firstYear], [secondYear]) => firstYear - secondYear)
    .map(([year, projectsForYear]) => {
      total += projectsForYear.length;

      return {
        year,
        total,
        projects: projectsForYear.map(({ title, shortDescription }) => ({
          title,
          shortDescription,
        })),
      };
    });
}
