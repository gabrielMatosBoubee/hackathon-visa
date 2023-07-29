import { ReactNode } from 'react';
import Header from './Header';

interface ComponentProps {
    children: ReactNode;
  }

function Layout({children}: ComponentProps) {
    return (
        <main style={{maxWidth: "100vw", minHeight: '100vh', backgroundColor: 'white'}}>
          <Header />
          { children }
        </main>
    );
}

export default Layout;