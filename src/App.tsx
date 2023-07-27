import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GameContext from './context/GameContext';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <div>Hello World</div>
  }])

  return (
    <GameContext.Provider value={null}>
     <RouterProvider router={router}/>
    </GameContext.Provider>
  )
}

export default App
