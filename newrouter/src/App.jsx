import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './Component/Home.jsx'
import './Component/About.jsx'
import './Component/Contect.jsx'
import NavBar from './NavBar.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Contect from './Component/Contect.jsx'
import './App.css'

function App() {
  const routuer = createBrowserRouter ([
  
    {
     path:"/",
     element :<><NavBar/><Home/></>
    },
    {
     path:"/About",
     element :<> <NavBar/><About/></>
    },
    {
     path:"/Contect",
     element :<> <NavBar/><Contect/></>
    },
 
 ])

  return (
    <>
         <RouterProvider router={routuer}/>
    </>
  )
}

export default App
