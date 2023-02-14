import React, { useEffect, useState } from "react";
import banner from "../../src/images/westford assets/single-article.png";
import img from "../../src/images/home/art-sect-img1.png";
import img2 from "../../src/images/westford assets/Mask group.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
function SingleArticle() {
  const parms = useParams();
  const [singleBlog, setSingleBlog] = useState();
  const [length, setLength] = useState();
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(()=>{
    if(state){
      setSingleBlog(state);
    }
  },[state])
  
  // useEffect(() => {

  //   (async function () {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/admin/view-single-blog/${parms.id}`
  //       );

  //       setSingleBlog(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // },[]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-blog");
        setLength(data.length);

        setBlog(data);
      } catch (error) {}
    })();
  }, [length]);
  const refreshfunction = (items) => {
  setSingleBlog(items)
  };

  return (
    <div>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            aspectRatio: "1/0.35",
            background: `url(${banner})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <div
          className="articleContents"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="articleContentsSub1" style={{ width: "62%" }}>
            <h1
              style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "#303030" }}
            >
              {singleBlog?.header}
            </h1>

            <p> {singleBlog?.description}</p>
            <img
              style={{ width: "100%", aspectRatio: "1/0.5" }}
              src={"/" + singleBlog?.Image}
              alt=""
            />
            <h2 style={{ fontSize: "clamp(1rem,4vw,1.5rem)" }}>
              {blog[length - 2]?.header}
            </h2>
            <p> {blog[length - 2]?.description}</p>
            <img
              style={{ width: "100%", aspectRatio: "1/0.5" }}
              src={"/" + blog[length - 2]?.Image}
              alt=""
            />
          </div>
          <div className="articleContentsSub2" style={{ width: "35%" }}>
            <h2>Related Blogs</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {blog.map((items) => {
                return (
                  <div
                    onClick={() => {
                      refreshfunction(items);
                    }}
                    style={{ width: "100%", cursor: "pointer" }}
                  >
                    <div className="articleCard">
                      <img
                        src={"/" + items?.Image}
                        style={{
                          backgroundBlendMode: "multiply",
                          position: "absolute",
                          zIndex: "-1",
                        }}
                      ></img>

                      <span
                        style={{
                          background: "white",
                          padding: "7px",
                          borderRadius: "5px",
                        }}
                      >
                        MARKETING
                      </span>
                      <p
                        className="articleCardChild1"
                        style={{
                          color: "white",
                          padding: "0 2%",
                          fontSize: "1.2rem",
                          fontWeight: "500",
                        }}
                      >
                        {items.header}
                      </p>
                      <p
                        className="articleCardChild2"
                        style={{ color: "white", padding: "0 2%" }}
                      >
                        {items.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleArticle;
