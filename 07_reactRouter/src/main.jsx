// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/ContactUs/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children : [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])  // router banate hai ..createBrowserRouter() ek method hai jo rect-router dom se aata hai, ye ek method hai jiske ander array hai. 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <RouterProvider router={router}/>                {/* ye RouterProvider ek prop leta hai aur jab tak ye prop nhhi leta hai tab tak kaam nhi karta hai*/}
//   </StrictMode>,
// )


//////////////////////////////////////Method 2 for routing
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = 'about' element={<About/>}>
        <Route path='ravi'/>
      </Route>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path = 'user/:userid' element={<User/>}/> 
      <Route 
        loader={githubInfoLoader}    
        path = 'github' 
        element={<Github/>}

      />  
    </Route>
  )
)  // router banate hai ..createBrowserRouter() ek method hai jo rect-router dom se aata hai, ye ek method hai jiske ander array hai. 

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>                {/* ye RouterProvider ek prop leta hai aur jab tak ye prop nhhi leta hai tab tak kaam nhi karta hai*/}
  </StrictMode>,
)



