// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'


// //if App is a function then can we declare this function here itself
// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )





// Next concept , that is to understand can we declare a function here itself
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'


// //if App is a function then can we declare this function here itself
// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyApp />
//   </StrictMode>,
// )

//Can we write reactElement like this

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'


// //if App is a function then can we declare this function here itself
// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
// }

// const ReactElement = { //since hum react use nhi kar rhe hai isliye jisko bhi hamari library use karni hai usko aise hi har ek element issi tarah likhna padega
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

// createRoot(document.getElementById('root')).render(

//   anotherElement
  
// )


///////////Now we will create element according to react

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
// }

// const reactElement = React.createElement(
//   'a',    //first parameter that is expected is tag
//   {href: 'https://google.com', target: '_blank'},      //second parameter that is expected is object, this object adds properties
//   'click me to visit google'
// )

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(

//   reactElement
  
// )


 ///////How we can inject variables
 
import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',    //first parameter that is expected is tag
  {href: 'https://google.com', target: '_blank'},      //second parameter that is expected is object, this object adds properties
  'click me to visit google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
  
)


