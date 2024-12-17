import * as React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';

interface Props {
  activePage?: string;
}

// Pages displayed in NavBar
const navItems = [
  { name: 'Research', path: 'research' },
  { name: 'Papers', path: 'papers' },
  { name: 'Team', path: 'team' },
  { name: 'Teaching', path: 'teaching' },
  { name: 'News', path: 'news' },
];

const Nav: React.FC<Props> = ({ activePage = 'home' }) => {
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">
          <Link color="primary" href="/" className="text-4xl font-light">
            CSMS
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {navItems.map((item) => (
          <NavbarItem key={item.name} isActive={activePage === item.name.toLowerCase()}>
            <Link
              href={`/${item.path.toLowerCase()}`}
              color={activePage === item.name.toLowerCase() ? 'primary' : 'foreground'}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={activePage === item.name.toLowerCase() ? 'primary' : 'foreground'}
              href={`/${item.path.toLowerCase()}`}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
