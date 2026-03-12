import { useState } from 'react'
import NavBar from "./components/NavBar/NavBar.jsx"
import './App.css'
import {HashRouter,RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
