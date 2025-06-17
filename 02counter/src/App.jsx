// import { useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let [counter, setCounter] = useState(15)  // the value at 0th index(counter), the name of variable ,it can be anything, the second name setCounter is not a value its a function ,     //in useState(15) 15 default value hai , humlog kuch bhi rakh skate hai like empty '', , true, false
//    //setCounter ek method jo control karega counter variable ko, counter variable ko jab bhi update karna hai , to uske liye responsible hoga setCounter function

//   const addValue = () => {
//     counter = counter + 1
//     console.log("clicked",counter)
//     setCounter(counter)
//   }
//   return (
//     <>
//       <h1>Chai Aur React</h1>
//       <h2>Counter Value : {counter} </h2>
//       <button
//         onClick={addValue}
//       >Add Value {counter}</button>
//       <br/>
//       <button>Remove Value {counter}</button>
//       <p>Footer : {counter}</p>
//     </>
//   )
// }

// export default App


//another Way
import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, chaiCounter] = useState(0)  // the value at 0th index(counter), the name of variable ,it can be anything, the second name setCounter is not a value its a function ,     //in useState(15) 15 default value hai , humlog kuch bhi rakh skate hai like empty '', , true, false
   //setCounter ek method jo control karega counter variable ko, counter variable ko jab bhi update karna hai , to uske liye responsible hoga setCounter function

  const addValue = () => {
    if(counter >=20 ) return
    chaiCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter <= 0) return
    chaiCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
        onClick={removeValue} //removeValue is a function
      >Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
