import React from "react";
import Classes from "../../Sass/TvSection.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ginny from "../../assets/ginny.jpg";
import house from "../../assets/house.jpg";
import pope from "../../assets/download.jpg";

const TvSection = () => {
  const movieArray = [
    {
      name: "House of the dragon",
      img: house,
      description:
        " House of the Dragon is a spinoff series of Game of Thrones. It focuses on events that took 200 years before Game of Thrones and focuses on the Targaryen family. In Game of Thornes, most of the Targaryens were dead as well as all of their dragons.",
    },
    {
      name: "Ginny and Georgia",
      img: ginny,
      description:
        " Angsty, awkward 15-year-old Ginny Miller often feels more mature than her 30-year-old mother, the irresistible, dynamic Georgia Miller. After years on the run, Georgia desperately wants to put down roots in picturesque New England and give her family something they've never had: a normal life.",
    },
    {
      name: "The pope's excorcist",
      img: pope,
      description:
        "Inspired by the actual files of Father Gabriele Amorth, Chief Exorcist of the Vatican (Academy Award®-winner Russell Crowe; 2000, Best Actor, Gladiator), The Pope's Exorcist follows Amorth as he investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has ...",
    },
  ];

  return (
    <>
      <main>
        <section className={Classes["First-tv-section"]}>
          <h1>Enjoy on your TV</h1>
          <div className={Classes["Arrow-div"]}>
            <h3>
              <FaArrowLeft />
            </h3>
            <h3>
              <FaArrowRight />
            </h3>
          </div>
        </section>
        <section className={Classes["mappingTvMovies"]}>
          {movieArray.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.img} alt="" />
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default TvSection;
