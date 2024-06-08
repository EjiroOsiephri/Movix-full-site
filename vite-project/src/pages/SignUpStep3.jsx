import Classes from "../Sass/Signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

const SignUpStep3 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const navigateToUserProfilePage = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    const createdUser = { email, password };

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        body: JSON.stringify(createdUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData);
        throw new Error(responseData.error || responseData.message);
      }

      console.log(responseData);
      setIsLoading(false);
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      navigate("/profile");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <main className={Classes["signup-main"]}>
        <header className={Classes["signup-header"]}>
          <div className={Classes["signup-div"]}>
            <h1 onClick={navigateToHome}>
              MOVI<span>X.</span>
            </h1>
            <h3>
              <Link to="/signin">Sign in</Link>
            </h3>
          </div>
          <div className={Classes["Line-div"]}></div>
        </header>
        <section className={Classes["signupStep3-section"]}>
          <p>STEP 3 OF 3</p>
          <h1>Create a password to start your membership</h1>
          <h4>
            Just a few more steps and you're done! We hate paperwork, too.
          </h4>
          <form className={Classes["Signup-form"]}>
            {error && <p className={Classes["error-text"]}>{error}</p>}
            <div className={Classes["emailSignUpField"]}>
              <input
                ref={emailInputRef}
                style={{
                  color: "black",
                  borderColor: emailError ? "red" : "black",
                }}
                type="text"
                placeholder="Enter your mail"
              />
              {emailError && (
                <p className={Classes["error-text"]}>{emailError}</p>
              )}
            </div>
            <div className={Classes["password-div"]}>
              <input
                ref={passwordInputRef}
                style={{
                  color: "black",
                  borderColor: passwordError ? "red" : "black",
                }}
                type="password"
                placeholder="Password"
              />
              {passwordError && (
                <p className={Classes["error-text"]}>{passwordError}</p>
              )}
            </div>
            <button onClick={navigateToUserProfilePage} disabled={isLoading}>
              {isLoading ? <LoadingSpinner /> : "Signup"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUpStep3;
