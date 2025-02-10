import "./App.css";
import NavBar from "./NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home"
import About from "./component/About";
import Contacte from "./component/Contacte"

function App() {
  const routuer = createBrowserRouter([
    
    {
        path:"/",
        element: <><NavBar/><Home/></>
    },
    {
        path:"/About",
        element:<><NavBar/><About/></>
    },
    {
        path:"/Contacte",
        element:<><NavBar/><Contacte/></>
    },
  
  ]);

  return (
    <>
      
      <RouterProvider router={routuer}/>

    </>
  );
}

export default App;
