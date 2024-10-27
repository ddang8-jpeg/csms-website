import * as React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Content } from '@/components/content';
import { NextUIProvider } from '@nextui-org/system';

export default function Nav() {
  return (
    <NextUIProvider>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">CSMS</p>
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
            <Link color="foreground" href="#">
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
        </NavbarContent>
      </Navbar>
      <Content />
    </NextUIProvider>
  );
}
