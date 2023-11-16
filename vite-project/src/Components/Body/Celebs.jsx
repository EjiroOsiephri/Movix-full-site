import React from "react";
import Classes from "../../Sass/Celebs.module.scss";
import ryan from "../../assets/ryan.jpg";
import chris from "../../assets/chris.jpg";
import jada from "../../assets/jada.jpg";

const Celebs = () => {
  const celebArray = [
    {
      image: ryan,
      name: "Ryan Reynolds",
      text: "Actor | Free Guy",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: jada,
      name: "Jada Smith",
      text: "Actress | Avatar",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: chris,
      name: "Chris Evans",
      text: "Actor | Avengers",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <main className={Classes["celebMain"]}>
        <section className={Classes["navigateToCelebSection"]}>
          <p>Celebs</p>
          <p>Events</p>
          <p>News</p>
        </section>
        <section className={Classes["avatarCelebImageSection"]}>
          {celebArray.map((item, index) => {
            return (
              <div className={Classes["flexImages"]} key={index}>
                <aside className={Classes["imgAside"]}>
                  <img src={item.image} alt="" />
                </aside>
                <aside className={Classes["flexTexts"]}>
                  <h3>{item.name}</h3>
                  <h4>{item.text}</h4>
                  <p>{item.description}</p>
                </aside>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Celebs;
