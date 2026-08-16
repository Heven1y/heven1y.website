import type { ProjectChartPoint } from "@/entities/project";

import { PROJECTS_CHART_CONFIG } from "../model/constants";
import type {
  ChartPoint,
  LinePoint,
  ProjectsChartGeometry,
} from "../model/types";

const {
  width: CHART_WIDTH,
  height: CHART_HEIGHT,
  plot: {
    left: PLOT_LEFT,
    right: PLOT_RIGHT,
    top: PLOT_TOP,
    bottom: PLOT_BOTTOM,
  },
  curve: {
    originGapRatio: ORIGIN_GAP_RATIO,
    controlOffset: CURVE_CONTROL_OFFSET,
    tangentScale: CURVE_TANGENT_SCALE,
  },
} = PROJECTS_CHART_CONFIG;

function getLinePath(points: LinePoint[]) {
  if (points.length === 0) {
    return "";
  }

  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`;
  }

  const intervals = points.slice(1).map((point, index) => {
    return point.x - points[index].x;
  });

  const slopes = points.slice(1).map((point, index) => {
    return (point.y - points[index].y) / intervals[index];
  });

  const tangents = points.map((_, index) => {
    if (index === 0) {
      return slopes[0];
    }

    if (index === points.length - 1) {
      return slopes[slopes.length - 1];
    }

    const previousSlope = slopes[index - 1];
    const nextSlope = slopes[index];

    if (
      previousSlope === 0 ||
      nextSlope === 0 ||
      Math.sign(previousSlope) !== Math.sign(nextSlope)
    ) {
      return 0;
    }

    const previousInterval = intervals[index - 1];
    const nextInterval = intervals[index];
    const previousWeight = 2 * nextInterval + previousInterval;
    const nextWeight = nextInterval + 2 * previousInterval;

    return (
      (previousWeight + nextWeight) /
      (previousWeight / previousSlope + nextWeight / nextSlope)
    );
  });

  return points.slice(1).reduce((path, point, index) => {
    const previousPoint = points[index];
    const interval = intervals[index];
    const controlOffset = interval * CURVE_CONTROL_OFFSET;
    const firstControlX = previousPoint.x + controlOffset;
    const firstControlY =
      previousPoint.y + tangents[index] * controlOffset * CURVE_TANGENT_SCALE;
    const secondControlX = point.x - controlOffset;
    const secondControlY =
      point.y - tangents[index + 1] * controlOffset * CURVE_TANGENT_SCALE;

    return `${path} C ${firstControlX} ${firstControlY}, ${secondControlX} ${secondControlY}, ${point.x} ${point.y}`;
  }, `M ${points[0].x} ${points[0].y}`);
}

export function getProjectsChartGeometry(
  data: ProjectChartPoint[],
): ProjectsChartGeometry {
  const plotWidth = CHART_WIDTH - PLOT_LEFT - PLOT_RIGHT;
  const plotHeight = CHART_HEIGHT - PLOT_TOP - PLOT_BOTTOM;

  if (data.length === 0) {
    return {
      linePath: "",
      plotWidth,
      points: [],
      yTicks: [],
    };
  }

  const maximumLabelValue = data[data.length - 1].total + 2;
  const maximumAxisValue = maximumLabelValue + 1;
  const pointGap =
    data.length === 1
      ? plotWidth
      : plotWidth / (data.length - 1 + ORIGIN_GAP_RATIO);
  const originGap = pointGap * ORIGIN_GAP_RATIO;
  const points: ChartPoint[] = data.map((point, index) => ({
    ...point,
    x: PLOT_LEFT + originGap + pointGap * index,
    y: PLOT_TOP + plotHeight * (1 - point.total / maximumAxisValue),
  }));
  const linePath = getLinePath([
    {
      x: PLOT_LEFT,
      y: CHART_HEIGHT - PLOT_BOTTOM,
    },
    ...points,
  ]);
  const yTicks = Array.from({ length: maximumLabelValue }, (_, index) => {
    const value = index + 1;

    return {
      value,
      y: PLOT_TOP + plotHeight * (1 - value / maximumAxisValue),
    };
  });

  return {
    linePath,
    plotWidth,
    points,
    yTicks,
  };
}
