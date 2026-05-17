import React from "react";

import { Meta, StoryFn } from "@storybook/react";

import { CloseIcon } from "@/shared/icons/interface";
import { JapanIcon, RussiaIcon, USAIcon } from "@/shared/icons/languages";
import {
  CSharpIcon,
  JavaIcon,
  JavaScriptIcon,
  TypeScriptIcon,
} from "@/shared/icons/programingLanguages";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/shared/icons/social";
import {
  AndroidStudioIcon,
  BitbacketIcon,
  FigmaIcon,
  GitIcon,
  JiraIcon,
  SplineIcon,
  TildaIcon,
} from "@/shared/icons/softwareAndTools";
import {
  FirebaseIcon,
  FSDIcon,
  GraphQLIcon,
  IonicIcon,
  MobXIcon,
  NextJSIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  StorybookIcon,
  ViteIcon,
  VueIcon,
} from "@/shared/icons/technologies";

import styles from "./Icons.module.scss";

type IconComponent = React.ComponentType;

type IconItem = {
  name: string;
  Icon: IconComponent;
};

function IconGrid({ items }: { items: IconItem[] }) {
  return (
    <div className={styles.catalog}>
      <div className={styles.grid}>
        {items.map(({ name, Icon }) => (
          <figure key={name} className={styles.item}>
            <Icon />
            <figcaption className={styles.label}>{name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default {
  title: "Shared/Icons",
} as Meta;

export const ProgramingLanguages: StoryFn = () => (
  <IconGrid
    items={[
      { name: "JavaScriptIcon", Icon: JavaScriptIcon },
      { name: "TypeScriptIcon", Icon: TypeScriptIcon },
      { name: "JavaIcon", Icon: JavaIcon },
      { name: "CSharpIcon", Icon: CSharpIcon },
    ]}
  />
);

export const Languages: StoryFn = () => (
  <IconGrid
    items={[
      { name: "USAIcon", Icon: USAIcon },
      { name: "RussiaIcon", Icon: RussiaIcon },
      { name: "JapanIcon", Icon: JapanIcon },
    ]}
  />
);

export const SoftwareAndTools: StoryFn = () => (
  <IconGrid
    items={[
      { name: "GitIcon", Icon: GitIcon },
      { name: "JiraIcon", Icon: JiraIcon },
      { name: "FigmaIcon", Icon: FigmaIcon },
      { name: "BitbacketIcon", Icon: BitbacketIcon },
      { name: "AndroidStudioIcon", Icon: AndroidStudioIcon },
      { name: "SplineIcon", Icon: SplineIcon },
      { name: "TildaIcon", Icon: TildaIcon },
    ]}
  />
);

export const Technologies: StoryFn = () => (
  <IconGrid
    items={[
      { name: "ReactIcon", Icon: ReactIcon },
      { name: "VueIcon", Icon: VueIcon },
      { name: "NextJSIcon", Icon: NextJSIcon },
      { name: "ReduxIcon", Icon: ReduxIcon },
      { name: "MobXIcon", Icon: MobXIcon },
      { name: "GraphQLIcon", Icon: GraphQLIcon },
      { name: "FirebaseIcon", Icon: FirebaseIcon },
      { name: "ReactQueryIcon", Icon: ReactQueryIcon },
      { name: "FSDIcon", Icon: FSDIcon },
      { name: "StorybookIcon", Icon: StorybookIcon },
      { name: "ViteIcon", Icon: ViteIcon },
      { name: "IonicIcon", Icon: IonicIcon },
    ]}
  />
);

export const Social: StoryFn = () => (
  <IconGrid
    items={[
      { name: "GitHubIcon", Icon: GitHubIcon },
      { name: "LinkedInIcon", Icon: LinkedInIcon },
      { name: "TelegramIcon", Icon: TelegramIcon },
    ]}
  />
);

export const Interface: StoryFn = () => (
  <IconGrid items={[{ name: "CloseIcon", Icon: CloseIcon }]} />
);
