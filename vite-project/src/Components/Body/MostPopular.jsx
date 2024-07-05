import React from "react";
import Classes from "../../Sass/MostPopular.module.scss";
import terminator from "../../assets/terminator.jpg";
import { useNavigate } from "react-router-dom";
import rambo from "../../assets/rambo.jpg";
import nun from "../../assets/nun.jpg";
import gold from "../../assets/gold.jpg";
import xmen from "../../assets/xmen.jpg";
import gab from "../../assets/gab.jpg";
import dolittle from "../../assets/dolittle.jpg";
import earnbox from "../../assets/earnbox.jpg";
import blood from "../../assets/blood.jpg";

const MostPopular = () => {
  const navigate = useNavigate();

  const mostPopularArray = [
    { img: rambo, name: "Rambo" },
    { img: nun, name: "Nun" },
    { img: blood, name: "Blood" },
    { img: gab, name: "Gabriel" },
    { img: xmen, name: "X Men Apocalypse" },
    { img: earnbox, name: "EarnBox" },
    { img: gold, name: "City of Gold" },
    { img: dolittle, name: "Dolittle" },
  ];

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <main id="about" className={Classes["mostPopular-main"]}>
        <h1>Most Popular Movies</h1>
        <section className={Classes["movieGenre"]}>
          <div onClick={navigateToSignIn}>All</div>
          <div onClick={navigateToSignIn}>Rating</div>
          <div onClick={navigateToSignIn}>Vote</div>
          <div onClick={navigateToSignIn}>Latest</div>
          <div onClick={navigateToSignIn}>General</div>
        </section>
        <section className={Classes["popularMovieGenre"]}>
          <aside>
            <img src={terminator} alt="" />
            <h1>Terminator</h1>
            <p>
              The Terminator is a formidable robotic assassin and soldier,
              designed by the military supercomputer Skynet for infiltration and
              combat duty, towards the ultimate goal of exterminating the Human
              Resistance.
            </p>
          </aside>
          <aside>
            {mostPopularArray.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.img} alt="" />
                  <h4>{item.name}</h4>
                </div>
              );
            })}
          </aside>
        </section>
      </main>
    </>
  );
};

export default MostPopular;
