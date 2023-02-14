import React, { useEffect, useState } from "react";
import bannerOverLay from "../../src/images/westford assets/overlay.svg";
import banner from "../../src/images/our-institutions/hero-bg.png";
import westford from "../../src/images/home/westford-logo.png";
import heroImg from "../../src/images/about-us/our-institutions-lady.png";
import zigzag from "../../src/images/about-us/zig-zag.png";
import zigzagBlue from "../../src/images/about-us/zigzag-blue.png";
import "./About.css";
import ArticleSection from "./ArticleSection";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "justify",
};
function OurInstitutions() {
  const [institute, setInstitute] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modaldescription, setModaldescription] = useState();
  const [limit, setLimit] = useState(6);
  const [instituteLength, setInstituteLength] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-institute");
        const datas = data.slice(0, limit);
        setInstituteLength(data.length);
        setInstitute(datas);
      } catch (error) {}
    })();
  }, [limit]);
  const addModalDescription = (items) => {
    handleOpen();
    setModaldescription(items);
  };
  const AddLimit = () => {
    setLimit(limit + 3);
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
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {modaldescription?.description}
            </Typography>
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
        <div class="hero-heading">
          <p class="aos" data-aos="zoom-out-up" data-aos-duration="2000">
            Making students <br /> worldwide
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
          paddingBottom: "2rem",
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
              <img
                className="heroImgStartingSec"
                style={{ top: "47%", left: "62%", width: "107%" }}
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
                Our Institutions
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.9rem",
                  lineHeight: "23px",
                  marginBottom: "0",
                }}
              >
                Westford operates prominent 10 independent brands – 8 in higher
                education, 1 brand of film studies, and 1 brand in Sports
                Management.
              </p>
              <ul className="institutionList">
                <li>
                  The seven higher education entities comprise Acacia
                  University, Arizona, US, CIQ, UK, Westford University College,
                  Exeed College, Exeed ECX, Eaton Business School, Athena Global
                  Education, DeMont Institute of Management & Technology and
                  Westford Institute of Film Technology with courses ranging
                  from the undergraduate level to the doctorate level.
                </li>
                <li>
                  Taito Education, a division of Exeed College provides Teacher
                  education degree programs and teacher training qualifications
                  from the university and awarding bodies based in the UK.
                </li>
                <li>
                  Westford Sports organizes and conducts sports activities in
                  connection with school managements and facilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="independent-brands"
        style={{ height: "fit-content", paddingBottom: "3rem" }}
      >
        <div class="independent-brnd-heading">
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,3rem)" }}>
            Our independent brands
          </h2>
        </div>

        <div
          class="brnd-blocks"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
          }}
        >
          <div
            style={{
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              columnGap: "1rem",
              rowGap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {institute.map((items) => {
              return (
                <div class="brnd-block">
                  <img src={items.Image} alt="" />

                  <h3>{items.header}</h3>

                  <p>{items.description.slice(0, 223)}</p>

                  <h4>
                    {" "}
                    <a
                      onClick={() => {
                        addModalDescription(items);
                      }}
                    >
                      Read More
                    </a>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        {instituteLength != institute.length && (
          <button onClick={AddLimit} class="independent-brands-btn contactUs">
            View More
          </button>
        )}
      </div>
      <section
        class="articles-blogs"
        style={{ background: "white", paddingBottom: "5%" }}
      >
        <div class="article-blog-headings">
          <h2>Our Articles and Blogs</h2>
          <p style={{ paddingBottom: "1rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <ArticleSection></ArticleSection>

        <div
          class="article-blog-btn contactUs"
          onClick={() => {
            navigate("/about");
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

export default OurInstitutions;
