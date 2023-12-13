import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const tableData = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Doe", age: 22 },
  ];

  const navigateToSignInPage = () => {
    navigate("/");
  };
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
        <section className={Classes["step-count-section"]}>
          <p>
            Step{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              1{" "}
            </span>
            out of{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              3
            </span>
          </p>
          <h1>Choose the right plan for you</h1>
          <h3>
            <FaCheck
              color="red"
              style={{
                fontWeight: 200,
              }}
              size={25}
            />
            <span>Watch all you want, ad free</span>
          </h3>
          <h3>
            <FaCheck
              style={{
                fontWeight: 200,
              }}
              color="red"
              size={25}
            />
            <span>Recommendations just for you</span>
          </h3>
          <h3>
            <FaCheck
              style={{
                fontWeight: 200,
              }}
              color="red"
              size={25}
            />
            <span>Change or cancel your plan anytime</span>
          </h3>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Mobile</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Signup;
