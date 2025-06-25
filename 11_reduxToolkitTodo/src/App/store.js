//process to make store
//step: 01 : bring configure store
//import {configureStore} from '@reduxjs/toolkit'

//store ban gya but its not ready for useCase

//step-02 

// import {configureStore} from '@reduxjs/toolkit'

// export const store = configureStore({}) //ye apne ander object hi leta hai, most of the cheezein yahan apne aap mein object hi legi
// //abhi tak bhi ye puri tarah se ready nhi hai



// import {configureStore} from '@reduxjs/toolkit'

// export const store = configureStore({}) //ye apne ander object hi leta hai, most of the cheezein yahan apne aap mein object hi legi
// //abhi tak bhi ye puri tarah se ready nhi hai




//store ko reducer ki knowledge chahiye
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
}) //ye apne ander object hi leta hai, most of the cheezein yahan apne aap mein object hi legi
