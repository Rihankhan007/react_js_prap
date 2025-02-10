import Progbar from './component/Progbar'
import './App.css'
import { useState } from 'react'

function App() {
  const [toggel,setToggel] = useState(false)

  return (
    <div>
       {toggel ? <Progbar/> : ""}

        <button onClick={()=>setToggel(!toggel)}>Toggel </button>
    </div>
  )
}

export default App
