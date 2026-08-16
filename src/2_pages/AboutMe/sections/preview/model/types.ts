import type { ProjectChartPoint } from "@/entities/project";

export type ProjectsChartProps = {
  data: ProjectChartPoint[];
  initialActiveYear?: number;
};

export type ChartPoint = ProjectChartPoint & {
  x: number;
  y: number;
};

export type LinePoint = Pick<ChartPoint, "x" | "y">;

export type ChartTick = {
  value: number;
  y: number;
};

export type ProjectsChartGeometry = {
  linePath: string;
  plotWidth: number;
  points: ChartPoint[];
  yTicks: ChartTick[];
};
