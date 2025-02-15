"use client";

import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import NextImage from "next/image";

import { Categories } from "@/shared/models/enums";
import { Chip } from "@/shared/ui";

import styles from "./CardProject.module.scss";

type CardCategory = {
  label: Categories;
  active: boolean;
};

type CardProjectProps = {
  onClick?: () => void;
  srcImg?: string;
  colors: string[];
  title: string;
  description: string;
  categories: CardCategory[];
};

export default function CardProject(props: CardProjectProps) {
  const { colors, title, description, categories, srcImg, onClick } = props;

  return (
    <Card
      onPress={onClick}
      fullWidth
      isPressable
      className={styles["card-project"]}
    >
      <CardBody className={styles["card-project__body"]}>
        {srcImg ? (
          <Image
            removeWrapper
            radius="none"
            className={styles["card-project__image"]}
            src={srcImg}
            alt={title}
            as={NextImage}
            width={300}
            height={210}
          />
        ) : (
          <div
            className={styles["card-project__image"]}
            style={{
              backgroundImage: `linear-gradient(105deg, ${colors.join(", ")})`,
              backgroundColor: colors[0],
            }}
          />
        )}
      </CardBody>
      <CardFooter className={styles["card-project__footer"]}>
        <h4 className={styles["card-project__title"]}>{title}</h4>
        <p className={styles["card-project__description"]}>{description}</p>
        <div className={styles["card-project__categories"]}>
          {categories.map((category) => (
            <Chip
              isDisabled
              key={category.label}
              label={category.label}
              active={category.active}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
