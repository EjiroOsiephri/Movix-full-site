import React, { useState } from "react";
import Classes from "../../Sass/Headers.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import useSound from "use-sound";
import clickSound from "../../assets/mis.wav";

const Headers = () => {
  const [click, setClick] = useState(false);

  const [playClickSound] = useSound(clickSound);

  function showHamburger() {
    setClick(!click);
  }
  const closeMenu = () => {
    setClick(false);
  };

  function showLoginSound() {
    playClickSound();
  }

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
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="boosting"
              onClick={closeMenu}
            >
              Boosting
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="pricing"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="contact"
              onClick={closeMenu}
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
