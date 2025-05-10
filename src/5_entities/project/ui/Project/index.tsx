"use client";

import {
  Button,
  CircularProgress,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Skeleton,
} from "@heroui/react";
import { useTranslations } from "next-intl";

import { CloseIcon } from "@/shared/icons/interface";
import { Categories, Technologies } from "@/shared/models/enums";
import { Chip } from "@/shared/ui";

import { Tags } from "../../model/enums";
import { DataProject } from "../../model/types";
import { ContentBuilder } from "../ContentBuilder";

import styles from "./Project.module.scss";

type TagsSectionProps = {
  type: Tags;
  data: {
    active: boolean;
    label: string;
  }[];
};

function TagsSection({ type, data }: TagsSectionProps) {
  const t = useTranslations("features_FilterByTags");
  return (
    <section title={t(type)}>
      <h2 className={styles["tags__title"]}>{t(type)}</h2>
      <div className={styles["tags__wrapper"]}>
        {data.map((elem, index) => (
          <Chip
            isDisabled
            key={index}
            active={elem.active}
            label={elem.label}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectProps = {
  isShow: boolean;
  onHide: () => void;
  data: DataProject | null;
  filters?: {
    categories: Categories[];
    stack: Technologies[];
  };
};

export default function Project(props: ProjectProps) {
  const { isShow, onHide, data, filters } = props;

  const prepareTagsData = <T extends string>(tags: T[], filterTags?: T[]) => {
    return tags.map((tag) => ({
      active: filterTags ? filterTags.includes(tag) : false,
      label: tag,
    }));
  };

  return (
    <Modal
      hideCloseButton
      size="5xl"
      isOpen={isShow}
      onClose={onHide}
      scrollBehavior="outside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className={styles["project__header"]}>
              {data ? (
                <h1 className={styles["project__header-title"]}>
                  {data.title}
                </h1>
              ) : (
                <Skeleton className="h-3 w-4/5 rounded-lg" />
              )}
              <Button
                onPress={onClose}
                isIconOnly
                aria-label="Close"
                data-pressed={false}
                variant="light"
              >
                <CloseIcon className={styles["project__header-close-icon"]} />
              </Button>
            </ModalHeader>
            <ModalBody className={styles["project__body"]}>
              {data ? (
                <>
                  {data.link && (
                    <Link
                      href={data.link.ref}
                      className={styles["project__link"]}
                      underline="always"
                      isExternal
                      showAnchorIcon
                      size="sm"
                    >
                      {data.link.value}
                    </Link>
                  )}
                  <article
                    className={styles["project__article"]}
                    title={data.title}
                  >
                    {data.content.map((contentData) => {
                      return (
                        <ContentBuilder
                          key={contentData.header}
                          data={contentData}
                          projectName={data.title}
                        />
                      );
                    })}
                    <section
                      className={styles["project__tags-section"]}
                      title="tags"
                    >
                      <TagsSection
                        type={Tags.Stack}
                        data={prepareTagsData<Technologies>(
                          data.stack,
                          filters?.stack,
                        )}
                      />
                      <TagsSection
                        type={Tags.Category}
                        data={prepareTagsData<Categories>(
                          data.categories,
                          filters?.categories,
                        )}
                      />
                    </section>
                  </article>
                </>
              ) : (
                <CircularProgress aria-label="Loading" />
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
