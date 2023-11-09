import React, { useState } from "react";
import Classes from "../../Sass/Headers.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

const Headers = () => {
  const [click, setClick] = useState(false);

  function showHamburger() {
    setClick(!click);
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
              : {}
          }
          className={Classes["NavLists"]}
        >
          <ul>
            <li>About</li>
            <li>Boosting</li>
            <li>Pricing</li>
            <li>Contact us</li>
          </ul>
          <button className={Classes["login-btn"]}>Log in</button>
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
