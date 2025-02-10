import { useContext } from "react"
import { counterContext } from "../Context/Context"

const Component = () => {

    const value = useContext(counterContext);
  return (
    <div>
    <p>IT`S A Componentes</p>
    <p>
        {value.count}
    </p>

     </div>
  )
}

export default Component