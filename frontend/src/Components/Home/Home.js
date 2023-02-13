import React, { useEffect } from 'react'
import Header from '../Partials/Header';
import banner from '../../images/home/home-banner.png'
import './Home.css'
import Slider from 'react-slick';
import sliderLogo from '../../images/home/westford-logo.png'
import leftArrow from '../../images/home/left.svg'
import rightArrow from '../../images/home/right.svg'
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
import maImg1 from '../../images/media-centre/ma-img1.png'
import ArticleSection from '../ArticleSection';

function Home() {

    function CustomArrowR(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <svg className='slideBtn' style={{ width: '2rem' }} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 100 100" >
                    <g><circle class="st1" style={{ fill: 'none', stroke: "#DB3656", strokeWidth: '2' }} cx="50" cy="50" r="48.9" />
                        <path style={{ fill: 'none', stroke: '#DB3656', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' }} class="st0" d="M43.1,36.1L57,50L43.1,63.8" />
                    </g>

                </svg>
                {/* <img className="slideBtn" style={{ width: '2rem' }} src={rightArrow} alt="" /> */}
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
                <svg className='slideBtn' style={{ width: '2rem' }} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 100 100" >
                    <g>
                        <circle class="st1" style={{ fill: 'none', stroke: "#DB3656", strokeWidth: '2' }} cx="50" cy="50" r="48.9" />
                        <path style={{ fill: 'none', stroke: '#DB3656', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '10' }} class="st0" d="M57,63.8L43.1,50L57,36.1" />
                    </g>
                </svg>
                {/* <img className="slideBtn" style={{ width: '2rem' }} src={leftArrow} alt="" /> */}
            </div>
        );
    }
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint:520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }

            },
            {
                breakpoint:340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }

            }
        ]
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomArrowR></CustomArrowR>,
        prevArrow: <CustomArrowL></CustomArrowL>,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                }
            },
            {
                breakpoint: 735,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500
                }
            },
            {
                breakpoint: 535,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500
                }
            }
        ]
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
    useEffect(() => {
        const item = document.querySelector('.aag-box')
        const observe = new IntersectionObserver((enteriez) => {
            const entryy = enteriez[0];
            if (entryy.isIntersecting) {
                increment()
                observe.unobserve(item)
            }
        })
        observe.observe(item)
    }, [])




    return (
        <div className='homeSection' style={{ width: "100%", overflowX: 'hidden' }}>

            <div class="hero" style={{ background: `url(${banner})`, backgroundPosition: 'center center', backgroundSize: 'cover', height: "40rem" }}>

                <div class="hero-heading">
                    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide future <br />
                        ready</p>
                </div>

            </div>



            <section class="aftr-hero" style={{ position: 'relative' }}>
                <div class="aftr-hero-rec aos" data-aos="fade-right" style={{ height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-0.3%', zIndex: '-1' }}>
                    <div style={{ width: '83%', height: '80%', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '5% 0', paddingLeft: '3%' }}>
                        <h2 style={{ margin: '0', padding: '0', fontSize: 'clamp(1.5rem,4vw,2.5rem)', lineHeight: 'normal' }}>Our Institutions <br /> & Universities</h2>
                        <p style={{ margin: '0', padding: '0', lineHeight: '2', }}>Westford provides academic degrees, diploma courses and
                            professional certification in partnership with accredited awarding
                            organization and universities of international repute.</p>
                    </div>


                </div>
                <div className='afterHeroSlider' style={{ width: '52%', display: 'flex', alignItems: 'center', height: "inherit", justifyContent: 'end' }}>
                    <div style={{ width: '96%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>

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



            </section>
            <section>

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

            <section class="whorv" style={{ height: "fit-content", padding: "1rem 0" }}>
                <div class="whorv-center-bg" style={{ width: '85%', height: 'fit-content', padding: "3% 5%" }}>

                    <div class="whorv-left-box">
                        <div class="left-box-txt">
                            <h2 style={{ fontSize: 'clamp(1rem,3vw,1.5rem)', marginBottom: '5px' }}>WHO ARE WE</h2>
                            <div class="line" style={{ border: "0.5px solid white" }}></div>
                            <h3 style={{ fontSize: 'clamp(1.5rem,3vw,3rem)' }}>Discover our Group</h3>
                        </div>

                        <div style={{ width: "95%", minWidth: "20rem" }} class="left-box-img-bg" data-aos="zoom-out-down" data-aos-duration="1000">
                            <img src={homeLady} alt="" />
                        </div>

                    </div>

                    <div class="whorv-right-box">
                        <div class="right-box-text" >
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

                        <button style={{ marginBottom: "1.5rem" }} class="whorv-btn contactUs"
                            onclick="window.location.href='westfordeducation/contact-us.html';">Learn
                            More</button>

                    </div>


                </div>

            </section>


            <section class="wwsgm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='wwsgmSub' style={{ width: '85%', display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                    <div class="wwsgm-right">

                        <h2 class="aos" data-aos="zoom-in" data-aos-duration="1000" style={{ fontSize: 'clamp(1.5rem,3vw,4rem)', lineHeight: "normal", paddingRight: '20%', marginBottom: '0' }}>World wide student  Geographic Mix (2021)</h2>
                        <p class="aos" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the  printing and typesetting
                            industry.</p>

                    </div>
                    <div className='globeDiv' style={{ width: '60%' }}>
                        <div className='globe' style={{ background: `url(${globeImg})`, width: "100%", height: '80%', backgroundPosition: "center center", backgroundSize: 'cover' }}>
                            <div className='asiaComp comps' data-aos="zoom-in-right" data-aos-duration="1000"><p>ASIA</p><span>20%</span></div>
                            <div className='restComp1 comps' data-aos="zoom-in-up" data-aos-duration="1000"><p>REST OF <br /> THE WORLD</p><span>20%</span></div>
                            <div className='restComp2 comps' data-aos="zoom-in-up" data-aos-duration="1000"><p>REST OF <br /> THE WORLD</p><span>20%</span></div>
                            <div className='africaComp comps' data-aos="zoom-in-left" data-aos-duration="1000"><p>EUROPE, <br /> MIDDLE EAST <br /> &AFRICA</p><span>20%</span></div>
                            {/* <div class="asia aos globeItem" data-aos="zoom-in-right" data-aos-duration="1000" style={{top:'10%',left:'0'}}>
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
    </div> */}
                        </div>
                    </div>
                </div>


            </section>

            <section class="our-partners" style={{ height: 'fit-content', marginBottom: '2rem',paddingBottom:'1rem' }}>
                <div class="our-partners-title">
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 4rem)' }}>OUR PARTNERS</h2>
                    <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 3.5rem)', lineHeight: 'normal' }}>Partnering for business transformation</h3>
                </div>
                <div className='our-partner-logoDiv' style={{ width: "85%", aspectRatio: "1/0.5", display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "space-between", rowGap: "1rem" }}>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>
                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>
                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200"> 
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>

                    <div class="our-partner-logo" data-aos="flip-left" data-aos-duration="1200">
                        <div class="top-logo">
                            <img src={ucam} alt="" />
                        </div>

                        <div class="bottom-logo">
                            <p>United Kingdom, <br /> Cardiff Metropolitan <br /> University (CMU)</p>
                        </div>

                    </div>
                </div>



                <div class="seemore-btn ">
                    <button class="see-more-btn contactUs"
                        onclick="window.location.href='/westfordeducation/contact-us.html';">See
                        More</button>
                </div>

            </section>


            <section class="corp-training" style={{ background: `url(${corp})`, height: 'fit-content' }}>
                <div class="overlay" style={{ height: 'fit-content', padding: '1rem 0' }}>
                    <h2 style={{fontSize:'clamp(1.8rem,4vw,2.5rem)'}}>Corporate Training</h2>
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
                    <h2 style={{fontSize:'clamp(1.8rem,4vw,2.5rem)',marginBottom:'30px'}}>Own Universities</h2>
                </div>

                <div class="our-university-logos" style={{ width: '89%', padding: '0 2%' ,height:'fit-content'}}>
                    <div style={{ width: '100%' }}>
                        <Slider {...settings2}>
                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>


                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>

                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>

                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>

                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>

                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>

                            <div>
                                <div class="our-university-logo aos" data-aos="fade-down" data-aos-duration="1000">
                                    <img src={accsia} alt="" />
                                </div>
                            </div>

                        </Slider>
                    </div>


                </div>

            </section>

            <section class="articles-blogs">
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


            <section class="customers-media" style={{ height: 'fit-content', justifyContent: 'center',paddingBottom:'1rem' }}>
                <div class="customer-media-txt">
                    <h2 style={{fontSize:'clamp(1.5rem,4vw,2.5rem)'}}>Customers and media</h2>
                    <p>See some of the reviews here</p>
                </div>

                <div className='reviewAll'>
                    <div className='reviewCard'  data-aos="fade-down" data-aos-duration='1200'>
                        <span style={{ background: '#285F71', color: 'white', padding: '7px', marginTop: "7px" }}>10 Jan, 2022</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: "600" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <p>Corporate news/ Gulf News</p>
                    </div>
                    <div className='reviewCard' data-aos="fade-down" data-aos-duration='1200'>
                        <span style={{ background: '#285F71', color: 'white', padding: '7px', marginTop: "7px" }}>10 Jan, 2022</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: "600" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <p>Corporate news/ Gulf News</p>
                    </div>
                    <div className='reviewCard' data-aos="fade-down" data-aos-duration='1200'>
                        <span style={{ background: '#285F71', color: 'white', padding: '7px', marginTop: "7px" }}>10 Jan, 2022</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: "600" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <p>Corporate news/ Gulf News</p>
                    </div>
                    <div className='reviewCard' data-aos="fade-down" data-aos-duration='1200'>
                        <span style={{ background: '#285F71', color: 'white', padding: '7px', marginTop: "7px" }}>10 Jan, 2022</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: "600" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <p>Corporate news/ Gulf News</p>
                    </div>
                    <div className='reviewCard' data-aos="fade-down" data-aos-duration='1200'>
                        <span style={{ background: '#285F71', color: 'white', padding: '7px', marginTop: "7px" }}>10 Jan, 2022</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: "600" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <p>Corporate news/ Gulf News</p>
                    </div>
                    <div className='reviewCard' data-aos="fade-down" data-aos-duration='1200'>
                        <span style={{ background: '#285F71', color: 'white', padding: '7px', marginTop: "7px" }}>10 Jan, 2022</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: "600" }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
                        <p>Corporate news/ Gulf News</p>
                    </div>
                    
                </div>

            </section>

            <section class="corporate-clients" style={{ height: 'fit-content',paddingBottom:"10%" }}>
                <div class="corporate-client-txt">
                    <h2>Corporate Clients</h2>
                    <p>We have served clients ranging from large corporates to SME companies, <br />
                        government departments and public companies. A few are : </p>

                </div>

                <div class="corp-client-logos" style={{ width: "98%" }}>

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

                    <div class="cc-logo-empty" data-aos="flip-left">
                        <img src="" alt="" />
                    </div>

                    <div class="cc-logo-empty" data-aos="flip-left">
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

                    <div class="cc-logo-empty" data-aos="flip-left">
                        <img src="" alt="" />
                    </div>

                    <div class="cc-logo-empty" data-aos="flip-left">
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

                <div class="cc-logo-btn contactUs" onclick="window.location.href='/westfordeducation/index.html';">
                    View More
                </div>
            </section>


        </div>
    )
}

export default Home