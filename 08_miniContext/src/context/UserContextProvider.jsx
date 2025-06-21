import React from "react";

import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {  //jo bhi prop aa rhe hai children usko as it is use kar lo
    const [user, setUser] = useState(null)


    return(
        
        <>
        {/*isss fragment ke ander jo kuch bhi aa rha hai usko as it is render karwa denge  , ab ho sakta hai ismein card component aaa rha hai , ho sakta hai card ke ander dashboard  aaeye */}
            
            <UserContext.Provider value={{user, setUser}}>    {/*provider se wrap to kar diya , but actually kon si value ko access de rhe ho , wo bhi to batana padega, uske liye provider ke ander ek property milti hai value={{user, setUser}} */}
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider