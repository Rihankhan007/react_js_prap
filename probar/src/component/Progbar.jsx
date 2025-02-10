import React, { useEffect, useState } from "react"
import './progbar.css'


const Progbar = () => {
const [bar,setbar] = useState(10);

useEffect(()=>{
  const interval = setInterval(()=>{
    setbar((preBarValue)=>{
        if(preBarValue >= 100){
          clearInterval(interval)
          
        }
      return Math.min(preBarValue +5,100)
      })
  },150);

  
},[])


  return (
    <div className="container">
      <div className="progesse"  style={{transform: `translateX(${bar-100}%)`}}>

      </div>
      </div>
  )
}

export default Progbar;