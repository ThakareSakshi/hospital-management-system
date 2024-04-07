import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Home from "./pages/home/Home"
import Register from "./pages/Auth/Register"

function App() {
  const router=createBrowserRouter([
    {path:"/",
  element:<Home/>},
  {path:"/login",
element:<Login/>},
{path:"/register",
element:<Register/>}
  ])
  

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
