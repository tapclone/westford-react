import React from 'react'
import banner from '../../src/images/awards/hero-bg.png'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import award from '../../src/images/awards/award1.png'
import heroImg from '../../src/images/awards/trophy.png'
function Awards() {
  return (
    <div>
        <div class="hero" style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}} >

<div class="hero-heading">
    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide</p>
</div>
{/* <div class="abt-hero-overlay"></div> */}

</div>

<div class="abt-westford aos" data-aos="zoom-in" data-aos-duration="1500">
        <div class="abt-wf-section1">
            <div class="abt-wf-img">
                <div class="grey-bg">
                    <div class="grey-bg-outline" style={{top:"0",left:'0'}}>
                    </div>
                    <img class="abt-wf-lady-img" src={heroImg} alt="" />
                    <img class="zig-zag1" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />
                    <img class="zig-zag2" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />

                </div>




            </div>

            <div class="abt-wf-txt" style={{marginTop:'15%'}}>
                <h2>Awards & Accolades</h2>
                <img class="zig-zag3" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />
                <p style={{width:'100%'}}>Westford education group entities bagged many awards and recognition in past
                    years as an evidence of our commitment to the quality and community development.
                    These international awards are a reflection of our values and the dedication of
                    our team that always compete to provide the best for our students and their communities. <br /> <br />
                    Our wonderful students, faculty and staff have helped us earn awards and accolades.
                    We are proud to be consistently recognized <br /> <br />
                    </p>
            </div>

        </div>

    </div>

    <div class="all-trophies">

        <div class="all-trophy-heading">
            <p>Westford education group entities bagged many awards and recognition in past years as an evidence of
                our commitment to the quality and community development.These international awards are the reflection
                of our values and the dedication of our staffs who always compete to provide the best for our students.
            </p>
        </div>

        <div class="trophy-display" style={{width:'95%'}}>
            <div class="trophy-display-row">
                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                    <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>

                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>

                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>

                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>
            </div>

            <div class="trophy-display-row tdr-hid">
                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>

                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>

                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>

                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                <img src={award} alt="" />
                    <div class="single-trophy-txt">
                        <h3>Winner Of Forbes</h3>
                        <p>HIGHER EDUCATION AWARD -2019 WESTFORD UNIVERSITY COLLEGE</p>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <section class="articles-blogs">
        <div class="article-blog-headings">
            <h2>Our Articles and Blogs</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s.</p>
        </div>

        {/* <div class="slide-container swiper">
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
                                <p class="p1">Lorem Ipsum is simply dummy text of the printing and.</p>

                            </a>

                            <p class="p2">Nov 29 . 10 Min Read</p>
                        </div>
                    </div>

                    <div class="card swiper-slide">
                        <img src="/images/home/art-sect-img2.png" alt="" />
                        <div class="swipe-overlay">
                            <img src="/westfordeducation/images/home/art-sect-img-overlay.png" alt="" />
                        </div>

                        <div class="slider-top-btn">Marketing</div>
                        <div class="slider-text">
                            <a href="#">
                                <p class="p1">Lorem Ipsum is simply dummy text of the printing and.</p>

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
                                <p class="p1">Lorem Ipsum is simply dummy text of the printing and.</p>

                            </a>

                            <p class="p2">Nov 29 . 10 Min Read</p>
                        </div>
                    </div>
                </div>




            </div>

            <div class="swiper-pagination"></div>

        </div> */}




    </section>



    </div>
  )
}

export default Awards