import React from "react";
import UserConstext from "./userContext";

const UserContextProvider =({children})=>{
    const [user, setUser]=React.useState(null)
  return(
<>
<UserConstext.Provider value={{user,setUser}}>
   {children}
</UserConstext.Provider>

</>

  )

}

export default UserContextProvider;