import { useState } from 'react'
import './App.css'
import {RouterProvider } from 'react-router-dom'
import router  from './Routes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
