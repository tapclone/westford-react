import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/our-institutions/hero-bg.png'
import westford from '../../src/images/home/westford-logo.png'
import heroImg from '../../src/images/about-us/our-institutions-lady.png'
import zigzag from '../../src/images/about-us/zig-zag.png'
import zigzagBlue from '../../src/images/about-us/zigzag-blue.png'

import './About.css'
import ArticleSection from './ArticleSection'
function OurInstitutions() {
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <div class="hero" style={{ backgroundImage: `url(${banner}),url(${bannerOverLay})`, backgroundPosition: "center center", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundBlendMode: 'multiply' }}>

                <div class="hero-heading">
                    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide</p>
                </div>


            </div>

            <div className='startingContent' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5rem' ,paddingBottom:'2rem'}}>
                <div className='startingContentContainer' style={{ width: '90%', display: 'flex' }}>
                    <div className='startingContentImg' style={{ width: '40%', aspectRatio: "1/1", position: 'relative', minWidth: '25rem' }}>
                        <div className='backgroundLayer' style={{ width: '90%', aspectRatio: '1/1', background: "#F0F0F0", borderRadius: '10%', position: 'absolute' }}>
                            <img src={zigzag} className='zigZag1' alt="" />
                            <img src={zigzag} className='zigZag2' alt="" />
                        </div>
                        <div className='borderLayer' style={{ width: '90%', aspectRatio: '1/1', border: '3px solid #285F71', borderRadius: "10%", position: 'absolute' }}>
                            <img className='heroImgStartingSec' style={{top:'47%',left:'62%',width:'107%'}}  src={heroImg} alt="" />
                        </div>



                    </div>
                    <div className='startingContentText' style={{ width: '60%', display: 'flex', alignItems: 'start', justifyContent: 'end',position:'relative' }}>
                        <div style={{ width: '93%' }}>
                            <h2 style={{ marginTop: "0", fontSize: "clamp(1.5rem,3vw,3rem)", color: ' #303030', fontWeight: "600", marginBottom: '10px' }}>Our Institutions</h2>
                            <p style={{ textAlign: 'justify', fontSize: '0.9rem', lineHeight: '23px', marginBottom: "0" }}>Westford operates prominent 10 independent brands – 8 in higher education, 1 brand of film studies, and 1 brand in Sports Management.</p>
                            <ul className='institutionList'>
                            
                                <li>The seven higher education entities comprise Acacia University, Arizona, US, CIQ, UK, Westford University College, Exeed College, Exeed ECX, Eaton Business School, Athena Global Education, DeMont Institute of Management & Technology and Westford Institute of Film Technology with courses ranging from the undergraduate level to the doctorate level.</li>
                                <li>Taito Education, a division of Exeed College provides Teacher education degree programs and teacher training qualifications from the university and awarding bodies based in the UK.</li>
                                <li>Westford Sports organizes and conducts sports activities in connection with school managements and facilities.</li>
                            </ul>
                        </div>
                        <img className='zigzagBlue' style={{width:'5rem',top:'0',right:'0',position:'absolute'}} src={zigzagBlue} alt="" />

                    </div>

                </div>

            </div>

            <div class="independent-brands" style={{ height: 'fit-content' ,paddingBottom:'3rem'}}>
                <div class="independent-brnd-heading">
                    <h2 style={{ fontSize: "clamp(1.5rem,3vw,3rem)" }}>
                        Our independent brands
                    </h2>
                </div>

                <div class="brnd-blocks" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: "fit-content" }}>
                    <div style={{ width: '90%', display: 'flex', flexWrap: "wrap", columnGap: '1rem', rowGap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
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

                            <h3>Westford University College</h3>

                            <p>Westford University College is one of the leading and prestigious business schools,
                                located in the UAE offering quality educational deliveries across undergraduate, graduate,
                                doctorate and vocational professional programs…
                            </p>

                            <h4> <a href="#">Read More</a></h4>

                        </div>
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

                            <h3>Westford University College</h3>

                            <p>Westford University College is one of the leading and prestigious business schools,
                                located in the UAE offering quality educational deliveries across undergraduate, graduate,
                                doctorate and vocational professional programs…
                            </p>

                            <h4> <a href="#">Read More</a></h4>

                        </div>
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

                            <h3>Westford University College</h3>

                            <p>Westford University College is one of the leading and prestigious business schools,
                                located in the UAE offering quality educational deliveries across undergraduate, graduate,
                                doctorate and vocational professional programs…
                            </p>

                            <h4> <a href="#">Read More</a></h4>

                        </div>
                    </div>

                </div>

                <button class="independent-brands-btn contactUs">View More</button>

            </div>
            <section class="articles-blogs" style={{background:'white',paddingBottom:'5%'}}>
                <div class="article-blog-headings">
                    <h2>Our Articles and Blogs</h2>
                    <p style={{paddingBottom:'1rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                        industry's standard dummy text ever since the 1500s.</p>
                </div>
                <ArticleSection></ArticleSection>

                <div class="article-blog-btn contactUs" onclick="window.location.href='/westfordeducation/media-centre.html';">
                    View More
                </div>


            </section>
            

            {/* <section class="articles-blogs">
        <div class="article-blog-headings">
            <h2>Our Articles and Blogs</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s.</p>
        </div>

       




    </section> */}


        </div>
    )
}

export default OurInstitutions