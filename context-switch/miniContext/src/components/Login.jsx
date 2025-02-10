import { useState,useContext } from "react"
import UserConstext from "../context/userContext"


function login() {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const {setUser} = useContext(UserConstext)


const handleSubmit= (e)=>{
 e.preventDefault()
 setUser({username,password})
}


  return (
    <div>
          <h1>Rihankhan</h1>
        <h2>loing</h2>
        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder="Username" />
        {" "}
        <input type="text"
        value={password}
          onChange={(e)=> setPassword(e.target.value)}
        placeholder="password" />
   
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login