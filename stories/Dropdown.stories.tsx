import { ComponentMeta, ComponentStory } from "@storybook/react";
import { demoDropdownLinks, Dropdown } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  links: demoDropdownLinks,
  menuBtnLabel: "Dropdown",
};
