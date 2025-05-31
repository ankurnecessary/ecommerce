import { Meta } from '@storybook/nextjs-vite';
import NavbarLinks from '@/components/layout/Navbar/Desktop/NavbarLinks';
import { fn } from 'storybook/test';
import { headerContext } from '@/components/layout/Header/Header.context';
import { HeaderContext, MenuCategory } from '@/components/layout/Header/types';
import type { StoryObj } from '@storybook/nextjs-vite';
import { links } from '@/components/layout/Navbar/XnavbarLinkObj';

const MockHeaderContextProvider = ({
  children,
  navLinks,
}: {
  children: React.ReactNode;
  navLinks: MenuCategory[];
}) => {
  // Provide all required context values, mock as needed
  const contextValue: HeaderContext = {
    navLinks,
    setNavLinks: () => {},
    desktop: {
      isMenuVisible: [false, {} as MenuCategory],
      selectedHorizontalNavLink: '',
      setSelectedHorizontalNavLink: () => {},
      selectedVerticalNavLink: '',
      setSelectedVerticalNavLink: () => {},
      verticalNavScrollToElementId: '',
      setVerticalNavScrollToElementId: () => {},
      toggleMenu: () => {},
      navbar: {
        parent: null,
        child: null,
        childOffset: 0,
        setNavbarElementsDsktp: () => {},
        setNavbarOffsetDsktp: () => {},
      },
    },
    mobile: null,
  };

  return (
    <headerContext.Provider value={contextValue}>
      {children}
    </headerContext.Provider>
  );
};

const meta = {
  title: 'components/layout/Navbar/Desktop/NavbarLinks',
  component: NavbarLinks,
  parameters: {
    layout: 'centered',
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
      const navLinks = context.parameters.navLinks || [];
      return (
        <MockHeaderContextProvider navLinks={navLinks}>
          <Story />
        </MockHeaderContextProvider>
      );
    },
  ],
} as Meta<typeof NavbarLinks>;

export default meta;

export const Default: StoryObj<typeof NavbarLinks> = {
  args: {
    mouseOverHandler: () => () => {},
    mouseOutHandler: () => {},
  },
  parameters: {
    navLinks: links,
  },
};

export const Loading: StoryObj<typeof NavbarLinks> = {
  args: {
    mouseOverHandler: () => () => {},
    mouseOutHandler: () => {},
  },
  parameters: {
    navLinks: [],
  },
};

// [ ]: Add theming in the stories of storybook
