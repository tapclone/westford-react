import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'
import img from '../../src/images/home/art-sect-img1.png'

function ArticleSection() {
    const [blog, setBlog] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        (async function () {
          try {
            const { data } = await axios.get("/api/admin/view-all-blog");
            setBlog(data);
          } catch (error) {}
        })();
      }, []);
    const settings3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    // autoplay: true,
                    autoplaySpeed: 1500,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    // autoplay: true,
                    autoplaySpeed: 1500,
                }
            }
        ]
    };
    const settingsBanner = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
      }

    return (
        <div style={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center',marginBottom:'5%'}}>
            <div style={{width:'86%'}}>
                <Slider {...settings3}>
                    {blog.map((items)=>{
                        const image=items.Image
                        return(
                            <div onClick={()=>{navigate('/single-blog',{state:items})}} style={{cursor:"pointer"}}>
                                
                            <div className='articleCard' style={{borderRadius:"4%"}} >
                            <img src={image} style={{backgroundBlendMode: "multiply",position:"absolute",zIndex:"-1",borderRadius:"inherit"}}></img>
                            <div className='articleCardInner'>
                            <span style={{ padding: '7px', borderRadius: '5px' }}></span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}>{items.header}</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>{items.date}</p>
                            </div> 
                            </div>
                        </div>

                        )
                    })}
                </Slider>
            </div>
        </div>

    )
}

export default ArticleSection