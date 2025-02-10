import Component from "./Component"
import { counterContext } from "../Context/Context"
import { useContext } from "react"

const Button = () => {
 const value = useContext(counterContext)
  return (
    <div>

        <button style={{color: "green",margin:"40px"}} onClick={()=> value.setCount((count)=>count + 1)} > button  +
        {value.count}
        </button>
     
        <Component/>
    </div>
  )
}

export default Button