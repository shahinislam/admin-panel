import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

export default function Layout() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Sidebar />
                <Main />
                <Footer />
                <Rightbar />
            </div>
        </>
    )
}
