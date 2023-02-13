import React from 'react'
import './partials.css'
import logo from '../../images/home/westford-logo-white.png'
import fb from '../../images/home/fb-icon.svg'
import insta from '../../images/home/insta-icon.svg'
import twitter from '../../images/home/twitter-icon.svg'
import linkedin from '../../images/home/linkedin-icon.svg'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate=useNavigate()
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
            <div className='redFooter'>
                <div style={{width:'70%',paddingRight:'15%'}}>
                <h2 style={{fontSize:'clamp(1.5rem,4vw,2rem)'}}>“We’ll get there together!”</h2>
                <p style={{lineHeight:'25px'}}>For corporate educational or training enquiries or partnerships, please connect with us.</p>
                </div>
                <div style={{width:'30%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span>Contact with us</span>
                </div>
                
            </div>
            <section className='footerMainc' style={{background:'#285F71',display:'flex',paddingTop:'20%'}}>
            <div className='sec1' >
                <img className='logoFooter' src={logo} alt="" />
                <p>Westford Education Group (WEG) is a leading provider of accredited international education to aspiring learners across the globe. Westford is fast emerging as a reputed brand of global education providers.</p>
                <div className='socialMediaIcons'>
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                </div>
            </div>
            <div className='sec2' >
                <div className='footerNavs'>
                <span onClick={()=>navigate('/about')}>About Us</span>
                <span onClick={()=>navigate('/ourInstitution')}>Our Institutions</span>
                <span onClick={()=>navigate('/ourPartners')}>Partners</span>
                <span onClick={()=>navigate('/awards')}>Awards</span>
                <span onClick={()=>navigate('/mediaCentre')}>Media Center</span>
                <span onClick={()=>navigate('/contact')}>Contact Us</span>
                </div>
                
            </div>
            
        </section>

        </div>
        
    )
}

export default Footer