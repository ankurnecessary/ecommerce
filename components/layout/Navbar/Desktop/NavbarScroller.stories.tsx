import { Meta } from '@storybook/nextjs-vite';
import { action } from 'storybook/actions';
import NavbarScroller from '@/components/layout/Navbar/Desktop/NavbarScroller';
import MockHeaderContextProvider from '@/components/layout/Header/Header.context.stories.mock';
const meta = {
  title: 'components/layout/Navbar/Desktop/NavbarScroller',
  component: NavbarScroller,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const overrides = context.parameters.overrides || [];
      return (
        <MockHeaderContextProvider overrides={overrides}>
          <Story />
        </MockHeaderContextProvider>
      );
    },
  ],
} as Meta<typeof NavbarScroller>;

// BUG: When we hover over navbar scroller arrows, it opens the navbar menu. It should not open it.

export default meta;

export const Default = {
  args: {},
  parameters: {
    overrides: {
      desktop: {
        navbar: {
          child: {
            getBoundingClientRect: () => ({
              width: 1500,
            }),
          },
          parent: {
            getBoundingClientRect: () => ({
              width: 1200,
            }),
          },
          childOffset: 0,
          setNavbarOffsetDsktp: action('setNavbarOffsetDsktp'),
        },
      },
    },
  },
};

export const BothButtonsEnabled = {
  args: {},
  parameters: {
    overrides: {
      desktop: {
        navbar: {
          child: {
            getBoundingClientRect: () => ({
              width: 1500,
            }),
          },
          parent: {
            getBoundingClientRect: () => ({
              width: 1200,
            }),
          },
          childOffset: -10,
          setNavbarOffsetDsktp: action('setNavbarOffsetDsktp'),
        },
      },
    },
  },
};

export const OnlyLeftButtonEnabled = {
  args: {},
  parameters: {
    overrides: {
      desktop: {
        navbar: {
          child: {
            getBoundingClientRect: () => ({
              width: 2303,
            }),
          },
          parent: {
            getBoundingClientRect: () => ({
              width: 1087,
            }),
          },
          childOffset: -1216,
          setNavbarOffsetDsktp: action('setNavbarOffsetDsktp'),
        },
      },
    },
  },
};
