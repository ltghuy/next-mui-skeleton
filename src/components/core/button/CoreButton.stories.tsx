import { Meta, StoryObj } from '@storybook/react';
import { CoreButton } from '..';

export default {
  title: 'Core/CoreButton',
  component: CoreButton,
  args: {
    children: 'Button',
    color: 'primary',
    size: 'medium',
  },
} as Meta<typeof CoreButton>;

type Story = StoryObj<typeof CoreButton>;

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outlined',
  },
};
