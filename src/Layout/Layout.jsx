import React from 'react'
import Footer from '../Core/Footer/Footer'
import Navbar from '../Core/Navbar/Navbar'

const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout
