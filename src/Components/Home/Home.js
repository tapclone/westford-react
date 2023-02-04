import React, { useEffect } from 'react'
import Header from '../Partials/Header';
import banner from '../../images/home/home-banner.png'
import './Home.css'
import Slider from 'react-slick';
import sliderLogo from '../../images/home/westford-logo.png'
import leftArrow from '../../images/home/left-arrow-icon.svg'
import rightArrow from '../../images/home/right-arrow-icon.svg'
import courseIcon from '../../images/home/course-icon.svg'
import accreditations from '../../images/home/accreditations-icon.svg'
import partners from '../../images/home/partners-icon.svg'
import clients from '../../images/home/client-icon.svg'
import employees from '../../images/home/employees-icon.svg'
import homeLady from '../../images/home/home-lady-image.png'
import globeImg from '../../images/home/world-map.png'
import corp from '../../images/home/corp-training-bg.png'
import ucam from '../../images/home/ucam-logo.png'
import accsia from '../../images/home/acacia-logo.png'
import emirates from '../../images/home/corp-clients/emirates-nbd-logo.png'
function Home() {
    
    function CustomArrowR(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          >
            <img className="slideBtn" src={rightArrow} alt="" />
          </div>
        );
      }
      function CustomArrowL(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          >
            <img className="slideBtn" src={leftArrow} alt="" />
          </div>
        );
      }
    
    const settings={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomArrowR></CustomArrowR>,
        prevArrow: <CustomArrowL></CustomArrowL>

      };
    

    function increment() {


        const fastItems = document.querySelectorAll('.fastCount')
        const slowItems = document.querySelectorAll('.slowCount')

        fastItems.forEach((item, index) => {
            let maxCount = item.querySelector('h3').innerHTML
            let i = 0;
            var fastIntervel = setInterval(() => {
                item.querySelector('h3').innerHTML = i + '+';
                i += 1;
                if (i > maxCount) {
                    clearInterval(fastIntervel)
                }
            }, 10)
        })

        slowItems.forEach((item, index) => {
            let maxCount = item.querySelector('h3').innerHTML
            let i = 0;
            var slowIntervel = setInterval(() => {
                item.querySelector('h3').innerHTML = i;
                i += 1;
                if (i > maxCount) {
                    clearInterval(slowIntervel)
                }
            }, 100)
        })
    }
    useEffect(()=>{
        const item = document.querySelector('.aag-box')
    const observe = new IntersectionObserver((enteriez) => {
        const entryy = enteriez[0];
        if (entryy.isIntersecting) {
            increment()
            observe.unobserve(item)
        }
    })
    observe.observe(item)
    },[])


    
  
    return (
        <div className='homeSection'>

            <div class="hero" style={{background:`url(${banner})`,backgroundPosition:'center center',backgroundSize:'cover'}}>

                <div class="hero-heading">
                    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide future <br />
                        ready</p>
                </div>

            </div>



            <section class="aftr-hero" >
                <div class="aftr-hero-rec aos" data-aos="fade-right">
                    <h2>Our Institutions & <br />Universities</h2>
                    <p>Westford provides academic degrees, diploma courses and <br />
                        professional certification in partnership with accredited awarding <br />
                            organization and universities of international repute.</p>

                </div>
                <div style={{width:'52%',display:'flex',alignItems:'center',height:"inherit",justifyContent:'center'}}>
                    <div style={{width:'90%',height:'100%',display:'flex',justifyContent:'center',flexDirection:'column',position:'relative'}}>
               
                        <Slider {...settings}>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>

                            <div>
                            <img src={sliderLogo} alt="" />
                            </div>
                            
                            
                        </Slider>
                    </div>
                </div>

                {/* <div class="right-side">
                    <div class="img-scroll aos" data-aos="fade-left">
                        <img class="clogo" src="" alt="acacia-logo" />
                        <img class="clogo" src="/westfordeducation/images/home/westford-logo.png" alt="acacia-logo" />
                        <img class="clogo" src="/westfordeducation/images/home/cambridge-internl-logo.png" alt="acacia-logo" />
                        <img class="clogo" src="/westfordeducation/images/home/exceed-logo.png" alt="acacia-logo" />

                    </div>

                    <div class="next-btns">
                        <div class="left-round">
                            <img class="right-arrow" src="/westfordeducation/images/home/left-arrow-icon.svg"
                                alt="Right arrow button" />
                        </div>

                        <div class="right-round">
                            <img class="left-arrow" src="/westfordeducation/images/home/right-arrow-icon.svg"
                                alt="Left arrow button" />
                        </div>

                    </div>
                </div> */}

            </section>


           <section class="ataglance">
                <div class="glance-text">
                    <h2>At a Glance</h2>
                    <p>Westford Education Group is a leading provider of accredited international education to <br />
                        aspiring learners across the globe</p>

                </div>
                <div class="ataglancebox">
                    <div class="aag-box fastCount aos" data-aos="flip-up" data-aos-duration="1000">
                        <img src={courseIcon} alt="courses icon" />
                        <h3>250</h3>
                        <p>Courses</p>

                    </div>
                    <div class="aag-box slowCount aos" data-aos="flip-up" data-aos-duration="1000">
                        <img src={accreditations} alt="courses icon" />
                        <h3>10</h3>
                        <p>Accreditations</p>

                    </div>
                    <div class="aag-box slowCount aos" data-aos="flip-up" data-aos-duration="1000">
                        <img src={partners} alt="courses icon" />
                        <h3>30</h3>
                        <p>University Partners</p>

                    </div>
                    <div class="aag-box aos fastCount" data-aos="flip-up" data-aos-duration="1000">
                        <img src={clients} alt="courses icon" />
                        <h3>200</h3>
                        <p>Corporate Client</p>

                    </div>
                    <div class="aag-box aos fastCount" data-aos="flip-up" data-aos-duration="1000">
                        <img src={employees} alt="courses icon" />
                        <h3>500</h3>
                        <p>Employees</p>

                    </div>

                </div>

            </section>

           <section class="whorv">
                <div class="whorv-center-bg">

                    <div class="whorv-left-box">
                        <div class="left-box-txt">
                            <h2>WHO ARE WE</h2>
                            <div class="line"></div>
                            <h3>Discover our Group</h3>
                        </div>

                        <div class="left-box-img-bg" data-aos="zoom-out-down" data-aos-duration="1000">
                            <img src={homeLady} alt="" />
                        </div>

                    </div>

                    <div class="whorv-right-box">
                        <div class="right-box-text">
                            <p>Westford Education Group (WEG) is a leading provider of accredited international education and
                                corporate training to aspiring learners across the globe.
                            </p>

                            <h4>Academic and Executive education</h4>

                            <p>Westford provides academic degrees, diploma courses and professional certification in partnership
                                with accredited awarding organization and universities of international repute. We teach
                                programs ranging from undergraduate to postgraduate levels. Graduate and Masters Programs
                                including MBA and BA Honors in Business, Higher National diplomas, professional certificate
                                courses specific to domains and industries are some of the courses we offer. We also focus on UG
                                and PG courses in media and broadcasting, filmmaking, animation and gaming through our media
                                school WIFT. </p>
                        </div>

                        <button class="whorv-btn contactUs"
                            onclick="window.location.href='westfordeducation/contact-us.html';">Learn
                            More</button>

                    </div>


                </div>

            </section>


              <section class="wwsgm" >
                <div class="wwsgm-right">

                    <h2 class="aos" data-aos="zoom-in" data-aos-duration="1000">World wide <br /> student <br /> Geographic Mix <br /> (2021)</h2>
                    <p class="aos" data-aos="zoom-in" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
                        industry.</p>

                </div>
                <div className='globeDiv'>
                    <div className='globe' style={{background:`url(${globeImg})`}}>
                    <div class="asia aos globeItem" data-aos="zoom-in-right" data-aos-duration="1000" style={{top:'10%',left:'0'}}>
                            <h4>ASIA</h4>
                            <p>20%</p>
                        </div>

                        <div class="america aos globeItem" data-aos="zoom-in-up" data-aos-duration="1000" style={{bottom:'10%',left:'59%',top:'67%'}}>
                            <h4>AMERICA</h4>
                            <p>30%</p>
                        </div>

                        <div class="world aos globeItem" data-aos="zoom-in-up" data-aos-duration="1000" style={{bottom:'12%',left:'6%',top:'60%'}}>
                            <h4>REST OF <br /> THE WORLD</h4>
                            <p>30%</p>
                        </div>

                        <div class="europe aos globeItem" data-aos="zoom-in-left" data-aos-duration="1000" style={{top:'18%',right:'-5%',left:'70%'}}>
                            <h4>EUROPE <br /> MIDDLE EAST <br /> & AFRICA</h4>
                            <p>40%</p>
                        </div>
                    </div>
                </div>

                {/* <div class="wwsgm-left" >
                    <div class="wwsgm-img" style={{background:`url(${globeImg})`}}>
                        <div class="asia aos" data-aos="zoom-in-right" data-aos-duration="1000">
                            <h4>ASIA</h4>
                            <p>20%</p>
                        </div>

                        <div class="america aos" data-aos="zoom-in-up" data-aos-duration="1000">
                            <h4>AMERICA</h4>
                            <p>30%</p>
                        </div>

                        <div class="world aos" data-aos="zoom-in-up" data-aos-duration="1000">
                            <h4>REST OF <br /> THE WORLD</h4>
                            <p>30%</p>
                        </div>

                        <div class="europe aos" data-aos="zoom-in-left" data-aos-duration="1000">
                            <h4>EUROPE <br /> MIDDLE EAST <br /> & AFRICA</h4>
                            <p>40%</p>
                        </div>

                    </div>

                </div> */}


            </section>



           <section class="our-partners">
                <div class="our-partners-title">
                    <h2>OUR PARTNERS</h2>
                    <h3>Partnering for business transformation</h3>
                </div>

                <div class="our-partners-logo">

                    <div class="our-partners-logo-row1">
                        <div class="our-partner-logo">
                            <div class="top-logo">
                                <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                            </div>

                        </div>

                        <div class="our-partner-logo">
                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>Spain, UCAM Catholic <br /> University of Murcia </p>
                            </div>

                        </div>

                        <div class="our-partner-logo">
                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom, <br /> Abertay University </p>
                            </div>

                        </div>

                        <div class="our-partner-logo">
                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>Italy, Guglielmo <br /> Marconi University <br /> (GMU)</p>
                            </div>

                        </div>

                        <div class="our-partner-logo">
                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom, <br /> Liverpool John Moores <br /> University (LJMU)</p>
                            </div>

                        </div>

                    </div>

                    <div class="our-partners-logo-row2">
                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom, <br /> Gloucestershire (GLOS) </p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom <br /> University of South <br /> Wales, UK </p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>Malaysia City University, <br />Malaysia </p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom <br /> Plymouth Marjon, UK</p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>University of Vaasan, <br /> Finland </p>
                            </div>

                        </div>

                    </div>

                    <div class="our-partners-logo-row3">
                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>Cyprus, Girne <br /> American University <br /> (GUA) </p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United States Carolina <br /> University, North <br /> Carolina, USA</p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>The University of <br /> California, Los Angeles <br /> (UCLA) Extension</p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom, <br /> Canterbury Christ <br />Church University (CCCU)</p>
                            </div>

                        </div>

                        <div class="our-partner-logo">

                            <div class="top-logo">
                            <img src={ucam} alt="" />
                            </div>

                            <div class="bottom-logo">
                                <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                            </div>

                        </div>

                    </div>


                </div>

                <div class="seemore-btn ">
                    <button class="see-more-btn contactUs"
                        onclick="window.location.href='/westfordeducation/contact-us.html';">See
                        More</button>
                </div>

            </section>


           <section class="corp-training" style={{background:`url(${corp})`}}>
                <div class="overlay">
                    <h2>Corporate Training</h2>
                    <p>Westford has an important presence in the corporate training circuit through our open enrollment
                        programs, <br />
                        management development programs and training programs customized for client needs in government and
                        corporate sectors. <br />
                        We also offer comprehensive consultancy services across a wide gamut of industries and sectors.
                    </p>

                    <button class="corp-training-btn learnMore">Learn more</button>

                </div>


            </section>


             <section class="our-university">

                <div class="our-university-title">
                    <h2>Own Universities</h2>
                </div>

                <div class="our-university-logos" style={{width:'100%',padding:'0 2%'}}>
                    <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                        <img src={accsia} alt="" />
                    </div>

                    <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                    <img src={accsia} alt="" />
                    </div>

                    <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                    <img src={accsia} alt="" />
                    </div>

                    <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                    <img src={accsia} alt="" />
                    </div>

                </div>

            </section>

           {/* <section class="articles-blogs">
                <div class="article-blog-headings">
                    <h2>Our Articles and Blogs</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                        industry's standard dummy text ever since the 1500s.</p>
                </div>

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
                                        <p class="p1">Lorem Ipsum is simply dummy text of the printing and.</p>

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
                                    <a href="#" >
                                        <p class="p1">Lorem Ipsum is simply dummy text of the printing and.</p>

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


             <section class="customers-media">
                <div class="customer-media-txt">
                    <h2>Customers and media</h2>
                    <p>See some of the reviews here</p>
                </div>

                <div class="all-reviews">
                    <div class="review-row1">

                        <div class="review-individual">
                            <div class="review-date">
                                10 Jan, 2022
                            </div>
                            <div class="reviews-text">
                                <p>Westford University College achieves significant milestones in 2021 Education</p>
                            </div>

                            <div class="reviews-source">
                                <p>Corporate-news | Gulf News</p>
                            </div>

                        </div>

                        <div class="review-individual">
                            <div class="review-date">
                                10 Jan, 2022
                            </div>
                            <div class="reviews-text">
                                <p>Westford University College achieves significant milestones in 2021 Education</p>
                            </div>

                            <div class="reviews-source">
                                <p>Corporate-news | Gulf News</p>
                            </div>

                        </div>

                        <div class="review-individual">
                            <div class="review-date">
                                10 Jan, 2022
                            </div>
                            <div class="reviews-text">
                                <p>Westford University College achieves significant milestones in 2021 Education</p>
                            </div>

                            <div class="reviews-source">
                                <p>Corporate-news | Gulf News</p>
                            </div>

                        </div>

                    </div>

                    <div class="review-row2">

                        <div class="review-individual">
                            <div class="review-date">
                                10 Jan, 2022
                            </div>
                            <div class="reviews-text">
                                <p>Westford University College achieves significant milestones in 2021 Education</p>
                            </div>

                            <div class="reviews-source">
                                <p>Corporate-news | Gulf News</p>
                            </div>

                        </div>

                        <div class="review-individual">
                            <div class="review-date">
                                10 Jan, 2022
                            </div>
                            <div class="reviews-text">
                                <p>Westford University College achieves significant milestones in 2021 Education</p>
                            </div>

                            <div class="reviews-source">
                                <p>Corporate-news | Gulf News</p>
                            </div>

                        </div>

                        <div class="review-individual">
                            <div class="review-date">
                                10 Jan, 2022
                            </div>
                            <div class="reviews-text">
                                <p>Westford University College achieves significant milestones in 2021 Education</p>
                            </div>

                            <div class="reviews-source">
                                <p>Corporate-news | Gulf News</p>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section class="corporate-clients">
                <div class="corporate-client-txt">
                    <h2>Corporate Clients</h2>
                    <p>We have served clients ranging from large corporates to SME companies, <br />
                        government departments and public companies. A few are : </p>

                </div>

                <div class="corp-client-logos">
                    <div class="cc-logos-row1">
                        <div class="cc-logo aos" data-aos="flip-left">
                            <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo-empty">
                            <img src="" alt="" />
                        </div>

                    </div>

                    <div class="cc-logos-row2">

                        <div class="cc-logo-empty">
                            <img src="" alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                    </div>

                    <div class="cc-logos-row3">

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo-empty">
                            <img src="" alt="" />
                        </div>

                    </div>

                    <div class="cc-logos-row4">

                        <div class="cc-logo-empty">
                            <img src="" alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                        <div class="cc-logo aos" data-aos="flip-left">
                        <img src={emirates} alt="" />
                        </div>

                    </div>

                </div>

                <div class="cc-logo-btn contactUs" onclick="window.location.href='/westfordeducation/index.html';">
                    View More
                </div>
            </section> 







        </div>
    )
}

export default Home