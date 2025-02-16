"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";

import { CloseIcon } from "@/shared/icons/interface";
import { Chip } from "@/shared/ui";

import { Tags } from "../../model/enums";
import { DataProject, ProjectTag } from "../../model/types";
import { ContentBuilder } from "../ContentBuilder";

import styles from "./Project.module.scss";

type TagsSectionProps = {
  type: Tags;
  data: ProjectTag[];
};

function TagsSection({ type, data }: TagsSectionProps) {
  return (
    <section>
      <h2>{type}</h2>
      <div>
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
  data: DataProject;
};

export default function Project(props: ProjectProps) {
  const { isShow, onHide, data } = props;

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
              <h1 className={styles["project__header-title"]}>{data.title}</h1>
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
            <ModalBody>
              <article title={data.title}>
                {data.content.map((contentData) => {
                  return (
                    <ContentBuilder
                      key={contentData.title}
                      data={contentData}
                      projectName={data.title}
                    />
                  );
                })}
                <TagsSection type={Tags.Stack} data={data.stack} />
                <TagsSection type={Tags.Category} data={data.categories} />
              </article>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
