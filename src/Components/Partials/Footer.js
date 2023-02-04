import React from 'react'
import './partials.css'
import logo from '../../images/home/westford-logo-white.png'
import fb from '../../images/home/fb-icon.svg'
import insta from '../../images/home/insta-icon.svg'
import twitter from '../../images/home/twitter-icon.svg'
import linkedin from '../../images/home/linkedin-icon.svg'
function Footer() {
    return (
        <div class="footer">

            <div class="pop-footer">
                <div class="pop-footer-text">
                    <h3>“We’ll get there together!”</h3>
                    <p>For corporate educational or training enquiries or partnerships, <br /> please connect with us.</p>
                </div>

                <div class="pop-footer-btn " onclick="window.location.href='/westfordeducation/contact-us.html';">
                    <button class="contactUs">Contact With Us</button>
                </div>

            </div>

            <div class="full-footer">
                <div class="footer-main">
                    <div class="footer-section1">

                        <a href="/westfordeducation/index.html">
                            <img src={logo} alt="company logo in footer" />
                        </a>
                        <p>Westford Education Group (WEG) is a leading provider of accredited international education to
                            aspiring learners across the globe.
                            Westford is fast emerging as a reputed brand of global education providers.</p>
                        <div class="footer-social-icons">
                            <a href="https://www.facebook.com/"><img src={fb}
                                alt="facebook icon in footer" /></a>
                            <a href="https://www.instagram.com/"><img src={insta}
                                alt="facebook icon in footer" /></a>
                            <a href="https://www.linkedin.com/"><img src={linkedin}
                                alt="facebook icon in footer" /></a>
                            <a href="https://www.twitter.com/"><img src={twitter}
                                alt="facebook icon in footer" /></a>

                        </div>

                    </div>

                    <div class="footer-section2">
                        <ul>
                            <li class="footer-li"> <a href="/westfordeducation/index.html">Home</a> </li>
                            <li class="footer-li"><a href="/westfordeducation/about-us.html">About Us</a></li>
                            <li class="footer-li"><a href="/westfordeducation/our-instituations.html">Our Institutions</a>
                            </li>
                            <li class="footer-li"><a href="/westfordeducation/our-partners.html">Our Partners</a></li>
                            <li class="footer-li"><a href="/westfordeducation/awards-accolades.html">Awards & Accolades</a>
                            </li>
                            <li class="footer-li"><a href="/westfordeducation/media-centre.html">Media Centre</a></li>
                            <li class="footer-li"><a href="/westfordeducation/contact-us.html">Contact Us</a></li>
                        </ul>

                    </div>

                    <div class="footer-section3">

                        <ul>
                            <li class="footer-li"><a href="/westfordeducation/faq.html">FAQ Glossary</a></li>
                            <li class="footer-li"><a href="/westfordeducation/privacy-policy.html">Privacy Policy</a></li>
                            <li class="footer-li"><a href="/westfordeducation/terms-conditions.html">Terms & Conditions</a>
                            </li>
                            <li class="footer-li"><a href="/westfordeducation/equaopertunity-policy.html">Equal Opportunity
                                Policy</a></li>
                            <li class="footer-li"><a href="/westfordeducation/coockies-policy.html">Cookies Policy </a></li>
                        </ul>

                    </div>

                </div>
                <div class="footer-bottom">
                    <div class="ftr-btm-txt">
                        <p>ALL COPYRIGHTS RESERVED @ WESTFORD EDUCATION GROUP 2022</p>
                        <p class="footer-li"><a href="/westfordeducation/privacy-policy.html">PRIVACY POLICY </a>| <a
                            href="/westfordeducation/terms-conditions.html"> DISCLAIMER</a></p>

                    </div>

                </div>

            </div>




        </div>
    )
}

export default Footer