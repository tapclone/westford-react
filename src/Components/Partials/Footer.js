import React from 'react'
import './partials.css'
import logo from '../../images/home/westford-logo-white.png'
import fb from '../../images/home/fb-icon.svg'
import insta from '../../images/home/insta-icon.svg'
import twitter from '../../images/home/twitter-icon.svg'
import linkedin from '../../images/home/linkedin-icon.svg'
function Footer() {
    return (
        <section class="footer">

                <div class="pop-footer" style={{padding:"3% 1%",height:'fit-content'}}>
                    <div class="pop-footer-text">
                        <h3 style={{fontSize:'clamp(2rem,3vw,4rem)'}}>“We’ll get there together!”</h3>
                        <p>For corporate educational or training enquiries or partnerships, <br /> please connect with us.</p>
                    </div>

                    <div class="pop-footer-btn" style={{width:'15rem'}} onclick="window.location.href='/westfordeducation/contact-us.html';">
                        <button style={{width:'100%',height:'100%'}}>Contact With Us</button>
                    </div>

                </div>

                <div class="full-footer">
                    <div class="footer-main">
                        <div class="footer-section1" >

                            <a href="index.html">
                                <img src={logo} alt="company logo in footer" />
                            </a>
                            <p>Westford Education Group (WEG) is a leading provider of accredited international education to aspiring learners across the globe.
                                Westford is fast emerging as a reputed brand of global education providers.</p>
                            <div class="footer-social-icons">
                                <a href="https://www.facebook.com/"><img src={fb} alt="facebook icon in footer" /></a>
                                <a href="https://www.instagram.com/"><img src={insta} alt="facebook icon in footer" /></a>
                                <a href="https://www.linkedin.com/"><img src={linkedin} alt="facebook icon in footer" /></a>
                                <a href="https://www.twitter.com/"><img src={twitter} alt="facebook icon in footer" /></a>
                            </div>
                        </div>

                        <div class="footer-section2" >
                            <ul>
                                <li class="footer-li"> <a href="index.html">Home</a> </li>
                                <li class="footer-li"><a href="about-us.html">About Us</a></li>
                                <li class="footer-li"><a href="our-instituations.html">Our Institutions</a></li>
                                <li class="footer-li"><a href="our-partners.html">Our Partners</a></li>
                                <li class="footer-li"><a href="awards-accolades.html">Awards & Accolades</a></li>
                                <li class="footer-li"><a href="media-centre.html">Media Centre</a></li>
                                <li class="footer-li"><a href="contact-us.html">Contact Us</a></li>
                            </ul>

                        </div>

                        <div class="footer-section3" >

                            <ul>
                                <li class="footer-li"><a href="faq.html">FAQ Glossary</a></li>
                                <li class="footer-li"><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li class="footer-li" ><a href="terms-conditions.html">Terms & Conditions</a></li>
                                <li class="footer-li"><a href="equaopertunity-policy.html">Equal Opportunity Policy</a></li>
                                <li class="footer-li"><a href="coockies-policy.html">Cookies Policy </a></li>
                            </ul>

                        </div>

                    </div>
                    <div class="footer-bottom">
                        <div class="ftr-btm-txt">
                            <p>ALL COPYRIGHTS RESERVED @ WESTFORD EDUCATION GROUP 2022</p>
                            <p class="footer-li"><a href="privacy-policy.html">PRIVACY POLICY </a>| <a href="terms-conditions.html"> DISCLAIMER</a></p>

                        </div>

                    </div>

                </div>




            </section>
    )
}

export default Footer