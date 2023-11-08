import React from "react";
import Classes from "../../Sass/Headers.module.scss";

const Headers = () => {
  return (
    <>
      <header className={Classes["Header-main"]}>
        <h1>
          Movi<span>x.</span>
        </h1>
        <ul>
          <li>About</li>
          <li>Boosting</li>
          <li>Pricing</li>
          <li>Contact us</li>
        </ul>
        <button className={Classes["login-btn"]}>Log in</button>
      </header>
    </>
  );
};

export default Headers;
