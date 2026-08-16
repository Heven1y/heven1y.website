"use client";

import { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { useIsDesktop } from "@/shared/hooks";

import { getProjectsChartGeometry } from "../../lib/getProjectsChartGeometry";
import { PROJECTS_CHART_CONFIG } from "../../model/constants";
import type { ProjectsChartProps } from "../../model/types";

import styles from "./ProjectsChart.module.scss";

const {
  width: CHART_WIDTH,
  height: CHART_HEIGHT,
  plot: {
    left: PLOT_LEFT,
    right: PLOT_RIGHT,
    top: PLOT_TOP,
    bottom: PLOT_BOTTOM,
  },
  point: {
    radius: POINT_RADIUS,
    activeRadius: ACTIVE_POINT_RADIUS,
    glowRadius: POINT_GLOW_RADIUS,
    hitAreaRadius: HIT_AREA_RADIUS,
  },
  animation: {
    lineDrawDuration: LINE_DRAW_DURATION,
    pointFadeDuration: POINT_FADE_DURATION,
  },
} = PROJECTS_CHART_CONFIG;

export default function ProjectsChart({
  data,
  initialActiveYear,
}: ProjectsChartProps) {
  const isDesktop = useIsDesktop();
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();
  const lineGradientId = useId().replaceAll(":", "");
  const lineClipId = useId().replaceAll(":", "");
  const t = useTranslations("pages_ProjectsChart");
  const projectT = useTranslations("entities_Project");
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(
    initialActiveYear ?? null,
  );
  const [hasInteracted, setHasInteracted] = useState(
    initialActiveYear !== undefined,
  );
  const [isInteractionHintVisible, setIsInteractionHintVisible] =
    useState(false);

  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || data.length < 2 || hasInteracted) {
      return;
    }

    const hintDelay = shouldReduceMotion
      ? 0
      : (LINE_DRAW_DURATION + POINT_FADE_DURATION) * 1000;
    const hintTimer = setTimeout(() => {
      setIsInteractionHintVisible(true);
    }, hintDelay);

    return () => {
      clearTimeout(hintTimer);
    };
  }, [data.length, hasInteracted, isDesktop, shouldReduceMotion]);

  if (!isDesktop || data.length === 0) {
    return null;
  }

  const { linePath, plotWidth, points, yTicks } =
    getProjectsChartGeometry(data);
  const activePoint = points.find((point) => point.year === activeYear);
  const activePointIndex = activePoint ? points.indexOf(activePoint) : -1;
  const interactionHintPoint = points.at(-2);

  const cancelHide = () => {
    if (!hideTimer.current) {
      return;
    }
    clearTimeout(hideTimer.current);
    hideTimer.current = null;
  };

  const showTooltip = (year: number) => {
    cancelHide();
    setHasInteracted(true);
    setIsInteractionHintVisible(false);
    setActiveYear(year);
  };

  const scheduleHide = () => {
    cancelHide();
    hideTimer.current = setTimeout(() => setActiveYear(null), 120);
  };

  return (
    <figure className={styles.chart} aria-labelledby={titleId}>
      <figcaption id={titleId} className={styles["chart__accessible-title"]}>
        {t("accessibleTitle")}
      </figcaption>
      <svg
        className={styles["chart__canvas"]}
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        role="group"
        aria-label={t("accessibleDescription")}
      >
        <defs>
          <linearGradient id={lineGradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
          </linearGradient>
          <clipPath id={lineClipId} clipPathUnits="userSpaceOnUse">
            <motion.rect
              x={PLOT_LEFT}
              y="0"
              width={plotWidth}
              height={CHART_HEIGHT}
              initial={shouldReduceMotion ? false : { width: 0 }}
              animate={{ width: plotWidth }}
              transition={{
                duration: shouldReduceMotion ? 0 : LINE_DRAW_DURATION,
                ease: "linear",
              }}
            />
          </clipPath>
        </defs>
        <text
          className={styles["chart__title"]}
          x={PLOT_LEFT}
          y={PLOT_TOP}
          dx="-0.14em"
          dominantBaseline="alphabetic"
        >
          {t("title")}
        </text>
        <line
          className={styles["chart__axis"]}
          x1={PLOT_LEFT}
          y1={PLOT_TOP}
          x2={PLOT_LEFT}
          y2={CHART_HEIGHT - PLOT_BOTTOM}
        />
        <line
          className={styles["chart__axis"]}
          x1={PLOT_LEFT}
          y1={CHART_HEIGHT - PLOT_BOTTOM}
          x2={CHART_WIDTH - PLOT_RIGHT}
          y2={CHART_HEIGHT - PLOT_BOTTOM}
        />
        {yTicks.map((tick) => (
          <text
            className={styles["chart__label"]}
            key={tick.value}
            x={PLOT_LEFT - 10}
            y={tick.y}
            textAnchor="end"
            dominantBaseline="middle"
          >
            {tick.value}
          </text>
        ))}
        {points.map((point) => (
          <text
            className={styles["chart__label"]}
            key={point.year}
            x={point.x}
            y={CHART_HEIGHT - PLOT_BOTTOM + 24}
            textAnchor="middle"
          >
            {point.year}
          </text>
        ))}
        <path
          className={styles["chart__line"]}
          d={linePath}
          stroke={`url(#${lineGradientId})`}
          clipPath={`url(#${lineClipId})`}
        />
        {points.map((point) => {
          const isActive = point.year === activeYear;

          return (
            <g key={point.year}>
              <motion.circle
                className={styles["chart__point-glow"]}
                cx={point.x}
                cy={point.y}
                initial={false}
                animate={{
                  opacity: isActive ? 0.6 : 0,
                  r: isActive ? POINT_GLOW_RADIUS : POINT_RADIUS,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                className={styles["chart__point"]}
                cx={point.x}
                cy={point.y}
                r={POINT_RADIUS}
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{
                  opacity: 1,
                  r: isActive ? ACTIVE_POINT_RADIUS : POINT_RADIUS,
                }}
                transition={{
                  opacity: {
                    duration: shouldReduceMotion ? 0 : POINT_FADE_DURATION,
                    delay: shouldReduceMotion
                      ? 0
                      : LINE_DRAW_DURATION *
                        ((point.x - PLOT_LEFT) / plotWidth),
                  },
                  r: {
                    duration: shouldReduceMotion ? 0 : 0.18,
                    ease: "easeOut",
                  },
                }}
              />
              <circle
                className={styles["chart__hit-area"]}
                cx={point.x}
                cy={point.y}
                r={HIT_AREA_RADIUS}
                tabIndex={0}
                role="graphics-symbol"
                aria-label={t("pointLabel", {
                  year: point.year,
                  total: point.total,
                })}
                onMouseEnter={() => showTooltip(point.year)}
                onMouseLeave={scheduleHide}
                onFocus={() => showTooltip(point.year)}
                onBlur={scheduleHide}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setActiveYear(null);
                  }
                }}
              />
            </g>
          );
        })}
      </svg>
      <AnimatePresence>
        {isInteractionHintVisible && interactionHintPoint && (
          <motion.div
            className={styles["chart__interaction-hint"]}
            style={{
              left: `${(interactionHintPoint.x / CHART_WIDTH) * 100}%`,
              top: `${(interactionHintPoint.y / CHART_HEIGHT) * 100}%`,
            }}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.18,
              ease: "easeOut",
            }}
            role="status"
          >
            {t("interactionHint")}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activePoint && (
          <motion.div
            className={`${styles["chart__tooltip"]} ${
              activePointIndex === points.length - 1
                ? styles["chart__tooltip--left"]
                : ""
            }`}
            key={activePoint.year}
            style={{
              left: `${(activePoint.x / CHART_WIDTH) * 100}%`,
              top: `${(activePoint.y / CHART_HEIGHT) * 100}%`,
            }}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.18,
              ease: "easeOut",
            }}
            onMouseEnter={cancelHide}
            onMouseLeave={() => setActiveYear(null)}
            onFocusCapture={cancelHide}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null,
                )
              ) {
                scheduleHide();
              }
            }}
          >
            {activePoint.projects.map((project) => (
              <Link
                className={styles["chart__project-link"]}
                href="/projects"
                key={project.title}
              >
                <span className={styles["chart__project-title"]}>
                  {project.title}
                </span>
                <span className={styles["chart__project-description"]}>
                  {projectT(project.shortDescription)}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}
