import { useState } from 'react'
import './App.css'
import { counterContext } from './Context/Context'
import NavBar from './Component/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <counterContext.Provider value= {{count,setCount}}>
      <NavBar/>
      
      {/* <div className="card">
        <button  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      


      </counterContext.Provider>
    </>
  )
}

export default App
