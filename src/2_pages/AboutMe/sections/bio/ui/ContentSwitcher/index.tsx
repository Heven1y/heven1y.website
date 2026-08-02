"use client";

import { KeyboardEvent, useId, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import { useTranslations } from "next-intl";

import { useIsDesktop } from "@/shared/hooks";

import { contentItems } from "../../model/content";

import styles from "./ContentSwitcher.module.scss";

gsap.registerPlugin(useGSAP);

const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";

export default function ContentSwitcher() {
  const switcherId = useId();
  const switcherRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const previousActiveIdRef = useRef<string | undefined>(undefined);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [activeId, setActiveId] = useState(contentItems[0]?.id);
  const isDesktop = useIsDesktop();

  const translate = useTranslations("pages_ContentSwitcher");

  useGSAP(
    () => {
      if (!activeId || !switcherRef.current) {
        return;
      }

      const previousActiveId = previousActiveIdRef.current;
      const prefersReducedMotion = window.matchMedia(
        REDUCED_MOTION_MEDIA_QUERY,
      ).matches;
      const switcherStyles = getComputedStyle(switcherRef.current);
      const railWidth = switcherStyles
        .getPropertyValue("--content-switcher-rail-width")
        .trim();

      const setDesktopVisualState = () => {
        contentItems.forEach((item, index) => {
          const isActive = item.id === activeId;

          gsap.set(itemRefs.current[index], {
            flexBasis: isActive ? "0px" : railWidth,
            flexGrow: isActive ? 1 : 0,
          });
          gsap.set(buttonRefs.current[index], {
            autoAlpha: isActive ? 0 : 1,
            pointerEvents: isActive ? "none" : "auto",
          });
          gsap.set(panelRefs.current[index], {
            clearProps: "height,overflow,width",
            autoAlpha: isActive ? 1 : 0,
            pointerEvents: isActive ? "auto" : "none",
          });
        });
      };

      const setMobileVisualState = () => {
        gsap.set(itemRefs.current, {
          clearProps: "flexBasis,flexGrow",
        });
        gsap.set(buttonRefs.current, {
          autoAlpha: 1,
          pointerEvents: "auto",
        });

        contentItems.forEach((item, index) => {
          const isActive = item.id === activeId;

          gsap.set(panelRefs.current[index], {
            clearProps: "width",
            autoAlpha: isActive ? 1 : 0,
            height: isActive ? "auto" : 0,
            overflow: "hidden",
            pointerEvents: isActive ? "auto" : "none",
          });
        });
      };

      const setVisualState = isDesktop
        ? setDesktopVisualState
        : setMobileVisualState;

      timelineRef.current?.kill();
      previousActiveIdRef.current = activeId;

      if (
        !previousActiveId ||
        previousActiveId === activeId ||
        prefersReducedMotion
      ) {
        setVisualState();
        return;
      }

      const previousIndex = contentItems.findIndex(
        (item) => item.id === previousActiveId,
      );
      const nextIndex = contentItems.findIndex((item) => item.id === activeId);

      if (previousIndex === -1 || nextIndex === -1) {
        setVisualState();
        return;
      }

      const previousItem = itemRefs.current[previousIndex];
      const previousButton = buttonRefs.current[previousIndex];
      const previousPanel = panelRefs.current[previousIndex];
      const nextItem = itemRefs.current[nextIndex];
      const nextButton = buttonRefs.current[nextIndex];
      const nextPanel = panelRefs.current[nextIndex];

      if (
        !previousItem ||
        !previousButton ||
        !previousPanel ||
        !nextItem ||
        !nextButton ||
        !nextPanel
      ) {
        setVisualState();
        return;
      }

      if (isDesktop) {
        const expandedPanelWidth = previousPanel.getBoundingClientRect().width;
        gsap.set([previousPanel, nextPanel], { width: expandedPanelWidth });

        timelineRef.current = gsap
          .timeline({
            defaults: {
              ease: "power3.inOut",
            },
          })
          .set(previousPanel, { pointerEvents: "none" }, 0)
          .set(nextButton, { pointerEvents: "none" }, 0)
          .to(
            previousItem,
            {
              flexBasis: railWidth,
              flexGrow: 0,
              duration: 0.7,
            },
            0,
          )
          .to(
            nextItem,
            {
              flexBasis: "0px",
              flexGrow: 1,
              duration: 0.7,
            },
            0,
          )
          .to(
            previousPanel,
            {
              autoAlpha: 0,
              duration: 0.35,
              ease: "power2.in",
            },
            0.12,
          )

          .to(
            nextButton,
            {
              autoAlpha: 0,
              duration: 0.2,
            },
            0.05,
          )
          .to(
            nextPanel,
            {
              autoAlpha: 1,
              duration: 0.38,
              ease: "power2.out",
              pointerEvents: "auto",
            },
            0.28,
          )
          .to(
            previousButton,
            {
              autoAlpha: 1,
              duration: 0.2,
              pointerEvents: "auto",
            },
            0.48,
          )
          .set([previousPanel, nextPanel], { clearProps: "width" }, 0.7);

        return;
      }

      gsap.set(itemRefs.current, {
        clearProps: "flexBasis,flexGrow",
      });
      gsap.set(buttonRefs.current, {
        autoAlpha: 1,
        pointerEvents: "auto",
      });
      gsap.set(previousPanel, {
        height: previousPanel.getBoundingClientRect().height,
      });
      gsap.set(nextPanel, { height: "auto" });

      const nextPanelHeight = nextPanel.getBoundingClientRect().height;

      gsap.set(nextPanel, { autoAlpha: 0, height: 0 });

      timelineRef.current = gsap
        .timeline({
          defaults: {
            ease: "power3.inOut",
          },
        })
        .set(previousPanel, { pointerEvents: "none" }, 0)
        .set(nextPanel, { visibility: "visible", pointerEvents: "auto" }, 0)
        .to(
          previousPanel,
          {
            autoAlpha: 0,
            height: 0,
            duration: 0.4,
          },
          0,
        )
        .fromTo(
          nextPanel,
          {
            autoAlpha: 0,
            height: 0,
            overflow: "hidden",
          },
          {
            autoAlpha: 1,
            height: nextPanelHeight,
            duration: 0.55,
            onComplete: () => {
              gsap.set(nextPanel, { height: "auto" });
            },
          },
          0.1,
        );
    },
    {
      dependencies: [activeId, isDesktop],
      scope: switcherRef,
    },
  );

  const selectItem = (id: string) => {
    setActiveId(id);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex =
          (currentIndex - 1 + contentItems.length) % contentItems.length;
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % contentItems.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = contentItems.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();

    const nextItem = contentItems[nextIndex];
    if (nextItem) {
      selectItem(nextItem.id);
      buttonRefs.current[nextIndex]?.focus();
    }
  };

  if (contentItems.length === 0) {
    return null;
  }

  return (
    <div
      ref={switcherRef}
      className={styles["content-switcher"]}
      role="tablist"
      aria-label={"bio content switcher"}
    >
      {contentItems.map((item, index) => {
        const isActive = item.id === activeId;
        const tabId = `${switcherId}-tab-${index}`;
        const panelId = `${switcherId}-panel-${index}`;

        return (
          <section
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            key={item.id}
            className={classNames(styles["content-switcher__item"], {
              [styles["content-switcher__item--active"]]: isActive,
            })}
          >
            <button
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              id={tabId}
              className={styles["content-switcher__trigger"]}
              type="button"
              role="tab"
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectItem(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {translate(item.title)}
            </button>

            <div
              ref={(node) => {
                panelRefs.current[index] = node;
              }}
              id={panelId}
              className={styles["content-switcher__panel"]}
              role="tabpanel"
              aria-labelledby={tabId}
              aria-hidden={!isActive}
            >
              <div className={styles["content-switcher__panel-inner"]}>
                <h2 className={styles["content-switcher__title"]}>
                  {translate(item.title)}
                </h2>
                <div className={styles["content-switcher__content"]}>
                  {translate.rich(item.content, {
                    p: (chunks) => <p>{chunks}</p>,
                    highlight: (chunks) => (
                      <span className={styles["content-switcher__highlight"]}>
                        {chunks}
                      </span>
                    ),
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
