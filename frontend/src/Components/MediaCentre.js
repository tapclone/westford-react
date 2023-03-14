import React, { useEffect, useState } from "react";
import bannerOverLay from "../../src/images/westford assets/overlay.svg";
import banner from "../../src/images/media-centre/hero-bg.png";
import maImg1 from "../../src/images/media-centre/ma-img1.png";
import article from "../../src/images/media-centre/main-article-img.png";

import ArticleSection from "./ArticleSection";
import Slider from "react-slick";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Carousel1 from "react-grid-carousel";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "justify",
};
function MediaCentre() {
    const [blog, setBlog] = useState([]);
    const [length, setLength] = useState();
    const [lastBlog, setLastBlog] = useState();
    const [modalview, setModalview] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get("/api/admin/view-all-blog");
                setLength(data.length);

                setBlog(data);
            } catch (error) {}
        })();
    }, []);
    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get("/api/admin/view-all-news");
                setNews(data);
            } catch (error) {}
        })();
    }, []);
    const settingsss = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 945,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    // autoplay: true,
                    autoplaySpeed: 1500,
                },
            },
        ],
    };

    const viewModal = (items) => {
        setModalview(items);
        handleOpen();
    };

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
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div>
                            <div
                                className="newsCard"
                                style={{
                                    height: "fit-content",
                                    display: "flex",
                                    border: "1px solid #CCCCCC",
                                    borderRadius: "20px",
                                }}
                            >
                                <img
                                    src={modalview?.Image}
                                    className="newsCard1"
                                    style={{
                                        width: "40%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                ></img>
                                <div
                                    style={{
                                        width: "60%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "stretch",
                                        padding: "1rem",
                                    }}
                                >
                                    <h3 style={{ fontWeight: "normal" }}>{modalview?.header}</h3>
                                    <p>{modalview?.description}</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
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
            </div>

            <section class="media-cntr-sec1 aos" data-aos="zoom-in" data-aos-duration="1500">
                <div class="media-cntr-sec1-headings">
                    <h2 style={{ fontSize: "clamp(1.5rem,3vw,3rem)", marginBottom: "5px" }}>Article and Blogs</h2>
                    <p>Here's where you'll find the latest trends, best practices, and research in education.</p>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        padding: "4% 0",
                    }}
                >
                    <div
                        className="mediaCentreTop"
                        style={{
                            width: "85%",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            className="mediaCentreTop1"
                            style={{
                                width: "48%",
                                minWidth: "23rem",
                                height: "100%",
                                borderRadius: "20px",
                                background: "linear-gradient(360deg, #1F1F1F 0%, rgba(31, 31, 31, 0) 85.5%)",
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    mixBlendMode: "multiply",
                                    borderRadius: "inherit",
                                }}
                                src={blog[length - 1]?.Image}
                                alt=""
                            />
                        </div>
                        <div className="mediaCentreTop2" style={{ width: "48%", height: "100%" }}>
                            <h1
                                style={{
                                    fontWeight: "600",
                                    fontSize: "1.7rem",
                                    color: "#303030",
                                    lineHeight: "40px",
                                }}
                            >
                                {blog[length - 1]?.header}
                            </h1>
                            <p style={{ lineHeight: "28px" }}>{blog[length - 1]?.description[0].paragraph.slice(0, 500)}</p>
                            <button
                                style={{
                                    padding: "2% 4% ",
                                    color: "white",
                                    background: "#DB3656",
                                    outline: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    navigate("/single-blog", { state: blog[length - 1] });
                                }}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ArticleSection></ArticleSection>

            <section class="more-articles" style={{ height: "fit-content", paddingBottom: "15%" }}>
                <div class="ma-headings">
                    <h2>News and Events</h2>
                    <p>Find the latest news, events, and updates related to the group here.</p>
                </div>
                <div
                    className="newsAndArticles"
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ width: "86%" }}>
                        <Carousel1 cols={2} rows={1} gap={12} showDots={true} loop>
                            {news.map((items) => {
                                return (
                                    <Carousel1.Item>
                                        <div>
                                            <div
                                                className="newsCard"
                                                style={{
                                                    height: "fit-content",
                                                    display: "flex",
                                                    border: "1px solid #CCCCCC",
                                                    borderRadius: "20px",
                                                }}
                                            >
                                                <img
                                                    src={items.Image}
                                                    className="newsCard1"
                                                    style={{
                                                        width: "40%",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                        backgroundSize: "cover",
                                                        minHeight: "15rem",
                                                    }}
                                                ></img>
                                                <div
                                                    style={{
                                                        width: "60%",
                                                        height: "100%",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "stretch",
                                                        padding: "1rem",
                                                    }}
                                                >
                                                    <h3 style={{ fontWeight: "normal" }}>{items.header}</h3>
                                                    <p>{items.description.slice(0, 60)}</p>
                                                    <a
                                                        target="_blank"
                                                        href={items.link}
                                                        style={{
                                                            color: "red",
                                                            textDecoration: "underline",
                                                        }}
                                                    >
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel1.Item>
                                );
                            })}
                        </Carousel1>
                    </div>
                </div>

                {/* <div class="ma-list">
            <div class="ma-list-row" style={{columnGap:'1rem'}}>
                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>

                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>

                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>

                <div class="ma-list-single">
                    <div class="ma-single-left">
                        <img src={maImg1} alt="" />
                    </div>
                    <div class="ma-single-right">
                        <h3>Why DBA’s from European Universities are higher in...</h3>
                        <p>When a crisis happens and times are tough it can be easy to lose focus on the importance...
                        </p>
                        <h4> <a href="#"> Read more </a> </h4>
                    </div>

                </div>
            </div>
        </div> */}
            </section>
        </div>
    );
}

export default MediaCentre;
