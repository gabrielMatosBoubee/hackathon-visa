import { ReactNode } from 'react';
import Header from './Header';

interface ComponentProps {
    children: ReactNode;
  }

function Layout({children}: ComponentProps) {
    return (
        <div style={{display: "flex", flexDirection: "column", margin: "auto"}}>
          <Header />
          { children }
        </div>
    );
}

export default Layout;