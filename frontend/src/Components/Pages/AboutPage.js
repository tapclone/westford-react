import React, { useEffect } from 'react'
import About from '../About'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function AboutPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <About></About>
        <Footer></Footer>
    </div> 
  ) 
}

export default AboutPage