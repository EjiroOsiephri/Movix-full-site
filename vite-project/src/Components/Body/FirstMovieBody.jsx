import React from "react";
import Classes from "../../Sass/FirstMovieBody.module.scss";
import { FaTablet, FaTv, FaLaptop } from "react-icons/fa";

const FirstMovieBody = () => {
  return (
    <>
      <main className={Classes["FirstMovieBodyMain"]}>
        <h1>Any Time, Anywhere</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          consequuntur ipsum labore?
        </p>
        <section>
          <ul>
            <li>
              <FaTv></FaTv>
              TV
            </li>
            <li>
              <FaLaptop></FaLaptop>
              Laptop & Desktop
            </li>
            <li>
              <FaTablet></FaTablet>
              Tablet & Mobile
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default FirstMovieBody;
