import * as React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';

const Nav: React.FC = () => {
  return (
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link color="primary" href="/" className='text-xl'>CSMS</Link>
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link color="foreground" href="#">
              Research
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Papers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/team/">
              Team
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Teaching
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/test/">
              Test
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  );
};
export default Nav;
