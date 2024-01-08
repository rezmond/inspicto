import { ReactElement, type FC } from 'react';

type LayoutProps = {
  header: ReactElement;
  children: ReactElement;
};

export const Layout: FC<LayoutProps> = ({ header, children }) => (
  <>
    {header}
    {children}
  </>
);
