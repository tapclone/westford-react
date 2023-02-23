import React, { useEffect } from 'react'
import OurInstitutions from '../OurInstitutions'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function OurInstitutionsPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <OurInstitutions></OurInstitutions>
        <Footer></Footer>
    </div>
  )
}

export default OurInstitutionsPage