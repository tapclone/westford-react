import React from 'react'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import banner from '../../src/images/contact-us/hero-bg.png'
function ContactUs() {
  return (
    <div>
        <div class="hero"  style={{backgroundImage:`url(${banner}),url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundBlendMode:'multiply'}}>

<div class="hero-heading">
        <p>Say Hello To Us</p>
</div>
      

</div>

<section class="contact-sec">
            <div class="contact-sec1">
                <div class="con-left">
                    <h2>Contact Us</h2>
                    <p>Westford Education Group (WEG) is a leading provider of accredited international education and corporate
                         training to aspiring learners across the globe.
                    </p>
                    <p>Westford provides academic degrees and diplomas, professional certificate and diploma courses in partnership
                         with fully accredited and reputed international awarding organizations and universities. Our taught
                          programs range from Undergraduate level to Post Graduate level including Master’s Degrees and Post 
                          Graduate Diplomas including Master of Business Administration (MBA) and Extended Diploma; Graduate 
                          Programs including BA Honours in Business, Higher National Diplomas; Professional Certificate courses 
                          in industry and domain specific subject areas. Through our media school WIFT, we offer a broad portfolio 
                          of PG/UG programs in Film Making, Media and Broadcasting , Animation, Multimedia and Gaming.
                   </p>
                        

                </div>

                <div class="con-right">
                    <div class="con-form">
                        <h3>Feel free to contact us and we will get back to you as soon as we can </h3>

                        <div class="input-box">
                            <input type="text" class="con-input-item" placeholder="First Name" />
                            <input type="text" class="con-input-item" placeholder="Last name" />
                            <input type="email" class="con-input-item" placeholder="Email" />
                            <input type="number" class="con-input-item" placeholder="Phone No" />
                            <textarea name="" id="" class="con-input-txtarea" placeholder=" Type your content here...."></textarea>

                        </div>

                        <button>Submit</button>

                    </div>
                </div>
                
                    <div class="con-left-mobile">
                    <h2>Contact Us</h2>
                    <p>Westford Education Group (WEG) is a leading provider of accredited international education and corporate
                         training to aspiring learners across the globe.
                    </p>
                    <p>Westford provides academic degrees and diplomas, professional certificate and diploma courses in partnership
                         with fully accredited and reputed international awarding organizations and universities. Our taught
                          programs range from Undergraduate level to Post Graduate level including Master’s Degrees and Post 
                          Graduate Diplomas including Master of Business Administration (MBA) and Extended Diploma; Graduate 
                          Programs including BA Honours in Business, Higher National Diplomas; Professional Certificate courses 
                          in industry and domain specific subject areas. Through our media school WIFT, we offer a broad portfolio 
                          of PG/UG programs in Film Making, Media and Broadcasting , Animation, Multimedia and Gaming.
                   </p> 
                </div>
            </div>
        </section>

        <section class="contact-sec2">

            <div class="con-sec2-left">
                <div class="con-addresses">
                    <div class="con-add-row">
                        
                        <div class="con-add">
                            <h3>Westford Education Group</h3>
                            <p> <img src="/images/contact-us/loc-icon.png" alt="" /> 225B Island Business Centre, 18-36 Wellington Street, Woolwich, London Se18 6PF,</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +44 7447 134 314</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +971 55 879 5198</p>

                        </div>

                        <div class="con-add">
                            <h3>Corporate Office Address</h3>
                            <p><img src="/images/contact-us/loc-icon.png" alt="" />225B Island Business Centre, 18-36 Wellington Street, Woolwich, London Se18 6PF,</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +44 7447 134 314</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +971 55 879 5198</p>
                            
                        </div>
                    </div>

                    <div class="con-add-row">
                        
                        <div class="con-add">
                            <h3>Corporate Office MENA Region</h3>
                            <p><img src="/images/contact-us/loc-icon.png" alt="" />225B Island Business Centre, 18-36 Wellington Street, Woolwich, London Se18 6PF,</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +44 7447 134 314</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +971 55 879 5198</p>
                            <p> <img src="/images/contact-us/phone-icon.png" alt="" /> +971 55 879 5198</p>

                        </div>

                        <div class="con-add">
                            <h3></h3> <br />
                            <p><img src="/images/contact-us/loc-icon.png" alt="" />225B Island Business Centre, 18-36 Wellington Street, Woolwich, London Se18 6PF,</p>
                            
                        </div>
                    </div>


                </div>

            </div>

            <div class="con-sec2-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1978455397125!2d76.30984741479419!3d10.000510192850797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1ec910e1d3%3A0x844cc59fa7ae47ec!2sWestford%20Education%20Group!5e0!3m2!1sen!2sin!4v1674800748742!5m2!1sen!2sin" class="con-map" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
            </div>

        </section>
    </div>
  )
}

export default ContactUs