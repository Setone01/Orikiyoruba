import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className=" max-w-screen  min-h-screen flex flex-col overflow-x-hidden ">
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
</div>
  )
}

export default Layout