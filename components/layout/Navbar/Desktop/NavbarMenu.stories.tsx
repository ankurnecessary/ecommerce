import NavbarMenu from '@/components/layout/Navbar/Desktop/NavbarMenu';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MockHeaderContextProvider from '@/components/layout/Header/Header.context.stories.mock';
import { links } from '../XnavbarLinkObj';

const meta = {
  title: 'components/layout/Navbar/Desktop/NavbarMenu',
  component: NavbarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story, context) => {
      const overrides = context?.parameters?.overrides || { navLinks: links };
      return (
        <MockHeaderContextProvider overrides={overrides}>
          <Story />
        </MockHeaderContextProvider>
      );
    },
  ],
} satisfies Meta<typeof NavbarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    overrides: {
      navLinks: links,
      desktop: {
        isMenuVisible: [
          true,
          {
            id: 'fkjffh2',
            href: '/sale',
            label: 'Sale',
            subcategories: [
              {
                name: 'Shirt',
                id: '1jljlk',
                image: 'https://picsum.photos/id/1/55/55',
              },
              {
                id: '2sdhfskdhfs',
                name: 'T-Shirt',
                image: 'https://picsum.photos/id/2/55/55',
              },
              {
                name: 'Pullovers',
                id: '3ljfdsjfpoit',
                image: 'https://picsum.photos/id/3/55/55',
              },
              {
                name: 'Hoodies',
                id: '4jldsjxmv',
                image: 'https://picsum.photos/id/4/55/55',
              },
              {
                name: 'Pants',
                id: '5mxcnvlsd',
                image: 'https://picsum.photos/id/5/55/55',
              },
              {
                name: 'Socks',
                id: '6sflskfj',
                image: 'https://picsum.photos/id/6/55/55',
              },
              {
                name: 'Watches',
                id: '7lsjflsj',
                image: 'https://picsum.photos/id/7/55/55',
              },
              {
                name: 'Sweat Shirts',
                id: '8lsjflsj',
                image: 'https://picsum.photos/id/8/55/55',
              },
              {
                name: 'Shorts',
                id: '9lsjflsj',
                image: 'https://picsum.photos/id/9/55/55',
              },
              {
                name: 'Joggers',
                id: '10lsjflsj',
                image: 'https://picsum.photos/id/10/55/55',
              },
              {
                name: 'Zip-up Hoodies',
                id: '11lsjflsj',
                image: 'https://picsum.photos/id/11/55/55',
              },
              {
                name: 'Sweaters',
                id: '12lsjflsj',
                image: 'https://picsum.photos/id/12/55/55',
              },
              {
                name: 'Denims',
                id: '13lsjflsj',
                image: 'https://picsum.photos/id/13/55/55',
              },
              {
                name: 'Shirt and Sweatshirts',
                id: '14jljlk',
                image: 'https://picsum.photos/id/14/55/55',
              },
              {
                id: '15sdhfskdhfs',
                name: 'T-Shirt',
                image: 'https://picsum.photos/id/15/55/55',
              },
              {
                name: 'Pullovers',
                id: '16ljfdsjfpoit',
                image: 'https://picsum.photos/id/16/55/55',
              },
              {
                name: 'Hoodies',
                id: '17jldsjxmv',
                image: 'https://picsum.photos/id/17/55/55',
              },
              {
                name: 'Pants',
                id: '18mxcnvlsd',
                image: 'https://picsum.photos/id/18/55/55',
              },
              {
                name: 'Socks',
                id: '19sflskfj',
                image: 'https://picsum.photos/id/19/55/55',
              },
              {
                name: 'Watches and Bands',
                id: '20lsjflsj',
                image: 'https://picsum.photos/id/20/55/55',
              },
              {
                name: 'Sweat Shirts',
                id: '21lsjflsj',
                image: 'https://picsum.photos/id/21/55/55',
              },
              {
                name: 'Shorts',
                id: '22lsjflsj',
                image: 'https://picsum.photos/id/23/55/55',
              },
              {
                name: 'Joggers',
                id: '24lsjflsj',
                image: 'https://picsum.photos/id/24/55/55',
              },
              {
                name: 'Zip-up Hoodies',
                id: '25lsjflsj',
                image: 'https://picsum.photos/id/25/55/55',
              },
              {
                name: 'Sweaters',
                id: '26lsjflsj',
                image: 'https://picsum.photos/id/26/55/55',
              },
              {
                name: 'Denims',
                id: '27lsjflsj',
                image: 'https://picsum.photos/id/27/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '28lsjflsj',
                image: 'https://picsum.photos/id/28/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '29lsjflsj',
                image: 'https://picsum.photos/id/29/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '30lsjflsj',
                image: 'https://picsum.photos/id/30/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '31lsjflsj',
                image: 'https://picsum.photos/id/31/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '32lsjflsj',
                image: 'https://picsum.photos/id/32/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '33lsjflsj',
                image: 'https://picsum.photos/id/33/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '34lsjflsj',
                image: 'https://picsum.photos/id/34/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '35lsjflsj',
                image: 'https://picsum.photos/id/35/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '36lsjflsj',
                image: 'https://picsum.photos/id/36/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '37lsjflsj',
                image: 'https://picsum.photos/id/37/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '38lsjflsj',
                image: 'https://picsum.photos/id/38/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '39lsjflsj',
                image: 'https://picsum.photos/id/39/55/55',
              },
              {
                name: 'Wallets and Belts',
                id: '40lsjflsj',
                image: 'https://picsum.photos/id/40/55/55',
              },
            ],
          },
        ],
        toggleMenu: () => {},
        selectedHorizontalNavLink: 'Sale',
        setSelectedHorizontalNavLink: () => {},
        selectedVerticalNavLink: 'Sale',
        setSelectedVerticalNavLink: () => {},
        verticalNavScrollToElementId: '',
        setVerticalNavScrollToElementId: () => {},
      },
    },
  },
};

export const Loading: Story = {
  args: {},
  parameters: {
    overrides: {
      navLinks: links,
      desktop: {
        isMenuVisible: [
          true,
          {
            id: 'fkjffh2',
            href: '/sale',
            label: 'Sale',
            subcategories: [],
          },
        ],
        toggleMenu: () => {},
        selectedHorizontalNavLink: 'Sale',
        setSelectedHorizontalNavLink: () => {},
        selectedVerticalNavLink: 'Sale',
        setSelectedVerticalNavLink: () => {},
        verticalNavScrollToElementId: '',
        setVerticalNavScrollToElementId: () => {},
      },
    },
  },
};
