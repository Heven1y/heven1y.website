"use client";

import React from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@heroui/react";

type Item = {
  key: string;
  label: string;
};

type PropsSelect = {
  children: React.ReactNode;
  items: Item[];
  onChange?: (values: Selection) => void;
  value?: string;
  className?: string;
  classNameItem?: string;
};

export default function Select(props: PropsSelect) {
  return (
    <Dropdown placement="bottom-end" className={props.className}>
      <DropdownTrigger>{props.children}</DropdownTrigger>
      <DropdownMenu
        variant="faded"
        selectionMode="single"
        selectedKeys={new Set([props.value ?? ""])}
        onSelectionChange={props.onChange}
      >
        {props.items.map((item) => {
          return (
            <DropdownItem className={props.classNameItem} key={item.key}>
              {item.label}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
