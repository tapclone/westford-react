import React, { useEffect, useState } from "react";
import banner from "../../src/images/awards/hero-bg.png";
import bannerOverLay from "../../src/images/westford assets/overlay.svg";
import award from "../../src/images/awards/award1.png";
import heroImg from "../../src/images/awards/trophy.png";
import zigzag from "../../src/images/about-us/zig-zag.png";
import zigzagBlue from "../../src/images/about-us/zigzag-blue.png";
import ArticleSection from "./ArticleSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
function Awards() {
    const [awards, setAwards] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get("/api/admin/view-all-awards");

                setAwards(data);
            } catch (error) {}
        })();
    }, []);
    const settingsBanner = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div style={{ width: "100%", overflowX: "hidden" }}>
            <div
                class="hero"
                style={{
                    backgroundImage: `url(${banner}),url(${bannerOverLay})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "multiply",
                }}
            >
                <div style={{ width: "100%", height: "100%" }}>
                    <Slider {...settingsBanner}>
                        <div>
                            <div className="bannerCont">
                                <p style={{ fontSize: "2rem", color: "white" }}>
                                    Empowering minds, <br /> changing the world
                                </p>
                            </div>
                            <div className="bannerSlider2">
                                <p>
                                    Empowering since 2009<br></br>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="bannerCont">
                                <p style={{ fontSize: "2rem", color: "white" }}>
                                    Shaping the future <br /> of work
                                </p>
                            </div>
                            <div className="bannerSlider2">
                                <p>
                                    Powered by tech to achieve<br></br>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="bannerCont">
                                <p style={{ fontSize: "2rem", color: "white" }}>
                                    Limitless possibilities <br />
                                    through learning
                                </p>
                            </div>
                            <div className="bannerSlider2">
                                <p>
                                    One-by-one towards excellence<br></br>
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
                {/* <div class="abt-hero-overlay"></div> */}
            </div>

            <div
                class="abt-westford aos"
                data-aos="zoom-in"
                data-aos-duration="1500"
                style={{ height: "fit-content", paddingBottom: "3rem" }}
            >
                <div
                    className="startingContent"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "5rem",
                    }}
                >
                    <div className="startingContentContainer" style={{ width: "90%", display: "flex" }}>
                        <div
                            className="startingContentImg"
                            style={{
                                width: "40%",
                                aspectRatio: "1/1",
                                position: "relative",
                                minWidth: "25rem",
                            }}
                        >
                            <div
                                className="backgroundLayer"
                                style={{
                                    width: "90%",
                                    aspectRatio: "1/1",
                                    background: "#F0F0F0",
                                    borderRadius: "10%",
                                    position: "absolute",
                                }}
                            >
                                <img src={zigzag} className="zigZag1" alt="" />
                                <img src={zigzag} className="zigZag2" alt="" />
                            </div>
                            <div
                                className="borderLayer"
                                style={{
                                    width: "90%",
                                    aspectRatio: "1/1",
                                    border: "3px solid #285F71",
                                    borderRadius: "10%",
                                    position: "absolute",
                                }}
                            >
                                <img
                                    className="heroImgStartingSec"
                                    style={{ width: "70%", top: "57.5%" }}
                                    src={heroImg}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="startingContentText"
                            style={{
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                            }}
                        >
                            <div style={{ width: "93%" }}>
                                <h2
                                    style={{
                                        marginTop: "0",
                                        fontSize: "clamp(1.5rem,3vw,3rem)",
                                        color: " #303030",
                                        fontWeight: "600",
                                        marginBottom: "10px",
                                    }}
                                >
                                    Awards & Accolades
                                </h2>
                                <p
                                    style={{
                                        textAlign: "justify",
                                        fontSize: "0.9rem",
                                        lineHeight: "23px",
                                        marginBottom: "0",
                                    }}
                                >
                                    Westford education group entities bagged many awards and recognition in past years as an
                                    evidence of our commitment to the quality and community development. These international
                                    awards are a reflection of our values and the dedication of our team that always compete
                                    to provide the best for our students and their communities.
                                </p>
                                <p
                                    style={{
                                        textAlign: "justify",
                                        lineHeight: "23px",
                                        fontSize: "0.9rem",
                                        marginBottom: "0",
                                    }}
                                >
                                    Our wonderful students, faculty and staff have helped us earn awards and accolades. We
                                    are proud to be consistently recognized.
                                </p>
                                <img
                                    className="zigzagBlue"
                                    style={{ width: "5rem", top: "0", right: "0", position: "absolute" }}
                                    src={zigzagBlue}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="all-trophies" style={{ height: "fit-content" }}>
                <div class="all-trophy-heading" style={{ width: "80%" }}>
                    <p style={{ fontWeight: "600", fontSize: "16px" }}>
                        Westford education group entities bagged many awards and recognition in past years as an evidence of
                        our commitment to the quality and community development.These international awards are the
                        reflection of our values and the dedication of our staffs who always compete to provide the best for
                        our students.
                    </p>
                </div>

                <div
                    class="trophy-display"
                    style={{
                        width: "100%",
                        height: "fit-content",
                        justifyContent: "center",
                        alignItems: "center",
                        overflowX: "hidden",
                        paddingBottom: "3rem",
                    }}
                >
                    <div
                        class="trophy-display-row"
                        style={{
                            flexWrap: "wrap",
                            height: "fit-content",
                            rowGap: "1rem",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            columnGap: "0.5rem",
                            width: "90%",
                        }}
                    >
                        {awards?.map((items) => {
                            return (
                                <div class="single-trophy aos" data-aos="flip-up" data-aos-duration="2000">
                                    <img src={items.Image} alt="" />
                                    <div class="single-trophy-txt">
                                        <h3>{items.header}</h3>
                                        <p>{items.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <section class="articles-blogs" style={{ paddingBottom: "10%" }}>
                <div class="article-blog-headings">
                    <h2>Our Articles and Blogs</h2>
                    <p style={{ paddingBottom: "1rem" }}>
                        Here's where you'll find the latest trends, best practices, and research in education.
                    </p>
                </div>
                <ArticleSection></ArticleSection>

                <div
                    class="article-blog-btn contactUs"
                    onClick={() => {
                        navigate("/mediaCentre");
                    }}
                >
                    View More
                </div>
            </section>
            {/* <section class="articles-blogs">
        <div class="article-blog-headings">
            <h2>Our Articles and Blogs</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s.</p>
        </div>

       


    </section> */}
        </div>
    );
}

export default Awards;
