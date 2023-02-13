import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/home/logo.png";
import menuIcon from "../../images/home/menu-icon.svg";
import "./partials.css";
function Header() {
  const [navState, setNavState] = useState(false);

  const navigate = useNavigate();

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div class="header">
      <div class="topbar">
        <p class="comp-name">WESTFORD EDUCATION GROUP</p>
        <p class="comp-number">+971558795198</p>
        <a onClick={() => navigate("/contact")}>
          <button
            class="top-btn contactUs"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </a>
        {/* <div id="myLinks" class="mobile-menu">
                    <a class="mm-a-active" onClick={()=>navigate('/')}>Home</a>
                    <a onClick={()=>navigate('/about')} >About Us</a>
                    <a onClick={()=>navigate('/')}>Our Institutions</a>
                    <a onClick={()=>navigate('/')}>Our Partners</a>
                    <a onClick={()=>navigate('/')}>Awards & Accolades</a>
                    <a onClick={()=>navigate('/')}>Media Centre</a>
                </div>
                <a href="javascript:void(0);" class="icon" onClick={myFunction} /> */}

        <img
          onClick={() => setNavState(!navState)}
          class="menu-icon"
          src={menuIcon}
          alt="Navigation menu button"
        />
      </div>

      <div class="navbar" style={{ height: navState && "15rem" }}>
        <ul class="nav-list">
          <li class="nav-item">
            {" "}
            <a onClick={() => navigate("/")}>Home</a>{" "}
          </li>
          <li class="nav-item">
            <a onClick={() => navigate("/about")}>About Us</a>
          </li>
          <li class="nav-item">
            <a onClick={() => navigate("/ourInstitution")}>Our Institutions</a>
          </li>
          <li class="nav-item">
            <a onClick={() => navigate("/ourPartners")}>Our Partners</a>
          </li>
          <li class="nav-item">
            <a onClick={() => navigate("/awards")}>Awards & Accolades</a>
          </li>
          <li class="nav-item">
            <a onClick={() => navigate("/mediaCentre")}>Media Centre</a>
          </li>
        </ul>
      </div>

      <div class="logo">
        <a onClick={navigate("/")}>
          <img class="comp-logo" src={logo} alt="Company Logo"  />
        </a>
      </div>
    </div>
  );
}

export default Header;
