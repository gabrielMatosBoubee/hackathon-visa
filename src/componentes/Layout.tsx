import { ReactNode } from 'react';
import Header from './Header';

interface ComponentProps {
    children: ReactNode;
  }

function Layout({children}: ComponentProps) {
    return (
        <main style={{width: "90vw", display: "flex", flexDirection: "column", margin: "auto"}}>
          <Header />
          { children }
        </main>
    );
}

export default Layout;