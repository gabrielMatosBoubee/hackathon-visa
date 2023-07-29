import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
import Wallet from './pages/Wallet'
import { GameProvider } from './context/GameContext';
import Spending from './pages/Spending';
import Investments from './pages/Investiments';
import CreditCard from './pages/CreditCard';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Main />
  }, {path: "*", element: <div>ERROR 404</div>},
  {path: "/wallet", element: <Wallet />},
  {path: "/spendings", element: <Spending />}, 
  {path: "/investiments", element: <Investments />},
  {path: "/credit-card", element: <CreditCard />}
])



  return (
    <GameProvider>
     <RouterProvider router={router}/>
    </GameProvider>
  )
}

export default App
