import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos: [
        // {},{},{}  //har ek todo hoga wo ek object hoga aur hum aise add karenge

        {
            id:1,
            todo: "Todo Message", //isko aap todo bol do, todo Title bol lo, todoMsg bollo
            completed:false,
        }
    ] //ye to hogyi properties aur next likhne padegi functionalities
    
})



export const useTodo = () => {
    return useContext(TodoContext)  //remember  jab bhi use context loge  uss useContext ko ek context dena padega taaki jaan sake kiske baare mein baat kar rhe hai
}

export const TodoProvider = TodoContext.Provider