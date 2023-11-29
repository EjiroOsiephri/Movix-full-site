import React, { useState } from "react";
import Classes from "../../Sass/Headers.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import useSound from "use-sound";
import clickSound from "../../assets/mis.wav";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const [playClickSound] = useSound(clickSound);

  function showHamburger() {
    setClick(!click);
  }

  const closeMenu = () => {
    setClick(false);
  };

  function showLoginSound() {
    playClickSound();
    navigate("/signup");
  }

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <>
      <header className={Classes["Header-main"]}>
        <h1>
          Movi<span>x.</span>
        </h1>
        <nav
          style={
            click
              ? {
                  left: 0,
                }
              : {
                  left: "-100%",
                }
          }
          className={Classes["NavLists"]}
        >
          <ul>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="about"
              onClick={() => handleLinkClick("about")}
              className={activeLink === "about" ? Classes["active-link"] : ""}
            >
              About
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="boosting"
              onClick={() => handleLinkClick("boosting")}
              className={
                activeLink === "boosting" ? Classes["active-link"] : ""
              }
            >
              Boosting
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="pricing"
              onClick={() => handleLinkClick("pricing")}
              className={activeLink === "pricing" ? Classes["active-link"] : ""}
            >
              Pricing
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="contact"
              onClick={() => handleLinkClick("contact")}
              className={activeLink === "contact" ? Classes["active-link"] : ""}
            >
              Contact us
            </Link>
          </ul>
          <button onClick={showLoginSound} className={Classes["login-btn"]}>
            Sign up
          </button>
        </nav>
        <div className={Classes["hamburger-section"]} onClick={showHamburger}>
          {click ? (
            <FaTimes
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          ) : (
            <FaBars
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Headers;
