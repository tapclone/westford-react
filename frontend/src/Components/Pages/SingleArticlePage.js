import React, { useEffect } from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import SingleArticle from '../SingleArticle'
import '../Partials/partials.css'


function SingleArticlePage() {
  useEffect(()=>{
    console.log('hey');
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