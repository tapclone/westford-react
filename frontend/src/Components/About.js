import React from 'react'
import banner from '../../src/images/about-us/about-hero-image.png'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import heroImg from '../../src/images/about-us/abt-westford-lady.png'
import person1 from '../../src/images/about-us/firoz.png'
import person2 from '../../src/images/about-us/samras.png'
import person3 from '../../src/images/about-us/hanil.png'
import person4 from '../../src/images/about-us/firoz.png'
import person5 from '../../src/images/about-us/ahluwalia.png'
import person6 from '../../src/images/about-us/ali.png'
import zigzag from '../../src/images/about-us/zig-zag.png'


function About() {
    return (
        <div style={{width:'100%',overflowX:'hidden'}}>
            <div class="hero" style={{ backgroundImage: `url(${banner}),url(${bannerOverLay})`, backgroundPosition: "center center", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundBlendMode: 'multiply' }}>
                {/* <div style={{width:'100%',height:'100%',backgroundColor:'blue',position:'absolute',top:'0',left:'0'}}></div> */}

                <div class="hero-heading">
                    <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">Making students <br /> worldwide <br /> future
                        ready</p>
                </div>
                {/* <div class="abt-hero-overlay" style={{background:`url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover'}}></div> */}

            </div>
            <div class="abt-westford aos" data-aos="zoom-in" data-aos-duration="1000" style={{ height: 'fit-content', marginBottom: '2rem' }}>
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
                            <h2 style={{ fontSize: "2.5rem" }}>Our Institutions</h2>
                            <img className='zigzag3' style={{ height: '20px' }} src={zigzag} alt="" />
                        </div>
                        <p >Westford Education Group (WEG) operating as Westford Ventures Holding Ltd., A ADGM registered company
                            with multiple brands of higher education programs through its campuses and satellite learning
                            centres all across the globe. The group is established with an objective to fulfil the aspirations
                            of learners with diverse backgrounds from across the globe to attain internationally-accredited
                            qualifications in the form of on-site and online learning interventions. <br /> <br />
                            Working toward a world where everyone has access to higher education, WEG now stands out winning the
                            confidence of its learners and the community, a result of its steadfast commitment to students
                            welfare and their success stories. <br /> <br />
                            At Westford, we have come up with an integrated strategy and operational model for the global
                            education. The group’s overall mission is “enabling the student of today to become a successful
                            individual of tomorrow".</p>
                    </div>

                </div>
                {/* <div class="abt-wf-section1">
            <div class="abt-wf-img">
                <div class="grey-bg">
                    <div class="grey-bg-outline" style={{top:'0',left:"0"}}>
                    </div>
                    <img class="abt-wf-lady-img " src={heroImg} alt="" />
                    <img class="zig-zag1" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />
                    <img class="zig-zag2" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />


                              
                </div>

            </div>

            <div class="abt-wf-txt ">
                <h2>About Westford</h2>
                <img class="zig-zag3" src="/westfordeducation/images/about-us/zig-zag.png" alt="" />
                <p style={{width:'100%'}}>Westford Education Group (WEG) operating as Westford Ventures Holding Ltd., A ADGM registered company
                    with multiple brands of higher education programs through its campuses and satellite learning
                    centres all across the globe. The group is established with an objective to fulfil the aspirations
                    of learners with diverse backgrounds from across the globe to attain internationally-accredited
                    qualifications in the form of on-site and online learning interventions. <br/> <br/>
                    Working toward a world where everyone has access to higher education, WEG now stands out winning the
                    confidence of its learners and the community, a result of its steadfast commitment to students
                    welfare and their success stories. <br/> <br/>
                    At Westford, we have come up with an integrated strategy and operational model for the global
                    education. The group’s overall mission is “enabling the student of today to become a successful
                    individual of tomorrow".</p>

            </div>

        </div> */}

            </div>

            {/* <div class="about-milestone">

        <div class="milestone-heading">
            <h2>Milestones</h2>
        </div>
        <div class="main-milestone slide display">
                    <div class="main-milestone-left">
                        <h3>2009</h3>

                    </div>

                    <div class="main-milestone-right">
                        <div class="right-all-contents">
                            <div class="right-all-row1">
                                <img src="/westfordeducation/images/about-us/trophy-icon.png" alt="" />
                                <p>01</p>
                            </div>

                            <div class="right-all-row2">
                                <p>Rechristened westford school of management as westford <br />
                                    university college and expanded its portfolio of partners. <br />
                                    Programs and qualification </p>
                            </div>


                        </div>

                    </div>

                </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div class="mileStoneSlider">
                

                <div class="main-milestone slide">
                    <div class="main-milestone-left">
                        <h3>2010</h3>

                    </div>

                    <div class="main-milestone-right">
                        <div class="right-all-contents">
                            <div class="right-all-row1">
                                <img src="/westfordeducation/images/about-us/trophy-icon.png" alt="" />
                                <p>01</p>
                            </div>

                            <div class="right-all-row2">
                                <p>Rechristened westford school of management as westford <br />
                                    university college and expanded its portfolio of partners. <br />
                                    Programs and qualification </p>
                            </div>


                        </div>

                    </div>

                </div>

                <div class="main-milestone slide">
                    <div class="main-milestone-left">
                        <h3>2011</h3>

                    </div>

                    <div class="main-milestone-right">
                        <div class="right-all-contents">
                            <div class="right-all-row1">
                                <img src="/westfordeducation/images/about-us/trophy-icon.png" alt="" />
                                <p>01</p>
                            </div>

                            <div class="right-all-row2">
                                <p>Rechristened westford school of management as westford <br />
                                    university college and expanded its portfolio of partners. <br />
                                    Programs and qualification </p>
                            </div>


                        </div>

                    </div>

                </div>

                <div class="main-milestone slide">
                    <div class="main-milestone-left">
                        <h3>2012</h3>

                    </div>

                    <div class="main-milestone-right">
                        <div class="right-all-contents">
                            <div class="right-all-row1">
                                <img src="/westfordeducation/images/about-us/trophy-icon.png" alt="" />
                                <p>01</p>
                            </div>

                            <div class="right-all-row2">
                                <p>Rechristened westford school of management as westford <br />
                                    university college and expanded its portfolio of partners. <br />
                                    Programs and qualification </p>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',rowGap:'1rem'}}>
                <button id="prev">Previous</button>
                <button id="next">Next</button>
            </div>
        </div>


         <div class="old-milestone">
            <div class="old-milestone-left">
                <h3>2010</h3>

            </div>

            <div class="old-milestone-right">
                <div class="right-all-contents-old">
                    <div class="right-all-row1-old">
                        <img src="/westfordeducation/images/about-us/trophy-icon.png" alt="" />
                        <p>01</p>
                    </div>

                    <div class="right-all-row2-old">
                        <p>Rechristened westford school of management as westford <br />
                            university college and expanded its portfolio of partners. <br />
                            Programs and qualification </p>
                    </div>


                </div>

            </div>

        </div> 

    </div> */}

            {/* <div class="vision-ethos">
        <div class="vm-both" style={{width:"100%"}}>
            <div class="vision-mision-left">
                <h3>Our Vision & Mission</h3>
                <div class="pointer-row">
                    <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                    <p>To be an unwavering flag-bearer in providing accredited qualifications delivered in a flexible,
                        accessible, and affordable manner to the largest international network of learners.</p>
                </div>

                <div class="pointer-row">
                    <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                    <p>To ensure access to quality higher education for learners across the globe.</p>
                </div>

                <div class="pointer-row">
                    <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                    <p>To foster the development of talent while simultaneously empowering the modern workforce through
                        continued education </p>
                </div>

                <div class="pointer-row">
                    <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                    <p>To pave the way for a better world by transforming the lives of individuals.</p>
                </div>

            </div>
            <div class="ethos-right">
                <h3>Ethos</h3>
                <p>The focal point of all our endeavours is the ‘student experience’. Today, our world-class education
                    has reached over 20,000 students. Our students form a vibrant, diverse and inclusive community of
                    learners, contributing invaluable knowledge, innovative ideas, and distinctly fresh perspectives
                    which propel their professional and personal journeys forward. Our faculty team comprises eminent
                    professionals and academicians from reputed universities possessing a wealth of teaching and
                    training experience. This medley of expertise in the industry and academia help them bring
                    real-world experiences to the class, thereby anchoring our courses in a practical and
                    work-world-based approach.</p>

            </div>
        </div>

    </div> */}
            <section className='visionMission' style={{ aspectRatio: '1/0.6', display: 'flex', columnGap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '40%', height: 'fit-content', background: '#ecf1f4', padding: '1rem' }}>
                    <div style={{ height: 'fit-content' }}>
                        <h1 style={{ fontSize: 'clamp(2rem,3vw,3rem)', margin: '0' }}>Our Vision & Mission </h1>
                        <ul className='missionPoints'>
                            <li>To be an unwavering flag-bearer in providing accredited qualifications delivered in a flexible,
                                accessible, and affordable manner to the largest international network of learners.</li>
                            <li>To ensure access to quality higher education for learners across the globe.</li>
                            <li>To foster the development of talent while simultaneously empowering the modern workforce through
                                continued education </li>
                            <li>To pave the way for a better world by transforming the lives of individuals.</li>
                        </ul>
                    </div>

                </div>
                <div style={{ width: '40%', height: 'fit-content', background: 'linear-gradient(180deg, #285F71 0%, #4292AC 100%)', padding: '2%' }}>
                    <div style={{ height: 'fit-content' }}>
                        <h1 style={{ fontSize: 'clamp(2rem,3vw,3rem)', margin: '0', color: 'white' }}>Ethos</h1>
                        <p style={{ color: 'white', lineHeight: '1.5', textAlign: 'justify' }}>The focal point of all our endeavours is the ‘student experience’. Today, our world-class education
                            has reached over 20,000 students. Our students form a vibrant, diverse and inclusive community of
                            learners, contributing invaluable knowledge, innovative ideas, and distinctly fresh perspectives
                            which propel their professional and personal journeys forward. Our faculty team comprises eminent
                            professionals and academicians from reputed universities possessing a wealth of teaching and
                            training experience. This medley of expertise in the industry and academia help them bring
                            real-world experiences to the class, thereby anchoring our courses in a practical and
                            work-world-based approach.</p>
                    </div>

                </div>
            </section>



            <div class="our-leaders" style={{ height: 'fit-content' }}>
                <div class="leadership-headings">
                    <h3>Our Leadership</h3>
                    <p style={{ width: '100%' }}>Our team of eminent professionals from the academia and industry, possessing decades of experience and
                        knowledge
                        contributes their expertise to build a high performing business which embodies innovation,
                        entrepreneurship, acumen, academic rigor and quality.</p>
                </div>

                <div class="leaders-pic" style={{ width: '90%', height: 'fit-content' }}>

                    <div class="leaders-row">
                        <div class="leaders-img-text">
                            <img src={person1} alt="" />
                            <div class="leaders-indiv-bottom">
                                <h3>Firoz Thairinil</h3>
                                <p>Chief Executive Officer</p>
                            </div>

                        </div>

                        <div class="leaders-img-text">
                            <img src={person2} alt="" />
                            <div class="leaders-indiv-bottom">
                                <h3>Samras Mayimi</h3>
                                <p>Co-founder and Executive Director</p>
                            </div>

                        </div>

                        <div class="leaders-img-text">
                            <img src={person3} alt="" />
                            <div class="leaders-indiv-bottom">
                                <h3>Hanil Das</h3>
                                <p>Co-founder and Executive Director</p>
                            </div>

                        </div>

                        <div class="leaders-img-text">
                            <img src={person6} alt="" />
                            <div class="leaders-indiv-bottom">
                                <h3>Mashrook Ali</h3>
                                <p>Co-founder and Executive Director</p>
                            </div>

                        </div>

                        <div class="leaders-img-text">
                            <img src={person5} alt="" />
                            <div class="leaders-indiv-bottom">
                                <h3>Anil Ahluwalia</h3>
                                <p>Executive Director – Academic</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default About