import React, { useEffect, useState } from "react";
import bannerOverLay from "../../src/images/westford assets/overlay.svg";
import banner from "../../src/images/our-institutions/hero-bg.png";
import westford from "../../src/images/home/westford-logo.png";
import heroImg from "../../src/images/about-us/our-institutions-lady.png";
import zigzag from "../../src/images/about-us/zig-zag.png";
import "./About.css";
import axios from "axios";
function OurInstitutions() {
  const [institute, setInstitute] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-institute");
        setInstitute(data);
      } catch (error) {
        console.log(error);
      }
    })();
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
            Making students <br /> worldwide
          </p>
        </div>
      </div>

      <div
        class="our-institution aos"
        data-aos="zoom-in"
        data-aos-duration="1500"
        style={{ height: "fit-content", padding: "5rem 0" }}
      >
        <div
          class="our-institution-section1"
          style={{ width: "100%", columnGap: "3rem" }}
        >
          <div class="our-institution-img">
            <div class="grey-bg" style={{ width: "90%" }}>
              <div class="grey-bg-outline" style={{ width: "100%" }}></div>
              <img
                class="heroSecImg our-institution-lady-img"
                src={heroImg}
                alt=""
              />
              <img class="zig-zag1" src={zigzag} alt="" />
              <img class="zig-zag2" src={zigzag} alt="" />
            </div>
          </div>

          {/* <div class="our-institution-txt" style={{width:'58%'}}>
                <h2>Our Institutions</h2>
                <img class="zig-zag3" src={zigzag} alt="" />
                <p>Westford operates prominent 10 independent brands – 8 in higher education, 1 brand of film studies,
                    and 1 brand in Sports Management.</p>

                <div class="our-institution-points">

                    <div class="pointer-row">
                        <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                        <p>The seven higher education entities comprise Acacia University, Arizona, US, CIQ, UK,
                            Westford University College,
                            Exeed College, Exeed ECX, Eaton Business School, Athena Global Education,
                            DeMont Institute of Management & Technology and Westford Institute of Film Technology with
                            courses
                            ranging from the undergraduate level to the doctorate level.</p>
                        <br /><br /><br /><br /><br /><br /><br />
                    </div>

                    <div class="pointer-row">
                        <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                        <p>Taito Education, a division of Exeed College provides Teacher education degree programs and
                            teacher
                            training qualifications from the university and awarding bodies based in the UK.</p>
                        <br /><br /><br /><br />
                    </div>

                    <div class="pointer-row">
                        <img src="/westfordeducation/images/about-us/arrow-pointer-to-right.png" alt="" />
                        <p>Westford Sports organizes and conducts sports activities in connection with school
                            managements and facilities</p>
                    </div>
                </div>

            </div> */}

          <div
            className="heroSecText"
            style={{ width: "53%", height: "100%", padding: "0 1rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ fontSize: "2.5rem" }}>Our Institutions</h2>
              <img
                className="zigzag3"
                style={{ height: "20px" }}
                src={zigzag}
                alt=""
              />
            </div>
            <p>
              Westford operates prominent 10 independent brands – 8 in higher
              education, 1 brand of film studies, and 1 brand in Sports
              Management.
            </p>
            <ul className="institutionsPoints">
              <li>
                he seven higher education entities comprise Acacia University,
                Arizona, US, CIQ, UK, Westford University College, Exeed
                College, Exeed ECX, Eaton Business School, Athena Global
                Education, DeMont Institute of Management & Technology and
                Westford Institute of Film Technology with courses ranging from
                the undergraduate level to the doctorate level.
              </li>
              <li>
                Taito Education, a division of Exeed College provides Teacher
                education degree programs and teacher training qualifications
                from the university and awarding bodies based in the UK.
              </li>
              <li>
                Westford Sports organizes and conducts sports activities in
                connection with school managements and facilities
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="independent-brands" style={{ height: "fit-content" }}>
        <div class="independent-brnd-heading">
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Our independent brands
          </h2>
        </div>

        <div
          class="brnd-blocks"
          style={{
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              columnGap: "1rem",
              rowGap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div class="brnd-block">
              <img src={westford} alt="" />

              <h3>Westford University College</h3>

              <p>
                Westford University College is one of the leading and
                prestigious business schools, located in the UAE offering
                quality educational deliveries across undergraduate, graduate,
                doctorate and vocational professional programs…
              </p>

              <h4>
                {" "}
                <a href="#">Read More</a>
              </h4>
            </div>
            <div class="brnd-block">
              <img src={westford} alt="" />

              <h3>Westford University College</h3>

              <p>
                Westford University College is one of the leading and
                prestigious business schools, located in the UAE offering
                quality educational deliveries across undergraduate, graduate,
                doctorate and vocational professional programs…
              </p>

              <h4>
                {" "}
                <a href="#">Read More</a>
              </h4>
            </div>
            <div class="brnd-block">
              <img src={westford} alt="" />

              <h3>Westford University College</h3>

              <p>
                Westford University College is one of the leading and
                prestigious business schools, located in the UAE offering
                quality educational deliveries across undergraduate, graduate,
                doctorate and vocational professional programs…
              </p>

              <h4>
                {" "}
                <a href="#">Read More</a>
              </h4>
            </div>
            <div class="brnd-block">
              <img src={westford} alt="" />

              <h3>Westford University College</h3>

              <p>
                Westford University College is one of the leading and
                prestigious business schools, located in the UAE offering
                quality educational deliveries across undergraduate, graduate,
                doctorate and vocational professional programs…
              </p>

              <h4>
                {" "}
                <a href="#">Read More</a>
              </h4>
            </div>
            <div class="brnd-block">
              <img src={westford} alt="" />

              <h3>Westford University College</h3>

              <p>
                Westford University College is one of the leading and
                prestigious business schools, located in the UAE offering
                quality educational deliveries across undergraduate, graduate,
                doctorate and vocational professional programs…
              </p>

              <h4>
                {" "}
                <a href="#">Read More</a>
              </h4>
            </div>
          </div>
        </div>

        <button class="independent-brands-btn contactUs">View More</button>
      </div>

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

export default OurInstitutions;
