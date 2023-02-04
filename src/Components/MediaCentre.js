import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/media-centre/hero-bg.png'
import maImg1 from '../../src/images/media-centre/ma-img1.png'
import article from '../../src/images/media-centre/main-article-img.png'
function MediaCentre() {
  return (
    <div>
         <div class="hero" style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}}>

<div class="hero-heading">
    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide</p>
</div>


</div>

<section class="media-cntr-sec1 aos" data-aos="zoom-in" data-aos-duration="1500">
        <div class="media-cntr-sec1-headings">
            <h2>Article and Blogs</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        {/* <div class="main-article-box">
            <div class="main-article-left" style={{width:'100%',height:'100%'}}>
                <div class="ma-lft-img" style={{width:'100%',height:'100%'}}>
                    <img src={article} alt="" />
                </div>
                <div class="ma-overlay" style={{width:'100%',height:'100%'}}></div>

            </div>

            <div class="main-article-right">
                <h1>Why DBA’s from European Universities are higher in demand in Africa?</h1>
                <p>When a crisis happens and times are tough it can be easy to lose focus on the
                    importance of supporting and growing a strong </p>
                <button onclick="window.location.href='/westfordeducation/article-one.html';">Read More</button>
            </div>

        </div> */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',aspectRatio:'1/0.4',width:'100%',marginTop:'5%'}}>
            <div style={{width:'90%',display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'40%',height:'100%', borderRadius:"20px",   background: 'linear-gradient(360deg, #1F1F1F 0%, rgba(31, 31, 31, 0) 85.5%)'}}>
                    <img style={{width:'100%',mixBlendMode:'multiply',borderRadius:'inherit'}} src={article} alt="" />
                </div>
                <div style={{width:'40%',height:'100%'}}>
                    <h1>Why DBA’s from European Universities are higher in demand in Africa?</h1>
                    <p>When a crisis happens and times are tough it can be easy to lose focus on the
                    importance of supporting and growing a strong </p>
                    <button style={{padding:'5px 10px ',color:'white',background:'#DB3656',outline:'none',border:'none'}} onclick="window.location.href='/westfordeducation/article-one.html';">Read More</button>
                </div>
            </div>
        </div>


    </section>

    {/* <section class="articles-blogs">

        <div class="slide-container swiper">
            <div class="slide-content">
                <div class="card-wrapper swiper-wrapper">

                    <div class="card swiper-slide">
                        <img src="/westfordeducation/images/home/art-sect-img1.png" alt="" />
                        <div class="swipe-overlay">
                            <img src="/westfordeducation/images/home/art-sect-img-overlay.png" alt="" />
                        </div>
                        <div class="slider-top-btn">Marketing</div>
                        <div class="slider-text">
                            <a href="#">
                                <p class="p1" onclick="window.location.href='/westfordeducation/article-one.html';">
                                    Lorem Ipsum is simply dummy text of the printing and.</p>

                            </a>

                            <p class="p2">Nov 29 . 10 Min Read</p>
                        </div>
                    </div>

                    <div class="card swiper-slide">
                        <img src="/westfordeducation/images/home/art-sect-img2.png" alt="" />
                        <div class="swipe-overlay">
                            <img src="/westfordeducation/images/home/art-sect-img-overlay.png" alt="" />
                        </div>

                        <div class="slider-top-btn">Marketing</div>
                        <div class="slider-text">
                            <a href="#">
                                <p class="p1" onclick="window.location.href='/westfordeducation/article-one.html';">
                                    Lorem Ipsum is simply dummy text of the printing and.</p>

                            </a>

                            <p class="p2">Nov 29 . 10 Min Read</p>
                        </div>
                    </div>

                    <div class="card swiper-slide">
                        <img src="/westfordeducation/images/home/art-sect-img3.png" alt="" />
                        <div class="swipe-overlay">
                            <img src="/westfordeducation/images/home/art-sect-img-overlay.png" alt="" />
                        </div>

                        <div class="slider-top-btn">Marketing</div>
                        <div class="slider-text">
                            <a href="#">
                                <p class="p1" onclick="window.location.href='/westfordeducation/article-one.html';">
                                    Lorem Ipsum is simply dummy text of the printing and.</p>

                            </a>

                            <p class="p2">Nov 29 . 10 Min Read</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-pagination"></div>

        </div>

        <div class="article-blog-btn contactUs" onclick="window.location.href='/westfordeducation/media-centre.html';">
            View More
        </div>


    </section> */}

    <section class="more-articles">
        <div class="ma-headings">
            <h2>News and Events</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div class="ma-list">
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
            </div>

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
            </div>
        </div>

        <div class="ma-btn contactUs" onclick="window.location.href='/westfordeducation/article-one.html';">View More</div>
    </section>


    </div>
  )
}

export default MediaCentre