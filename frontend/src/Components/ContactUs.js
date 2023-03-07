import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/contact-us/hero-bg.png'
import loc from '../../src/images/contact-us/loc-icon.png'
import mob from '../../src/images/contact-us/phone-icon.png'
import './contactUs.css'
function ContactUs() {
    return (
        <div>
            <div class="hero" style={{ backgroundImage: `url(${banner}),url(${bannerOverLay})`, backgroundPosition: "center center", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundBlendMode: 'multiply' }}>

                <div class="hero-heading">
                    <p>Say Hello To Us</p>
                </div>

            </div>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='contactSectionMain' style={{ width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='contactSectionMainSub1' style={{ width: '65%' }}>
                        <h2 style={{ fontSize: 'clamp(1rem,4vw,1.7rem)' }}>Contact Us</h2>
                        <p>Westford Education Group (WEG) is a leading provider of accredited international education and corporate training to aspiring learners across the globe.</p>
                        <p>Westford provides academic degrees and diplomas, professional certificate and diploma courses in partnership with fully accredited and reputed international awarding organizations and universities. Our taught programs range from Undergraduate level to Post Graduate level including Master’s Degrees and Post Graduate Diplomas including Master of Business Administration (MBA) and Extended Diploma; Graduate Programs including BA Honours in Business, Higher National Diplomas; Professional Certificate courses in industry and domain specific subject areas. Through our media school WIFT, we offer a broad portfolio of PG/UG programs in Film Making, Media and Broadcasting , Animation, Multimedia and Gaming.</p>

                    </div>
                    <div className='contactSectionMainSub2' style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8F8F8' }}>
                        <div style={{ width: '93%', display: 'flex', flexDirection: 'column' }}>
                            <p style={{ fontSize: '1.4rem', fontWeight: '600', lineHeight: "32px" }}>Feel free to contact us and we will get back to you as soon as we can</p>
                            <div className='contactForm' style={{ background: 'white' }}>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                                <input type="text" placeholder='Email id' />
                                <input type="text" placeholder='Mobile' />
                                <input type="text" placeholder='Message' />

                            </div>
                            <input className='submitContactForm' type="submit" value='Submit' />
                        </div>

                    </div>
                </div>

            </section>
            <section className='contactSec2' style={{ background: '#F8F8F8', display: 'flex', alignItems: 'center', justifyContent: 'end' ,marginTop:'3rem',marginBottom:"3rem"}}>
                <div className='contactSec2Main' style={{ width: '92.5%', display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <div className='addresses' style={{ width: '50%', display: 'flex', flexWrap: 'wrap', columnGap: '1rem',alignItems:'center',justifyContent:'space-between' }}>
                        {/* <div style={{ width: '50%' }}>
                            <h3>Corporate Office Address</h3>

                            <p><img src={loc} alt="" /> 225B Island Business Centre,
                                18-36 Wellington Street,
                                Woolwich, London Se18 6PF,</p>
                            <p><img src={mob} alt="" /> +44 7447 134 314</p>
                            <p><img src={mob} alt="" /> +971 55 879 5198</p>
                        </div> */}
               
                 <div >
                        <div style={{ width: '48%' }}>
                            <h3>Corporate Office MENA Region</h3>
                            <p><img src={loc} alt="" /> Office No 206
                            RAKIA Business Centre 3 Building
                            A 2RAK Investment Authority
                            (RAKIA)Ras Al Khaimah,UAE</p>
                            <p><img src={mob} alt="" /> +9717 243 2004  +971 52 926 3000</p>
                            <p> <img src={mob} alt="" /> +971 6 5343622</p>
                            <p> <img src={mob} alt="" /> +971 52 926 3000</p>
                        </div>
                        <div style={{ width: '48%' }}>
                            <h3>Corporate Office Address</h3>
                            <p><img src={loc} alt="" /> Office No 206
                            RAKIA Business Centre 3 Building
                            A 2RAK Investment Authority
                            (RAKIA)Ras Al Khaimah,UAE,</p>
                            <p><img src={mob} alt="" /> +44 7447 134 314</p>
                            <p><img src={mob} alt="" /> +971 55 879 5198</p>
                        </div>
                        {/* <div style={{ width: '48%' }}>
                        <p><img src={loc} alt="" />Office No 206
                            RAKIA Business Centre 3 Building
                            A 2RAK Investment Authority
                            (RAKIA)Ras Al Khaimah,UAE</p>
                        </div> */}
                    </div>
                    </div>
                    <div className='map' style={{ width: '50%',aspectRatio:"1/1.2" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1978455397125!2d76.30984741479419!3d10.000510192850797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1ec910e1d3%3A0x844cc59fa7ae47ec!2sWestford%20Education%20Group!5e0!3m2!1sen!2sin!4v1674800748742!5m2!1sen!2sin" class="con-map" style={{border:"0",width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContactUs