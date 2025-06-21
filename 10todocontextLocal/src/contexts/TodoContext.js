import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos: [
        // {},{},{}  //har ek todo hoga wo ek object hoga aur hum aise add karenge

        {
            id:1,
            todo: "Todo Message", //isko aap todo bol do, todo Title bol lo, todoMsg bollo
            completed:false,
        }
    ], //ye to hogyi properties aur next likhne padegi functionalities
    //now we will write functionalities aur functionalities ke ander definitions nhi likhte hai sirf uske naam likhte hai
    //forexample addTodo: (todo) => {} addTodo kaise functionalities hai kuch nhi aap ek todoYahan paass karoge(todo means message) , to  message aap jaise mujhe pass karoge to ye function kuch kaam karega, kya kaam kya karega nhi pata ye kon kaam karega ye hum decide karenge bahar decide karenge
    
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



export const useTodo = () => {
    return useContext(TodoContext)  //remember  jab bhi use context loge  uss useContext ko ek context dena padega taaki jaan sake kiske baare mein baat kar rhe hai
}

export const TodoProvider = TodoContext.Provider