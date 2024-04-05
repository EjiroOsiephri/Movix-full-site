import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link } from "react-router-dom";
import RegisterUserModel from "../models/RegisterUserModel";
import { useRef } from "react";

const SignUpStep3 = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigateToUserProfilePage = async (e) => {
    e.preventDefault();

    try {
      const createdUser = {
        username: emailInputRef.current?.value,
        password: passwordInputRef.current?.value,
      };

      const response = await fetch("https://localhost:8000/register", {
        method: "POST",
        body: JSON.stringify(createdUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
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
        <section className={Classes["signupStep3-section"]}>
          <p> STEP 3 OF 3</p>
          <h1>Create a password to start your membership</h1>
          <h4>
            Just a few more steps and you're done! We hate paperwork, too.
          </h4>
          <form className={Classes["Signup-form"]}>
            <div className={Classes["emailSignUpField"]}>
              <input
                ref={emailInputRef}
                style={{
                  color: "black",
                }}
                type="text"
                placeholder="Enter your mail"
              />
            </div>
            <div className={Classes["password-div"]}>
              <input
                ref={passwordInputRef}
                style={{
                  color: "black",
                }}
                type="text"
                placeholder="Password"
              />
            </div>
            <button onClick={navigateToUserProfilePage}>Sign up</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUpStep3;
