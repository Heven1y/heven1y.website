import { Categories, Technologies } from "@/shared/models/enums";

import { Sections } from "./enums";

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
  width: number;
  height: number;
};

export type ProjectContent = {
  header: string;
  sections: (ListSection | ParagraphSection | ImageSection)[];
};

export type DataProject = {
  title: string;
  year: number;
  shortDescription: string;
  colors: string[];
  img?: string;
  link?: {
    ref: string;
    value: string;
  };
  content: ProjectContent[];
  categories: Categories[];
  stack: Technologies[];
};

export type ProjectChartPoint = {
  year: number;
  total: number;
  projects: Pick<DataProject, "title" | "shortDescription">[];
};
