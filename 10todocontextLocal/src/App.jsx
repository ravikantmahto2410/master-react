import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  //jo bhi todos hamare paas contexts se aaynege , kahin na kahin isko store rakhna to padega store rakh ke UI change ho rha so we use useState
  const [todos, setTodos] = useState([]) //by default empty array rakhunga kyonki empty arrray nhi rakhunga to null hoga problem hogi to atleast loop lag rha hai aur ek bhi value nhi hai to pata lag jaayega  //yahan todo form se aa rhi hai

  //functionalities add kar rhe hai
  const addTodo= (todo) => { //note yahan addTodo ka naam same as it is rakhna hai tabhi uske ander wo functionalities jaayegi 
    // setTodos(todo)   //agar iss tarah se um pass karnege to purani saari todos gayab ho jaayegi aur dsirf ek nayi value set ho Jaayegi
    setTodos((prev) => [{id: Date.now(), ...todo},...prev] )
  }



  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id) )    //delete ke case mein .map loop achha option nhi hai yahan filter method is good
  
  }

  const toggleComplete = (id) => {
    // setTodos((prev) => )      setTodos ek array hai aur array ke har prev state ka mujhe access chahiye so iss tarah humein prevAccess mil gaya hai

    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo ))
  }

  useEffect(() => {
    // localStorage.getItem("todos") //todos is the name of key //set karne time humein batana padta hai ki key kya rakhoge aur value kya rakhoge , aur get karne time bas ss key ka naam rakho aur value mil jaati hai   ////////localstorgae mein saari ki saari vallue hoti hai string mein 
    const todos = JSON.parse(localStorage.getItem("todos"))   // so humein loclastorage mein rakhi value iss tarah se laate hai

    //ab values ko set karni hai agar values hai to
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])
  //Note we can use multiple useEffect
  //ek kaam aur hai local storage ka ki jaise hi ye values todos mein add ho rhi hai mein uss value ko localStorage mein add karwana chahta hun, 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> {/*now dhyaan ye rakho ki todos ek property hai to value aa rhi hai, aur addTodo, updatedTodo, deleteTodo, toggleComplete ye saare methods hai to to methods aa rhe hai */}
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/> 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}

                  {todos.map((todo) => (
                    <div
                      className='w-full'
                      key={todo.id}
                    >
                    <TodoItem todo = {todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
