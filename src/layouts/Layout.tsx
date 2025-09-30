import { FC, PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className='h-screen'>{children}</div>;
};

export default Layout;
