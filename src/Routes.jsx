import { createHashRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import Ideia_Page from "./pages/ideia"
import Autismo from "./pages/Autismo"

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/Ideia",
        element: <Ideia_Page/>
      },
      {
        path: "/autismo",
        element: <Autismo/>
      }
    ]
  }
])

export default router