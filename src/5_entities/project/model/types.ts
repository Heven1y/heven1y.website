import { Categories, Technologies } from "@/shared/models/enums";

import { Sections } from "./enums";

export type ProjectTag = {
  active: boolean;
  label: Categories | Technologies;
};

type ListSection = {
  type: Sections.List;
  subtitle?: string;
  isNumerable?: boolean;
  list: string[];
};

type ParagraphSection = {
  type: Sections.Paragraph;
  content: string;
};

type ImageSection = {
  type: Sections.Image;
  src: string;
  alt: string;
};

export type ProjectContent = {
  title: string;
  sections: (ListSection | ParagraphSection | ImageSection)[];
};

export type DataProject = {
  title: string;
  content: ProjectContent[];
  categories: ProjectTag[];
  stack: ProjectTag[];
};
