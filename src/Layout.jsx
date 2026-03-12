import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/footer/footer.jsx"
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout