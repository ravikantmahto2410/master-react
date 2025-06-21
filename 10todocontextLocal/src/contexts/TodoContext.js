import { useContext, createContext } from "react";


export const TodoContext = createContext({
    
})



export const useTodo = () => {
    return useContext(TodoContext)  //remember  jab bhi use context loge  uss useContext ko ek context dena padega taaki jaan sake kiske baare mein baat kar rhe hai
}

export const TodoProvider = TodoContext.Provider