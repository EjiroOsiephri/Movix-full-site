import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link } from "react-router-dom";

const SignUpStep3 = () => {
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
        <section className={Classes["signupStep3-section"]}>
          <p> STEP 3 OF 3</p>
          <h1>Create a password to start your membership</h1>
          <h4>
            Just a few more steps and you're done! We hate paperwork, too.
          </h4>
          <form className={Classes["Signin-form"]}>
            <div className={Classes["emailSignUpField"]}>
              <input type="text" placeholder="Enter your mail" />
            </div>
            <div className={Classes["password-div"]}>
              <input type="text" placeholder="Password" />
            </div>
            <button>Sign in</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUpStep3;
