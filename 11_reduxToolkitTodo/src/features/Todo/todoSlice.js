import { createSlice,nanoid  } from "@reduxjs/toolkit";

const initialState = {  //store ke ander sabse important cheez hoti hai initialState ki store starting mein kaisa dikhega empty hoga , koi value hogi uske ander ya database se koi data fetch karke wahan aayegi
    //initial state kuch bhi ho sakti hai , ye totally hamare upar depend karti hai , array bhi ho sakti hai aur object bhi ho sakti hai

    todos: [{id: 1, text: "Hello World"}]
}

