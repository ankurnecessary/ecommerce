import { Meta, StoryObj } from '@storybook/nextjs-vite';
import NavbarSubcategory from '@/components/layout/Navbar/Desktop/NavbarSubcategory';

const meta = {
  title: 'components/layout/Navbar/Desktop/NavbarSubcategory',
  component: NavbarSubcategory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavbarSubcategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subCategory: {
      name: 'Shirt',
      id: '1jljlk',
      url: '/Shirt',
      imagePath: 'https://picsum.photos/id/1/55/55',
    },
  },
};
