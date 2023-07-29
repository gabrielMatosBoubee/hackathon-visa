import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
import Wallet from './pages/Wallet'
import { GameProvider } from './context/GameContext';
import Spending from './pages/Spending';
import Budget from './pages/Budget';
import Investments from './pages/Investiments';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Main />
  }, {path: "*", element: <div>ERROR 404</div>},
  {path: "/wallet", element: <Wallet />},
  {path: "/budget", element: <Budget />},
  {path: "/spendings", element: <Spending />},
  {path: "/investiments", element: <Investments />}
])



  return (
    <GameProvider>
     <RouterProvider router={router}/>
    </GameProvider>
  )
}

export default App
