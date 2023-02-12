import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/media-centre/hero-bg.png'
import maImg1 from '../../src/images/media-centre/ma-img1.png'
import article from '../../src/images/media-centre/main-article-img.png'

import ArticleSection from './ArticleSection'
function MediaCentre() {
  return (
    <div style={{width:'100%',overflowX:'hidden'}}>
         <div class="hero" style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}}>

<div class="hero-heading">
    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide</p>
</div>


</div>

<section class="media-cntr-sec1 aos" data-aos="zoom-in" data-aos-duration="1500">
        <div class="media-cntr-sec1-headings">
            <h2 style={{fontSize:'clamp(2rem,3vw,3rem)'}}>Article and Blogs</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center',aspectRatio:'1/0.4',width:'100%'}}>
            <div className='mediaCentreTop' style={{width:'90%',display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'40%',minWidth:"22rem",height:'100%', borderRadius:"20px",   background: 'linear-gradient(360deg, #1F1F1F 0%, rgba(31, 31, 31, 0) 85.5%)'}}>
                    <img style={{width:'100%',mixBlendMode:'multiply',borderRadius:'inherit'}} src={article} alt="" />
                </div>
                <div className='mediaCentreTop2' style={{width:'40%',height:'100%'}}>
                    <h1>Why DBA’s from European Universities are higher in demand in Africa?</h1>
                    <p>When a crisis happens and times are tough it can be easy to lose focus on the
                    importance of supporting and growing a strong </p>
                    <button style={{padding:'5px 10px ',color:'white',background:'#DB3656',outline:'none',border:'none'}} onclick="window.location.href='/westfordeducation/article-one.html';">Read More</button>
                </div>
            </div>
        </div>


    </section>
    <ArticleSection></ArticleSection>

    

    <section class="more-articles" style={{height:'fit-content'}}>
        <div class="ma-headings">
            <h2>News and Events</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className='newsAndArticles'>
            <div className='rowNews'>
            <div className='newsCard' style={{width:'33rem',height:'fit-content',display:'flex',border:'1px solid #CCCCCC',borderRadius:'20px'}}>
                    <div  style={{width:'40%',backgroundPosition:"center",backgroundSize:"cover"}}>
                    <img className='newsCardImg' style={{width:'100%'}} src={maImg1} alt="" />
                    </div>
                    <div style={{width:'60%',height:'100%',display:'flex',flexDirection:'column',alignItems:"stretch",padding:'0 1rem'}}>
                        <h3 style={{fontWeight:'normal'}}>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...</p>
                        <span style={{color:'red',textDecoration:'underline'}}>Read More</span>
                    </div>
                </div>
                <div className='newsCard' style={{width:'33rem',height:'fit-content',display:'flex',border:'1px solid #CCCCCC',borderRadius:'20px'}}>
                    <div style={{width:'40%',backgroundPosition:"center",backgroundSize:"cover"}}>
                    <img className='newsCardImg' style={{width:'100%'}} src={maImg1} alt="" />
                    </div>
                    <div style={{width:'60%',height:'100%',display:'flex',flexDirection:'column',alignItems:"stretch",padding:'0 1rem'}}>
                        <h3 style={{fontWeight:'normal'}}>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...</p>
                        <span style={{color:'red',textDecoration:'underline'}}>Read More</span>
                    </div>
                </div>
                <div className='newsCard' style={{width:'33rem',height:'fit-content',display:'flex',border:'1px solid #CCCCCC',borderRadius:'20px'}}>
                    <div style={{width:'40%',backgroundPosition:"center",backgroundSize:"cover"}}>
                    <img className='newsCardImg' style={{width:'100%'}} src={maImg1} alt="" />
                    </div>
                    <div style={{width:'60%',height:'100%',display:'flex',flexDirection:'column',alignItems:"stretch",padding:'0 1rem'}}>
                        <h3 style={{fontWeight:'normal'}}>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...</p>
                        <span style={{color:'red',textDecoration:'underline'}}>Read More</span>
                    </div>
                </div>
                <div className='newsCard' style={{width:'33rem',height:'fit-content',display:'flex',border:'1px solid #CCCCCC',borderRadius:'20px'}}>
                    <div style={{width:'40%',backgroundPosition:"center",backgroundSize:"cover"}}>
                        <img className='newsCardImg' style={{width:'100%'}} src={maImg1} alt="" />
                    </div>
                    <div style={{width:'60%',height:'100%',display:'flex',flexDirection:'column',alignItems:"stretch",padding:'0 1rem'}}>
                        <h3 style={{fontWeight:'normal'}}>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...</p>
                        <span style={{color:'red',textDecoration:'underline'}}>Read More</span>
                    </div>
                </div>

                
            </div>
        </div>

        {/* <div class="ma-list">
            <div class="ma-list-row" style={{columnGap:'1rem'}}>
                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>

                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>

                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>

                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>
            </div>
        </div> */}

        <div class="ma-btn contactUs" onclick="window.location.href='/westfordeducation/article-one.html';">View More</div>
    </section>


    </div>
  )
}

export default MediaCentre