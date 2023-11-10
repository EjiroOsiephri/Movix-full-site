import React, { useState } from "react";
import Classes from "../../Sass/FirstMovieBody.module.scss";
import { FaTablet, FaTv, FaLaptop } from "react-icons/fa";
import imgPhone from "../../assets/istockphoto.jpg";
import imgTv from "../../assets/Movie.jpg";
import imgLaptop from "../../assets/laptop.jpg";

const FirstMovieBody = () => {
  const [imgUrl, setImgUrl] = useState(imgTv);
  const [activeDevice, setActiveDevice] = useState("tv");

  function clickTv() {
    setImgUrl(imgTv);
    setActiveDevice("tv");
  }

  function clickLaptop() {
    setImgUrl(imgLaptop);
    setActiveDevice("laptop");
  }

  function clickTablet() {
    setImgUrl(imgPhone);
    setActiveDevice("tablet");
  }

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
            <li
              onClick={clickTv}
              style={
                activeDevice === "tv"
                  ? {
                      borderBottom: "2px solid red",
                    }
                  : {}
              }
            >
              <FaTv size={20}></FaTv>
              TV
            </li>
            <li
              onClick={clickLaptop}
              style={
                activeDevice === "laptop"
                  ? {
                      borderBottom: "2px solid red",
                    }
                  : {}
              }
            >
              <FaLaptop size={23}></FaLaptop>
              Laptop & Desktop
            </li>
            <li
              onClick={clickTablet}
              style={
                activeDevice === "tablet"
                  ? {
                      borderBottom: "2px solid red",
                    }
                  : {}
              }
            >
              <FaTablet size={20}></FaTablet>
              Tablet & Mobile
            </li>
          </ul>
        </section>
        <section className={Classes["movieDevices"]}>
          <p>Stream and Enjoy your favorites on your {}</p>
          <img src={imgUrl} alt="" />
        </section>
      </main>
    </>
  );
};

export default FirstMovieBody;
