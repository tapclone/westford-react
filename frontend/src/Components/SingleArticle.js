import React from 'react'
import banner from '../../src/images/westford assets/single-article.png'
import img from '../../src/images/home/art-sect-img1.png'
import img2 from '../../src/images/westford assets/Mask group.png'
function SingleArticle() {
    return (
        <div>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '80%', aspectRatio: "1/0.35", background: `url(${banner})`, backgroundPosition: "center center", backgroundSize: 'cover' }}>

                </div>
            </section>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "5%" ,paddingBottom:'5%'}}>
                <div className='articleContents' style={{ width: '80%', display: 'flex', justifyContent: 'space-between' }}>
                    <div className='articleContentsSub1' style={{ width: '62%' }}>
                        <h1 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: '#303030' }}>Why DBA’s from European Universities are higher in demand in Africa?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        <p>  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duie dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augu</p>
                        <img style={{width:'100%',aspectRatio:"1/0.5"}} src={img2} alt="" />
                        <h2 style={{fontSize:'clamp(1rem,4vw,1.5rem)'}}>Why DBA’s from European Universities are higher in demand in Africa?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                          <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duie dolor in hendrerit in vulputate velit esse molestie consequat,</p>
                    </div>
                    <div className='articleContentsSub2' style={{ width: '35%' }}>
                        <h2>Related Blogs</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                            <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                                <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%', fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                            </div>
                            <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                                <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%', fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                            </div>
                            <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                                <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%', fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                            </div>
                            <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                                <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%', fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                            </div>
                            <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                                <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%', fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                            </div>
                            <div className='articleCard' style={{ background: `url(${img})`, backgroundBlendMode: "multiply" }}>
                                <span style={{ background: 'white', padding: '7px', borderRadius: '5px' }}>MARKETING</span>
                                <p className='articleCardChild1' style={{ color: 'white', padding: '0 2%', fontSize: '1.2rem', fontWeight: '500' }}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p className='articleCardChild2' style={{ color: 'white', padding: '0 2%' }}>Nov 14  .  10 min Read</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default SingleArticle