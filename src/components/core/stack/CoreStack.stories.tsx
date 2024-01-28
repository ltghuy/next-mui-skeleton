import { Meta, StoryObj } from '@storybook/react';
import { CoreStack } from '..';

export default {
  title: 'Core/CoreStack',
  component: CoreStack,
  args: {
    children: 'This is content',
  },
} as Meta<typeof CoreStack>;

type Story = StoryObj<typeof CoreStack>;

export const Default: Story = {
  args: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    sx: {
      width: '250px',
      height: '100px',
      border: '1px solid red',
    },
  },
};
