import type { Meta, StoryObj } from '@storybook/svelte';
import Link from './link.svelte';

const meta = {
  title: 'Components/With Tailwind + CSF/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};