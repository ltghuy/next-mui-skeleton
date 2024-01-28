import { Meta, StoryObj } from '@storybook/react';
import { CoreAvatar } from '..';


export default {
  title: 'Core/CoreAvatar',
  component: CoreAvatar,
} as Meta<typeof CoreAvatar>;
type Story = StoryObj<typeof CoreAvatar>;

export const Default: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    children: 'HL',
  },
};

export const Image: Story = {
  args: { children: 'HL', src: 'https://i.pravatar.cc/300' },
};

export const Rounded: Story = {
  args: {
    children: 'HL',
    variant: 'rounded',
    src: 'https://i.pravatar.cc/300',
  },
};
