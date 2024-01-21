import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import images from "../assets/images.png";

const SignUpStep2 = () => {
  const navigate = useNavigate();

  const navigateToSignUpPageStep2 = () => {
    navigate("/step3");
  };
  return (
    <>
      <main className={Classes["signup-main"]}>
        <header className={Classes["signup-header"]}>
          <div className={Classes["signup-div"]}>
            <h1>
              MOVI<span>X.</span>
            </h1>
            <h3>
              <Link to="/signin">Sign in</Link>
            </h3>
          </div>
          <div className={Classes["Line-div"]}></div>
        </header>
        <aside className={Classes["step2-asideContainer"]}>
          <img src={images} alt="" />
          <p> STEP 2 OF 3</p>
          <h1>Finish setting up your account</h1>
          <h4>
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </h4>
          <button onClick={navigateToSignUpPageStep2}>Next</button>
        </aside>
      </main>
    </>
  );
};

export default SignUpStep2;
