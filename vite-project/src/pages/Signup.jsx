import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <main>
        <header className={Classes["signup-header"]}>
          <div className={Classes["signup-div"]}>
            <h1>
              MOVI<span>X</span>
            </h1>
            <h3>
              <Link to="/signin">Sign in</Link>
            </h3>
            <hr />
          </div>
        </header>
      </main>
    </>
  );
};

export default Signup;
