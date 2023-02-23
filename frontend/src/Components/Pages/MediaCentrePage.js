import React, { useEffect } from 'react'
import MediaCentre from '../MediaCentre'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

function MediaCentrePage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <MediaCentre></MediaCentre>
        <Footer></Footer>
    </div>
  )
}

export default MediaCentrePage