import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/our-partners/hero-bg.png'
import DEAC from '../../src/images/our-partners/DEAC-logo.png'
import heroImg from '../../src/images/our-partners/hand-shake.png'
import zigzag from '../../src/images/about-us/zig-zag.png'
function OurPartner() {
  return (
    <div style={{width:'100%',overflowX:'hidden'}}>
      <div class="hero" style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}}>

<div class="hero-heading">
    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide.</p>
</div>


</div>



    <div class="our-institution aos" data-aos="zoom-in"  data-aos-duration="1500" style={{height:'fit-content',padding:'5rem 0'}}>
        <div class="our-institution-section1" style={{width:"100%",columnGap:'3rem'}}>
            <div class="our-institution-img">
                <div class="grey-bg" style={{width:'90%'}}>
                    <div class="grey-bg-outline" style={{width:'100%'}}>
                    </div>
                    <img class="heroSecImg our-partnersImg "
                        src={heroImg} alt="" />
                    <img class="zig-zag1" src={zigzag} alt="" />
                    <img class="zig-zag2" src={zigzag} alt="" />

                </div>
            </div>

            {/* <div class="our-institution-txt" style={{width:'58%'}}>
                <h2>Our Institutions</h2>
                <img class="zig-zag3" src={zigzag} alt="" />
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

            </div> */}






            <div className='heroSecText' style={{width:"53%",height:'100%',padding:'0 1rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:"center"}}>
                <h2 style={{fontSize:"2.5rem"}}>Our Partners</h2>
                <img className='zigzag3' style={{height:'20px'}} src={zigzag} alt="" />
                </div>
                <p>Westford Education Group (WEG) is a leading provider of accredited international education and
                    corporate training to aspiring learners across the globe. <br /> <br />
                    Westford provides academic degrees and diplomas, professional certificate and diploma courses in
                    partnership
                    with fully accredited and reputed international awarding organizations and universities. Our taught
                    programs
                    range from Undergraduate level to Post Graduate level including Master’s Degrees and Post Graduate
                    Diplomas
                    including Master of Business Administration (MBA) and Extended Diploma; Graduate Programs including
                    BA Honours
                    in Business, Higher National Diplomas; Professional Certificate courses in industry and domain
                    specific subject
                    areas. Through our media school WIFT, we offer a broad portfolio of PG/UG programs in Film Making,
                    Media and
                    Broadcasting , Animation, Multimedia and Gaming.</p>
            </div>

        </div>

    </div>

    {/* <div class="partners-logo-display">

        <div class="logo-display-sec1">
            <div class="logo-display-txt">
                Westford takes pride in its partnerships with reputed universities from the UK , USA ,
                Italy, Spain, Cyprus, Malaysia and awarding organizations from the UK.
            </div>

            <div class="logo-display-tabs">
                <div class="logo-display-tab">All</div>
                <div class="logo-display-tab">America</div>
                <div class="logo-display-tab">Europe</div>
                <div class="logo-display-tab">Spain</div>
            </div>

        </div>

        <div class="logo-display-sec2" style={{width:"100%"}}>
            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                    <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>

            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>

            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>

            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1500">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>



        </div>

    </div> */}


        
    </div>
  )
}

export default OurPartner