import React, { useEffect } from 'react'
import ContactUs from '../ContactUs'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function ContactUsPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
  )
}

export default ContactUsPage