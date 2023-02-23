import React, { useEffect } from 'react'
import Home from '../Home/Home'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
        
    </div>
  )
}

export default HomePage