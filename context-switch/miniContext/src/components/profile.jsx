import {useContext} from 'react'
import UserConstext from '../context/userContext'
const profile = () => {

    const {user} = useContext(UserConstext)
 
    if(!user) return <div>plz login</div>

    return <div>Welcome {user.username}</div>
}

export default profile