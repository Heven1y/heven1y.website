export const PROJECTS_CHART_CONFIG = {
  width: 900,
  height: 420,
  plot: {
    left: 22,
    right: 20,
    top: 42,
    bottom: 44,
  },
  point: {
    radius: 4,
    activeRadius: 5.5,
    glowRadius: 11,
    hitAreaRadius: 14,
  },
  curve: {
    originGapRatio: 0.3,
    controlOffset: 0.42,
    tangentScale: 0.08,
  },
  animation: {
    lineDrawDuration: 1.8,
    pointFadeDuration: 0.25,
  },
} as const;
