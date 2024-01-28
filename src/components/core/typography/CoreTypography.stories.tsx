import { Meta, StoryObj } from '@storybook/react';
import { CoreTypography } from '..';

export default {
  title: 'Core/CoreTypography',
  component: CoreTypography,
  args: {
    children: 'This is typography',
    variant: 'body2',
  },
} as Meta<typeof CoreTypography>;
type Story = StoryObj<typeof CoreTypography>;

export const Default: Story = {};

export const Heading3: Story = {
  args: {
    children: 'This is heading',
    variant: 'h3',
  },
};

export const TypoWithColor: Story = {
  args: {
    color: 'primary'
  },
};
