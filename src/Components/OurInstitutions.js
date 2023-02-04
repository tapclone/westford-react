import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/our-institutions/hero-bg.png'
import westford from '../../src/images/home/westford-logo.png'
import heroImg from '../../src/images/about-us/our-institutions-lady.png'
function OurInstitutions() {
  return (
    <div>
        <div class="hero" style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}}>

<div class="hero-heading">
    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide</p>
</div>


</div>

<div class="our-institution aos" data-aos="zoom-in"  data-aos-duration="1500">
        <div class="our-institution-section1">
            <div class="our-institution-img">
                <div class="grey-bg">
                    <div class="grey-bg-outline" style={{top:'0',left:'0'}}>
                    </div>
                    <img class="our-institution-lady-img"
                        src={heroImg} alt="" />
                    <img class="zig-zag1" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />
                    <img class="zig-zag2" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />

                </div>
            </div>

            <div class="our-institution-txt">
                <h2>Our Institutions</h2>
                <img class="zig-zag3" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />
                <p>Westford operates prominent 10 independent brands – 8 in higher education, 1 brand of film studies,
                    and 1 brand in Sports Management.</p>

                <div class="our-institution-points">

                    <div class="pointer-row">
                        <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                        <p>The seven higher education entities comprise Acacia University, Arizona, US, CIQ, UK,
                            Westford University College,
                            Exeed College, Exeed ECX, Eaton Business School, Athena Global Education,
                            DeMont Institute of Management & Technology and Westford Institute of Film Technology with
                            courses
                            ranging from the undergraduate level to the doctorate level.</p>
                        <br /><br /><br /><br /><br /><br /><br />
                    </div>

                    <div class="pointer-row">
                        <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                        <p>Taito Education, a division of Exeed College provides Teacher education degree programs and
                            teacher
                            training qualifications from the university and awarding bodies based in the UK.</p>
                        <br /><br /><br /><br />
                    </div>

                    <div class="pointer-row">
                        <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                        <p>Westford Sports organizes and conducts sports activities in connection with school
                            managements and facilities</p>
                    </div>
                </div>



            </div>



        </div>

    </div>

    <div class="independent-brands">
        <div class="independent-brnd-heading">
            <h2>
                Our independent brands
            </h2>
        </div>

        <div class="brnd-blocks" style={{width:'100%'}}>
            <div class="brnd-blocks-row">
                <div class="brnd-block">
                    
                    <img src={westford} alt="" />

                    <h3>Westford University College</h3>

                    <p>Westford University College is one of the leading and prestigious business schools,
                        located in the UAE offering quality educational deliveries across undergraduate, graduate,
                        doctorate and vocational professional programs…
                    </p>

                    <h4> <a href="#">Read More</a></h4>

                </div>

                <div class="brnd-block">

                    <img src={westford} alt="" />

                    <h3>Eaton Business School</h3>

                    <p>Westford University College is one of the leading and prestigious business schools,
                        located in the UAE offering quality educational deliveries across undergraduate, graduate,
                        doctorate and vocational professional programs…
                    </p>

                    <h4> <a href="#">Read More</a></h4>

                </div>

                <div class="brnd-block">
                    <img src={westford} alt="" />

                    <h3>Exeed School of Business & Finance</h3>

                    <p>Westford University College is one of the leading and prestigious business schools,
                        located in the UAE offering quality educational deliveries across undergraduate, graduate,
                        doctorate and vocational professional programs…
                    </p>

                    <h4> <a href="#">Read More</a></h4>

                </div>
            </div>

            <div class="brnd-blocks-row">
                <div class="brnd-block">
                    <img src={westford} alt="" />

                    <h3>Westford Institute of Film Technology</h3>

                    <p>Westford University College is one of the leading and prestigious business schools,
                        located in the UAE offering quality educational deliveries across undergraduate, graduate,
                        doctorate and vocational professional programs…
                    </p>

                    <h4> <a href="#">Read More</a></h4>

                </div>

                <div class="brnd-block">
                    <img src={westford} alt="" />

                    <h3>Exeed Global Varsity</h3>

                    <p>Eaton Business School (EBS) was established in 2013 and currently has a magnified presence in UAE
                        and UK. It is accredited by the British Accreditation Council for Independent Further and Higher
                        Education. Eaton Business..
                    </p>

                    <h4> <a href="#">Read More</a></h4>

                </div>

                <div class="brnd-block">
                    <img src={westford} alt="" />

                    <h3>Taito</h3>

                    <p>Exeed College, An enterprise of Westford Education Group, was established in 2016 as a centre of
                        higher
                        education with a vision of Lifelong Learning and Continuous Professional Development. Westford
                        Education
                        Group was started…
                    </p>

                    <h4> <a href="#">Read More</a></h4>

                </div>
            </div>

        </div>

        <button class="independent-brands-btn contactUs">View More</button>

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
                        <img src="/images/home/art-sect-img3.png" alt="" />
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

export default OurInstitutions