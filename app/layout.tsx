import React from 'react';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AntDesign Next.js',
  description: 'test',
};

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <AntdRegistry>
        {children}
      </AntdRegistry>
    </html>
  );
}
