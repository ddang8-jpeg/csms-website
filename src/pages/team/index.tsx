import * as React from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, } from "@nextui-org/navbar";
import { Link,  } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import {Content} from "@/components/content";
import {NextUIProvider} from "@nextui-org/system";

export default function App() {
  return (
    <NextUIProvider>
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <Content/>

    </NextUIProvider>
  );
}