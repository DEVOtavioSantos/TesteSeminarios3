import { createHashRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"

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
        path: "/sobre",
        element: <h1>Hello World</h1>
      }
    ]
  }
])

export default router