import React, { useEffect, useState } from "react";
import bannerOverLay from "../../src/images/westford assets/overlay.svg";
import banner from "../../src/images/our-partners/hero-bg.png";
import DEAC from "../../src/images/our-partners/DEAC-logo.png";
import heroImg from "../../src/images/our-partners/hand-shake.png";
import zigzag from "../../src/images/about-us/zig-zag.png";
import dummyLogo from "../../src/images/our-partners/chea-logo.png";
import axios from "axios";

function OurPartner() {
  const [btnColour, setBtnColour] = useState();
  const [partner, setPartner] = useState([]);
  const [unique, setUnique] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-partners");
        const uniques = [...new Set(data.map((item) => item.country))];
        setUnique(uniques);
        setPartner(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function filterItems(category) {
    var items = document.querySelectorAll(".fiterCard");
    items.forEach(function (item) {
      if (category === "all") {
        item.style.display = "flex";
      } else {
        if (!item.classList.contains(category)) {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      }
    });
  }
  useEffect(() => {
    var filterButtons = document.querySelectorAll(".filter");
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var category = this.getAttribute("data-filter");
        filterItems(category);
        setBtnColour(category);
      });
    });
  }, []);

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
        <div class="hero-heading">
          <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">
            Making students <br /> worldwide.
          </p>
        </div>
      </div>

      <div
        className="startingContent"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          marginBottom: "15%",
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
              <img
                style={{ top: "6%" }}
                src={zigzag}
                className="zigZag1"
                alt=""
              />
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
                style={{ top: "53%", left: "50%", width: "101%" }}
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
                Our Partners
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.9rem",
                  lineHeight: "23px",
                  marginBottom: "0",
                }}
              >
                Westford Education Group (WEG) is a leading provider of
                accredited international education and corporate training to
                aspiring learners across the globe.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: "23px",
                  fontSize: "0.9rem",
                  marginBottom: "0",
                }}
              >
                Westford provides academic degrees and diplomas, professional
                certificate and diploma courses in partnership with fully
                accredited and reputed international awarding organizations and
                universities. Our taught programs range from Undergraduate level
                to Post Graduate level including Master’s Degrees and Post
                Graduate Diplomas including Master of Business Administration
                (MBA) and Extended Diploma; Graduate Programs including BA
                Honours in Business, Higher National Diplomas; Professional
                Certificate courses in industry and domain specific subject
                areas. Through our media school WIFT, we offer a broad portfolio
                of PG/UG programs in Film Making, Media and Broadcasting ,
                Animation, Multimedia and Gaming.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="partners-logo-display">

        <div class="logo-display-sec1">
            <div class="logo-display-txt">
                Westford takes pride in its partnerships with reputed universities from the UK , USA ,
                Italy, Spain, Cyprus, Malaysia and awarding organizations from the UK.
            </div>

            <div class="logo-display-tabs">
                <div class="logo-display-tab">All</div>
                <div class="logo-display-tab">America</div>
                <div class="logo-display-tab">Europe</div>
                <div class="logo-display-tab">Spain</div>
            </div>

        </div>

        <div class="logo-display-sec2" style={{width:"100%"}}>
            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                    <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>

            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>

            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>

            <div class="logo-boxes-row">
                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Distance Education Accrediting Commission (DEAC)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Council For Higher Education Accreditation (CHEA)</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Abertay University</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1000">
                <img src={DEAC} alt="" />
                    <p>Pearson Education</p>

                </div>

                <div class="logo-box" data-aos="zoom-out" data-aos-duration="1500">
                <img src={DEAC} alt="" />
                    <p>Scottish Credit And Qualifications Framework </p>

                </div>
            </div>



        </div>

    </div> */}
      <section
        style={{
          background: "#F8F8F8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "4rem",
          padding: "5% 0",
        }}
      >
        <div style={{ width: "90%" }}>
          <div
            className="filterTopSec"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "2rem",
              rowGap: "1rem",
            }}
          >
            <div style={{ width: "48%" }}>
              Westford takes pride in its partnerships with reputed universities
              from the UK , USA , Italy, Spain, Cyprus, Malaysia and awarding
              organizations from the UK.
            </div>
            <div
              className="filterBtns"
              style={{
                width: "48%",
                background: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: btnColour === "fiterCard" ? "#285F71" : "",
                  color: btnColour === "fiterCard" ? "white" : "",
                }}
                data-filter="fiterCard"
                className="filterall filter"
              >
                All
              </span>
              <span
                style={{
                  background: btnColour === "America" ? "#285F71" : "",
                  color: btnColour === "America" ? "white" : "",
                }}
                data-filter="America"
                className="filteramerica filter"
              >
                America
              </span>
              <span
                style={{
                  background: btnColour === "Europe" ? "#285F71" : "",
                  color: btnColour === "Europe" ? "white" : "",
                }}
                data-filter="Europe"
                className="filtereurope filter"
              >
                Europe
              </span>
              <span
                style={{
                  background: btnColour === "Spain" ? "#285F71" : "",
                  color: btnColour === "Spain" ? "white" : "",
                }}
                data-filter="Spain"
                className="filterspain filter"
              >
                Spain
              </span>
            </div>
          </div>
        </div>

        <div className="filterCards">
          {partner.map((items) => {
            return (
              <div className={`fiterCard ${items.country}`}>
                <img src={items.Image} alt="" />
                <p style={{ marginBottom: "0" }}>
                  {items.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default OurPartner;
