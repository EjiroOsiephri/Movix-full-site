import React, { useState } from "react";
import Classes from "../../Sass/MovieBody.module.scss";
import img1 from "../../assets/eagle-poster.jpg";
import img2 from "../../assets/maxresdefault.jpg";
import img4 from "../../assets/scale.jpg";
import img5 from "../../assets/b.jpg";
import img6 from "../../assets/d.jpg";
import img7 from "../../assets/m.jpg";

const MovieBody = () => {
  const [imgUrl, setImgUrl] = useState(img4);
  const [imgName, setImageName] = useState("Stranger Things");
  const [imgDescription, setImgDescription] = useState(
    "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  );

  const imgArray = [
    {
      name: img1,
      imgName: "EAGLE",
      imgDescription:
        "Enjoying the fantasies of a man with mastery over swords",
    },
    {
      name: img2,
      imgName: "Avatar",
      imgDescription:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    },
    {
      name: img4,
      imgName: "Jungle Cruise",
      imgDescription:
        "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
    },
    {
      name: img5,
      imgName: "Stranger Things",
      imgDescription:
        "Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    },
    {
      name: img6,
      imgName: "Ben 10",
      imgDescription:
        "A hugely popular TV series about a 10 year old boy with the power to transform into 10 different alien species. Ben Tennyson discovers the Omnitrix, a mysterious alien device with the power to transform the wearer into ten different alien species",
    },
    {
      name: img7,
      imgName: "Game of Thrones",
      imgDescription:
        "A Game of Thrones takes place on the fictional continent of Westeros, which experiences years-long seasons of varying intensity. The majority of Westeros comprises the Seven Kingdoms, and a monumental wall of ice separates the northernmost portion of the continent from the frigid wasteland beyond.",
    },
  ];

  const changeImage = (index) => {
    const newImgUrl = imgArray[index].name;
    const newImgName = imgArray[index].imgName;
    const newImgDescription = imgArray[index].imgDescription;
    setImgUrl(newImgUrl);
    setImageName(newImgName);
    setImgDescription(newImgDescription);
  };

  return (
    <>
      <main className={Classes["Main-movieBody"]}>
        <img src={imgUrl} alt="" />
        <section className={Classes["textSection"]}>
          <h3>2021 | 18+ | Series</h3>
          <h1>{imgName}</h1>
          <h4>{imgDescription}</h4>
          <div className={Classes["btn-div"]}>
            <button>Watch</button>
            <button>Trailer</button>
          </div>
        </section>

        <section className={Classes["mapImgArray"]}>
          {imgArray.map((item, index) => {
            return (
              <div
                className={Classes["movieBodyScrollImg"]}
                key={index}
                onClick={() => changeImage(index)}
              >
                <img src={item.name} alt="" />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default MovieBody;
