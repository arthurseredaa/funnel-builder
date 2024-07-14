import { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={cn('min-h-screen font-sans antialiased dark:bg-background dark:text-foreground')}>
    <main className="pt-[80px] m-auto w-2/3">{children}</main>
  </div>
);

export default Layout;
