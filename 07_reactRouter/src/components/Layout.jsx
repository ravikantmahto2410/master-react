import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { Outlet } from 'react-router-dom'   //ye outlet layout<Header/> aur <Footer/>ko as a base use kar lega  aur iske beecg jo kuch bhhi aayegiwo same rakhega 

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>    
        <Footer/>
        {/* Aise karne se kyka hoga Header same rahega footer same rahega iske ander ki outlet change hoti rahegi */}
    </>
  )
}

export default Layout