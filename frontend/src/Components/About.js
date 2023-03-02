
import React, { useEffect, useState } from "react";
import banner from '../../src/images/about-us/about-hero-image.png'
import bannerOverLay from '../../src/images/westford assets/overlay.svg'
import heroImg from '../../src/images/about-us/abt-westford-lady.png'
import person1 from '../../src/images/about-us/firoz.png'
import person2 from '../../src/images/about-us/samras.png'
import person3 from '../../src/images/about-us/hanil.png'
import person4 from '../../src/images/about-us/firoz.png'
import person5 from '../../src/images/about-us/ahluwalia.png'
import person6 from '../../src/images/about-us/ali.png'
import zigzag from '../../src/images/about-us/zig-zag.png'
import zigzagBlue from '../../src/images/about-us/zigzag-blue.png'
import trophy from '../../src/images/about-us/trophy.png'
import Slider from 'react-slick'
import upBtn from '../../src/images/about-us/Group 831.svg'
import downBtn from '../../src/images/about-us/Group 832.svg'
import btnBar from '../../src/images/about-us/Group 833.svg'
import axios from "axios";

function About() {
  const [awards, setAwards] = useState([]);
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-milestones");
        setAwards(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-leadership");
        setLeaders(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  function CustomArrowR(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img
          className="slideBtn"
          style={{ width: "2rem" }}
          src={downBtn}
          alt=""
        />
      </div>
    );
  }
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
  function CustomArrowL(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img
          className="slideBtn"
          style={{ width: "2rem" }}
          src={upBtn}
          alt=""
        />
      </div>
    );
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const settings4 = {
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <CustomArrowR></CustomArrowR>,
    prevArrow: <CustomArrowL></CustomArrowL>,
    beforeChange: (current, next) => {
      setCurrentSlide(current);
    },
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  const arr = [1, 2, 3, 4, 5, 6];
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
        {/* <div style={{width:'100%',height:'100%',backgroundColor:'blue',position:'absolute',top:'0',left:'0'}}></div> */}

        <div style={{ width: "100%", height: '100%' }}>
          <Slider {...settingsBanner}>
          <div>
              <div className="bannerCont">
                <p style={{ fontSize: "2rem", color: "white" }}>
                  Empowering minds, <br /> changing the world
                </p>
              </div>

            </div>

            <div>
              <div className="bannerCont">
                <p style={{ fontSize: "2rem", color: "white" }}>
                  Shaping the future <br /> of work
                </p>
              </div>

            </div>

            <div>
              <div className="bannerCont">
                <p style={{ fontSize: "2rem", color: "white" }}>
                  Limitless possibilities <br />through learning
                </p>
              </div>

            </div>
          </Slider>
        </div>
        {/* <div class="abt-hero-overlay" style={{background:`url(${bannerOverLay})`,backgroundPosition:"center center",backgroundSize:'cover'}}></div> */}
      </div>
      <div
        className="startingContent"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <div
          className="startingContentContainer"
          style={{ width: "90%", display: "flex" }}
        >
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
              <img className="heroImgStartingSec" src={heroImg} alt="" />
            </div>
          </div>
          <div
            className="startingContentText"
            style={{
              width: "60%",
              display: "flex",
              alignItems: "start",
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
                About Westford
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.9rem",
                  lineHeight: "23px",
                  marginBottom: "0",
                }}
              >
                Westford Education Group (WEG) operating as Westford Ventures
                Holding Ltd., A ADGM registered company with multiple brands of
                higher education programs through its campuses and satellite
                learning centres all across the globe. The group is established
                with an objective to fulfil the aspirations of learners with
                diverse backgrounds from across the globe to attain
                internationally-accredited qualifications in the form of on-site
                and online learning interventions.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: "23px",
                  fontSize: "0.9rem",
                  marginBottom: "0",
                }}
              >
                Working toward a world where everyone has access to higher
                education, WEG now stands out winning the confidence of its
                learners and the community, a result of its steadfast commitment
                to students’ welfare and their success stories.{" "}
              </p>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: "23px",
                  fontSize: "0.9rem",
                  marginBottom: "0",
                }}
              >
                {" "}
                At Westford, we have come up with an integrated strategy and
                operational model for the global education. The group’s overall
                mission is “enabling the student of today to become a successful
                individual of tomorrow”.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        className="mileStoneSlider"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
          background: "#F8F8F8",
          padding: "5% 0",
          position: "relative",
          
        }}
      >
        {/* <img src={btnBar} style={{position:'absolute',top:'28',right:'12.7'}} alt="" /> */}
        <div style={{ width: "65%", }}>
          <Slider {...settings4}>
            {awards.map((item, index) => {
              return (
                <div >
                  <div
                    style={{
                     
                      transform: `scale(${index === currentSlide ? 1 : 0.7})`
                    }}
                    className="milStoneSliderSingle"
                  >
                    <div
                      className="overlaySmallSlider"
                      style={{
                        background: `${
                          index != currentSlide
                            ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 0.01%, #F8F8F8 110%)"
                            : "transparent"
                        }`,
                      }}
                    ></div>
                    <div
                      className="milStoneSliderSingleSub1"
                      style={{
                        width: "30%",
                        background: "#DB3656",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h2 style={{ fontSize: "2.3rem", color: "white" }}>
                        {item.year}
                      </h2>
                    </div>

                    <div
                      className="milStoneSliderSingleSub2"
                      style={{
                        width: "70%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <img src={item.Image} alt="" />
                        <span
                          style={{
                            fontSize: "2rem",
                            color: "#303030",
                            opacity: "0.3",
                          }}
                        >
                          {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                        </span>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <section
        className="visionMission"
        style={{
          display: "flex",
          columnGap: "1rem",
          justifyContent: "center",
          marginTop: "5rem",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            width: "45%",
            height: "inherit",
            background: "#ecf1f4",
            padding: "2%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.5rem,3vw,3rem)",
              color: " #303030",
              fontWeight: "600",
              margin: "0",
            }}
          >
            Our Vision & Mission{" "}
          </h1>
          <ul className="missionPoints" style={{ margin: "0" }}>
            <li style={{ lineHeight: "1.6" }}>
              To be an unwavering flag-bearer in providing accredited
              qualifications delivered in a flexible, accessible, and affordable
              manner to the largest international network of learners.
            </li>
            <li style={{ lineHeight: "1.6" }}>
              To ensure access to quality higher education for learners across
              the globe.
            </li>
            <li style={{ lineHeight: "1.6" }}>
              To foster the development of talent while simultaneously
              empowering the modern workforce through continued education{" "}
            </li>
            <li style={{ lineHeight: "1.6" }}>
              To pave the way for a better world by transforming the lives of
              individuals.
            </li>
          </ul>
        </div>
        <div
          style={{
            width: "45%",
            height: "inherit",
            background: "linear-gradient(180deg, #285F71 0%, #4292AC 100%)",
            padding: "2%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.5rem,3vw,3rem)",
              margin: "0",
              color: " #ffff",
              fontWeight: "600",
            }}
          >
            Ethos
          </h1>
          <p
            style={{ color: "white", lineHeight: "1.6", textAlign: "justify" }}
          >
            The focal point of all our endeavours is the ‘student experience’.
            Today, our world-class education has reached over 20,000 students.
            Our students form a vibrant, diverse and inclusive community of
            learners, contributing invaluable knowledge, innovative ideas, and
            distinctly fresh perspectives which propel their professional and
            personal journeys forward. Our faculty team comprises eminent
            professionals and academicians from reputed universities possessing
            a wealth of teaching and training experience. This medley of
            expertise in the industry and academia help them bring real-world
            experiences to the class, thereby anchoring our courses in a
            practical and work-world-based approach.
          </p>
        </div>
      </section>

      <div
        class="our-leaders"
        style={{ height: "fit-content", paddingBottom: "15%" }}
      >
        <div class="leadership-headings" style={{ width: "60%" }}>
          <h3
            style={{
              fontSize: "clamp(1.5rem,3vw,3rem)",
              color: "#303030",
              marginBottom: "0",
            }}
          >
            Our Leadership
          </h3>
          <p style={{ width: "100%", marginBottom: "3.5rem" }}>
            Our team of eminent professionals from the academia and industry,
            possessing decades of experience and knowledge contributes their
            expertise to build a high performing business which embodies
            innovation, entrepreneurship, acumen, academic rigor and quality.
          </p>
        </div>

        <div
          class="leaders-pic"
          style={{ width: "90%", height: "fit-content" }}
        >
          <div class="leaders-row">
            {leaders.map((items) => {
              return (
                <div class="leaders-img-text">
                  <img src={items.Image} alt="" />
                  <div class="leaders-indiv-bottom">
                    <h3>{items.name}</h3>
                    <p>{items.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default About;
