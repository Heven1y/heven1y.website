import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import LinkButton from "./index";
import LinkedInIcon from "@/shared/icons/LinkedIn";
import GitHubIcon from "@/shared/icons/GitHub";
import TelegramIcon from "@/shared/icons/Telegram";
import MailIcon from "@/shared/icons/Mail";

export default {
  title: "Shared/LinkButton",
  component: LinkButton,
} as Meta;

const Template: StoryFn<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const LinkedIn = Template.bind({});

LinkedIn.args = {
  link: "https://www.linkedin.com/in/semyon-bizin-7a5069240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
  link: "mailto:komrad.bizin@yandex.ru",
  children: <MailIcon />,
};
