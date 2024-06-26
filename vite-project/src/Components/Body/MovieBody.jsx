import React, { useState } from "react";
import Classes from "../../Sass/MovieBody.module.scss";
import img1 from "../../assets/eagle-poster.jpg";
import img2 from "../../assets/maxresdefault.jpg";
import img4 from "../../assets/scale.jpg";
import img5 from "../../assets/b.jpg";
import img6 from "../../assets/d.jpg";
import img7 from "../../assets/m.jpg";
import { useNavigate } from "react-router-dom";

const MovieBody = () => {
  const [imgUrl, setImgUrl] = useState(img4);
  const [imgName, setImageName] = useState("Jungle Cruise");
  const [imgDescription, setImgDescription] = useState(
    "A paraplegic Marine dispatched to the moon Pandora on a unique mission "
  );

  const navigate = useNavigate();

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
        "Stranger Things is set in the fictional rural town of Hawkins, Indiana",
    },
    {
      name: img6,
      imgName: "Ben 10",
      imgDescription:
        "A hugely popular TV series about a 10 year old boy with the power to transform",
    },
    {
      name: img7,
      imgName: "Game of Thrones",
      imgDescription:
        "A Game of Thrones takes place on the fictional continent of Westeros",
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

  const navigateToLoginPage = () => {
    navigate("/signin");
  };

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${imgUrl})`,
          height: "700px",
          WebkitBackgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={Classes["Main-movieBody"]}
      >
        <section
          className={Classes["textSection"]}
          style={{
            backgroundColor: "black",
            opacity: 0.7,
            padding: "2rem",
            position: "relative",
            top: "50px",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        >
          <h3>2021 | 18+ | Series</h3>
          <h1>{imgName}</h1>
          <h4>{imgDescription}</h4>
        </section>
        <div className={Classes["btn-div"]}>
          <button onClick={navigateToLoginPage}>Watch</button>
          <button onClick={navigateToLoginPage}>Trailer</button>
        </div>
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
