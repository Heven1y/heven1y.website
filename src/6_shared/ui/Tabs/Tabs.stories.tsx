import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import Tabs from "./index";

export default {
  title: "Shared/Tabs",
  component: Tabs,
} as Meta;

export const Default: StoryFn<typeof Tabs> = () => {
  const [activeId, setActiveId] = useState("about");

  return (
    <Tabs
      items={[
        { id: "about", title: "About me", href: "#" },
        { id: "projects", title: "Projects", href: "#" },
      ]}
      activeId={activeId}
      onChange={setActiveId}
    />
  );
};
