import { createSlice,nanoid  } from "@reduxjs/toolkit";

const initialState = {  //store ke ander sabse important cheez hoti hai initialState ki store starting mein kaisa dikhega empty hoga , koi value hogi uske ander ya database se koi data fetch karke wahan aayegi
    //initial state kuch bhi ho sakti hai , ye totally hamare upar depend karti hai , array bhi ho sakti hai aur object bhi ho sakti hai

    todos: [{id: 1, text: "Hello World"}]
}


//now we will make slice , slice kkuch nhi reducer ka ek bada bhai hai , aur reducer kuch nhi bas ek functionality hai

export const todoSlice = createSlice({
    name : 'todo',//property ka naam name hi hota hai yahan redux Toolkit mein
    initialState,     //multiple slices banti hai but har ek slice ka ek initialState hota hai
    reducers: { //reducers ke andder aata hai properties and functions
        addTodo: (state, action) => {//ye function to kahin chein aur bhi ho skakta hai auer uska refernce dena naa ki call karna hai,      //yahan par Hamesha humein do cheezein milegi ek milega state and ek milega action (state, action ) inn dono ka access hamesha hamare paas rahega,   //state mein hame milega un sab ka access jo jo abhi intialState mein hai
            //id dene ke liye humein wo values action se milti hai               //

            const todo = {
                id: nanoid(), 
                text: action.payload.text  //payload apne aap mein ek object hai
            }
            state.todos.push(todo)

        },    
        removeTodo: (state, action) => {//state ke ander milta hai jo bhi hamara abhi current state hai
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },                         
    }   // ye ban ggya reducer  , iske ander aati hai property aur function
})
///assignemnt write reducers for delete  kaise hoga , update kaise hoga