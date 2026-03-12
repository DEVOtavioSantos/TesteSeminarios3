import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout