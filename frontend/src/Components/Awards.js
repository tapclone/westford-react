import React, { useEffect, useState } from 'react'
import banner from '../../src/images/awards/hero-bg.png'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import award from '../../src/images/awards/award1.png'
import heroImg from '../../src/images/awards/trophy.png'
import zigzag from '../../src/images/about-us/zig-zag.png'
import axios from 'axios'
function Awards() {
    const [awards,setAwards]=useState([])
    useEffect(() => {
        (async function () {
          try {
            const { data } = await axios.get("/api/admin/view-all-awards");
            setAwards(data)
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);
  return (
    <div style={{width:'100%',overflowX:'hidden'}}>
        <div class="hero" style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}} >

<div class="hero-heading">
    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide</p>
</div>
{/* <div class="abt-hero-overlay"></div> */}

</div>

<div class="abt-westford aos" data-aos="zoom-in" data-aos-duration="1500" style={{height:'fit-content'}}>
<div class="our-institution-section1" style={{ width: "100%", columnGap: '3rem', paddingTop: '5rem' }}>

<div class="our-institution-img">
    <div class="grey-bg" style={{ width: '90%' }}>
        <div class="grey-bg-outline" style={{ width: '100%' }}>
        </div>
        <img class="heroSecImg our-institution-lady-img"
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






<div className='heroSecText' style={{ width: "53%", height: '100%', padding: '0 1rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
        <h2 style={{ fontSize: "2.5rem" }}>Awards And Accolades</h2>
        <img className='zigzag3' style={{ height: '20px' }} src={zigzag} alt="" />
    </div>
    <p >Westford education group entities bagged many awards and recognition in past
                    years as an evidence of our commitment to the quality and community development.
                    These international awards are a reflection of our values and the dedication of
                    our team that always compete to provide the best for our students and their communities. <br /> <br />
                    Our wonderful students, faculty and staff have helped us earn awards and accolades.
                    We are proud to be consistently recognized </p>
</div>

</div>
        

    </div>

     <div class="all-trophies" style={{height:'fit-content'}}>

        <div class="all-trophy-heading" >
            <p>Westford education group entities bagged many awards and recognition in past years as an evidence of
                our commitment to the quality and community development.These international awards are the reflection
                of our values and the dedication of our staffs who always compete to provide the best for our students.
            </p>
        </div>

        <div class="trophy-display" style={{width:'95%',height:'fit-content'}}>
            <div class="trophy-display-row" style={{flexWrap:'wrap',height:'fit-content',rowGap:'1rem',alignItems:'center',justifyContent:'center',columnGap:'1rem'}}>
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

export default Awards