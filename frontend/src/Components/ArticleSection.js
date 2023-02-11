import React from 'react'
import Slider from 'react-slick'
import img from '../../src/images/home/art-sect-img1.png'

function ArticleSection() {
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
    return (
        <div style={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center',marginBottom:'5%'}}>
            <div style={{width:'86%'}}>
                <Slider {...settings3}>
                    <div>
                        <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                            <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                            <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                        </div>
                    </div>

                    <div>
                        <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                            <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                            <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                        </div>
                    </div>

                    <div>
                        <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                            <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                            <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                        </div>
                    </div>

                    <div>
                        <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                            <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                            <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                        </div>
                    </div>

                    <div>
                        <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                            <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                            <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                        </div>
                    </div>

                    <div>
                        <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                            <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                            <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%',fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                        </div>
                    </div>

                    



                </Slider>
            </div>
        </div>

    )
}

export default ArticleSection