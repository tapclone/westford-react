import React, { useEffect } from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import SingleArticle from '../SingleArticle'


function SingleArticlePage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
        <Header></Header>
        <SingleArticle></SingleArticle>
        <Footer></Footer>
    </div>
  )
}

export default SingleArticlePage