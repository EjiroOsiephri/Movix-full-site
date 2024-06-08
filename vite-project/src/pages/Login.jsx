import React, { useRef, useEffect, useState } from "react";
import Classes from "../Sass/Signin.module.scss";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const signinHandler = async (e) => {
    e.preventDefault();
    setError("");
    setPasswordError("");
    setEmailError("");

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Enter a password greater than 6");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInputRef?.current?.value,
          password: passwordInputRef?.current?.value,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to sign in.");
      }

      console.log(responseData);
      setIsLoading(false);
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      navigate("/profile");
    } catch (error) {
      setIsLoading(true);
      console.error("Error signing in:", error);
      setError(error.message);
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      setIsLoading(false);
    }
  };

  const NavigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <main className={Classes["signin-main"]}>
        <div className={Classes["logo"]}>
          <h1
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Movi<span>x.</span>
          </h1>
        </div>
        <section className={Classes["signin-section"]}>
          <div className={Classes["signin-div"]}>
            <h1>Sign in</h1>
            <form className={Classes["Signin-form"]}>
              {error && <p className={Classes["error-text"]}>{error}</p>}
              <div className={Classes["email-phoneNumber"]}>
                <input
                  ref={emailInputRef}
                  type="text"
                  placeholder="Email or phone number"
                />
                {emailError && (
                  <p className={Classes["error-text"]}>{emailError}</p>
                )}
              </div>
              <div className={Classes["password-div"]}>
                <input
                  type="text"
                  placeholder="Password"
                  ref={passwordInputRef}
                />
                {passwordError && (
                  <p className={Classes["error-text"]}>{passwordError}</p>
                )}
              </div>

              <button type="button" onClick={signinHandler}>
                {isLoading ? <LoadingSpinner /> : "SIGN IN"}
              </button>
            </form>
            <section className={Classes["enquiry-section"]}>
              <aside>
                <div className={Classes["checkbox"]}>
                  <input type="checkbox" />
                </div>
                <p>Remember me</p>
              </aside>
              <p>Need help?</p>
            </section>
            <h2>
              New to Movix? <p onClick={NavigateToSignUp}>Sign up now</p>
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
