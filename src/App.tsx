import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <div>Hello World</div>
  }])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
