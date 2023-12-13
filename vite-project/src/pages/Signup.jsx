import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const navigateToSignInPage = () => {
    navigate("/");
  };
  return (
    <>
      <main>
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

export default Signup;
