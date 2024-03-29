import React from "react";
import Classes from "../Sass/Signin.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogleCallbackFn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:8000/auth/google", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Error signing in with Google:", error);
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
              <div className={Classes["email-phoneNumber"]}>
                <input type="text" placeholder="Email or phone number" />
              </div>
              <div className={Classes["password-div"]}>
                <input type="text" placeholder="Password" />
              </div>
              <button
                onClick={signInWithGoogleCallbackFn}
                style={{
                  marginBottom: 0,
                  backgroundColor: "initial",
                }}
              >
                Sign in with google
              </button>
              <button>Sign in</button>
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
