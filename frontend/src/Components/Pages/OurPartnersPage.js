import React, { useEffect } from 'react'
import OurPartner from '../OurPartner'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function OurPartnersPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <OurPartner></OurPartner>
        <Footer></Footer>
    </div>
  )
}

export default OurPartnersPage