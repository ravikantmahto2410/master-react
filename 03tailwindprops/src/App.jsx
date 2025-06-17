// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/card'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
//        <Card channel="Chai Aur Code"/>  {/* Jo bhi value hum yahan se pass kar denge whai value props mein Card.jsx mein show ho jaayegi*/}
//       <Card/>
      
//     </>
//   )
// }

// export default App


////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     username : "Ravi",
//     age: 24
//   }

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
//        <Card channel="Chai Aur Code" someObj = {myObj}/>  {/* Jo bhi value hum yahan se pass kar denge whai value props mein Card.jsx mein show ho jaayegi*/}
//       <Card/>
      
//     </>
//   )
// }

// export default App


////////////////////////////////Can we passs array as props
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     username : "Ravi",
//     age: 24
//   }

//   let newArr = [1, 2, 3]

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
//        <Card channel="Chai Aur Code" someObj = {newArr} />  {/* Jo bhi value hum yahan se pass kar denge whai value props mein Card.jsx mein show ho jaayegi*/}
//       <Card/>
      
//     </>
//   )
// }

// export default App

////////////////////Now we understood the mein ek component se dusre component mein value pass kar sakta hun aur agar uss value ko agar mujhe receive karna  hai to card ke andar jab bhi mein ye function declare kar hra hun card iske ander mujhe props ka access hota hai , react iska props bolta hai
//lekin iska aur ek syntax hota hai , original syntax yahi hai


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     username : "Ravi",
//     age: 24
//   }

//   let newArr = [1, 2, 3]

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
//        <Card username="Chai Aur Code" btnText="Click me"/>  {/* Jo bhi value hum yahan se pass kar denge whai value props mein Card.jsx mein show ho jaayegi*/}
//       <Card username="Aakash" btnText="Visit me"/>
      
//     </>
//   )
// }

// export default App




////////////////////what happens when we dont pass a prop    code -03
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Ravi",
    age: 24
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Chai Aur Code" btnText="Click me"/>  {/* Jo bhi value hum yahan se pass kar denge whai value props mein Card.jsx mein show ho jaayegi*/}
      <Card username="Aakash" />
      <Card username="Prerna"  Post="Content Creator"/>
      <Card username="Abhinav" />
      
    </>
  )
}

export default App

