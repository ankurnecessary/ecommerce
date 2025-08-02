import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MobileHamburgerButton from '@/components/layout/Header/MobileHamburgerButton';

const meta = {
  title: 'Components/Layout/Header/MobileHamburgerButton',
  component: MobileHamburgerButton,
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MobileHamburgerButton>;
export default meta;
type story = StoryObj<typeof MobileHamburgerButton>;

export const Default: story = {};
