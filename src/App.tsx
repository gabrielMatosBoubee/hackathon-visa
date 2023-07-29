import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
import Wallet from './pages/Wallet'
import { GameProvider } from './context/GameContext';
import Spending from './pages/Spending';
import Budget from './pages/Budget';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Main />
  }, {path: "*", element: <div>ERROR 404</div>},
  {path: "/wallet", element: <Wallet />},
  {path: "/spendings", element: <Spending />},
  {path: "/budget", element: <Budget />}
])



  return (
    <GameProvider>
     <RouterProvider router={router}/>
    </GameProvider>
  )
}

export default App
