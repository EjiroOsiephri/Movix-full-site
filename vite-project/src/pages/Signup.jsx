import React from "react";
import Classes from "../Sass/Signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck, FaLaptop, FaPhone, FaTablet, FaTv } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      id: "Monthly Price",
      name1: "NGN 1200",
      name2: "NGN 1750",
      age: "NGN 3600",
      name3: "NGN 4450",
    },
    {
      id: "Video Quality",
      name1: "Good",
      name2: "Good",
      age: "Better",
      name3: "Best",
    },
    {
      id: "Resolution",
      name1: "480p",
      name2: "720p",
      age: "1080p",
      name3: "4k + HDR",
    },
    {
      id: "Devices you can switch to watch",
      name1: <FaPhone />,
      name2: <FaTablet />,
      age: <FaTv />,
      name3: <FaLaptop />,
    },
  ];

  const navigateToSignInPage = () => {
    navigate("/");
  };
  const navigateToSignUpPageStep2 = () => {
    navigate("/step2");
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
        <section className={Classes["Movix-table-section"]}>
          <table
            className={`${Classes["movix-table"]} ${Classes["responsive-table"]}`}
          >
            <thead className={Classes["movix-tableHead"]}>
              <tr className={Classes["create-table-list"]}>
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
                  <td className={Classes["id-cell"]}>{row.id}</td>
                  <td>{row.name1}</td>
                  <td>{row.name2}</td>
                  <td>{row.age}</td>
                  <td>{row.name3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <div className={Classes["signup-button"]}>
          <button onClick={navigateToSignUpPageStep2}>Next</button>
        </div>
      </main>
    </>
  );
};

export default Signup;
