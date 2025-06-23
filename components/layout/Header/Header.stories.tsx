import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from '@/components/layout/Header';

const meta = {
  title: 'Components/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;
export default meta;
type story = StoryObj<typeof Header>;

export const Default: story = {};
