import * as React from 'react';
import Nav from '@/components/nextui/nav';
import { NextUIProvider } from '@nextui-org/system';

export default function App() {
  return (
    <NextUIProvider>
      <Nav />
    </NextUIProvider>
  );
}
