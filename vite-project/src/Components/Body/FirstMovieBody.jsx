import React, { useState } from "react";
import Classes from "../../Sass/FirstMovieBody.module.scss";
import { FaTablet, FaTv, FaLaptop } from "react-icons/fa";
import imgPhone from "../../assets/istockphoto.jpg";
import imgTv from "../../assets/Movie.jpg";
import imgLaptop from "../../assets/laptop.jpg";

const FirstMovieBody = () => {
  const [imgUrl, setImgUrl] = useState(imgTv);
  const [activeDevice, setActiveDevice] = useState("tv");

  function selectDevice(device) {
    let img;
    if (device === "tv") img = imgTv;
    if (device === "tablet") img = imgPhone;
    else img = imgLaptop;
    setImgUrl(img);
    setActiveDevice(device);
  }

  return (
    <>
      <main className={Classes["FirstMovieBodyMain"]}>
        <h1>Any Time, Anywhere</h1>
        <p>Enjoy watching movies from anywhere, anytime.</p>
        <section>
          <ul>
            <li
              onClick={() => selectDevice("tv")}
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
              onClick={() => selectDevice("laptop")}
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
              onClick={() => selectDevice("tablet")}
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
