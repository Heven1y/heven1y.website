import { Meta, StoryFn } from "@storybook/react";

import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
} from "@/shared/icons/social";

import LinkButton from "./index";

export default {
  title: "Shared/LinkButton",
  component: LinkButton,
} as Meta;

const Template: StoryFn<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const LinkedIn = Template.bind({});

LinkedIn.args = {
  link: "https://linkedin.com/in/heven1y",
  children: <LinkedInIcon />,
};

export const GitHub = Template.bind({});

GitHub.args = {
  link: "https://github.com/Heven1y",
  children: <GitHubIcon />,
};

export const Telegram = Template.bind({});

Telegram.args = {
  link: "https://t.me/Heven1y",
  children: <TelegramIcon />,
};

export const Mail = Template.bind({});

Mail.args = {
  link: "mailto:heven1y@outlook.com",
  children: <MailIcon />,
};
