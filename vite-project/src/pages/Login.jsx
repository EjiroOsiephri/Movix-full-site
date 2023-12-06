import React from "react";
import Classes from "../Sass/Signin.module.scss";

const Login = () => {
  return (
    <>
      <main className={Classes["signin-main"]}>
        <section className={Classes["signin-section"]}>
          <h1>Sign in</h1>
          <form className={Classes["Signin-form"]}>
            <div className={Classes["email-phoneNumber"]}>
              <input type="text" placeholder="Email or phone number" />
            </div>
            <div className={Classes["password-div"]}>
              <input type="text" placeholder="Password" />
            </div>
            <button>Sign in</button>
          </form>
          <div className={Classes["checkbox"]}>
            <input type="checkbox" name="Remember me" id="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
