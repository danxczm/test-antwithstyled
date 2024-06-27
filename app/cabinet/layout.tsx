import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
