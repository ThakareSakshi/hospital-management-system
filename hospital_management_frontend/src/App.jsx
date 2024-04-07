import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Home from "./pages/home/Home"
import Register from "./pages/Auth/Register"
import Patient from "./pages/patient/Patient"

function App() {
  const router=createBrowserRouter([
    {path:"/",
  element:<Home/>},
  {path:"/login",
element:<Login/>},
{path:"/register",
element:<Register/>},
{
  path:"/patients",
  element:<Patient/>
}
  ])
  

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
