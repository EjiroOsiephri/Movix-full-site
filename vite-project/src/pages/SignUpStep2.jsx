import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link } from "react-router-dom";

const SignUpStep2 = () => {
  return (
    <>
      <main className={Classes["signup-main"]}>
        <header className={Classes["signup-header"]}>
          <div className={Classes["signup-div"]}>
            <h1 onClick={navigateToSignInPage}>
              MOVI<span>X.</span>
            </h1>
            <h3>
              <Link to="/signin">Sign in</Link>
            </h3>
          </div>
          <div className={Classes["Line-div"]}></div>
        </header>
      </main>
    </>
  );
};

export default SignUpStep2;
