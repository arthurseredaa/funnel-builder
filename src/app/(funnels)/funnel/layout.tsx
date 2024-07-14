import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-screen h-screen pt-[60px] bg-primary-foreground">{children}</div>;
};

export default Layout;
