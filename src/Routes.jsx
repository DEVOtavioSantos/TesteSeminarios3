import { createHashRouter, Routes } from "react-router-dom"
import Layout from "./Layout"

const Routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Teste</h1>
      },
      {
        path: "/sobre",
        element: <h1>Hello World</h1>
      }
    ]
  }
])

export default Routes