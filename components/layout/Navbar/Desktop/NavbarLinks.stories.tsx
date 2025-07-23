import { Meta } from '@storybook/nextjs-vite';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import { fn } from 'storybook/test';
import type { StoryObj } from '@storybook/nextjs-vite';
import MockHeaderContextProvider from '@/components/layout/Header/Header.context.stories.mock';

const meta = {
  title: 'components/layout/Navbar/Desktop/NavbarLinks',
  component: NavbarLinks,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    mouseOverHandler: {
      control: fn(),
      description: 'Handler for mouse over events on navbar links',
    },
    mouseOutHandler: {
      control: fn(),
      description: 'Handler for mouse out events on navbar links',
    },
  },
  decorators: [
    (Story, context) => {
      const overrides = context?.parameters?.overrides || {};
      return (
        <MockHeaderContextProvider overrides={overrides}>
          <Story />
        </MockHeaderContextProvider>
      );
    },
  ],
} satisfies Meta<typeof NavbarLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mouseOverHandler: () => () => {},
    mouseOutHandler: () => () => {},
  },
  parameters: {
    overrides: {
      navLinks: [
        {
          id: 'fkjffh1',
          url: '/newIn',
          name: 'New In',
          subcategories: [],
        },
        {
          id: 'fkjffh2',
          url: '/sale',
          name: 'Sale',
          subcategories: [],
        },
        {
          id: 'fkjffh3',
          url: '/womenClothing',
          name: 'Women Clothing',
          subcategories: [],
        },
      ],
      desktop: {
        selectedHorizontalNavLink: 'Sale',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    mouseOverHandler: () => () => {},
    mouseOutHandler: () => () => {},
  },
  parameters: {
    overrides: {
      navLinks: [],
    },
  },
};

// [x]: Add dark and light mode in the stories of storybook.
