import React, { useEffect } from 'react'
import Awards from '../Awards'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function AwardPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <Awards></Awards>
        <Footer></Footer>
    </div>
  )
}

export default AwardPage