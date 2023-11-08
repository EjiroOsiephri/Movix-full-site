import React, { useState } from "react";
import Classes from "../../Sass/MovieBody.module.scss";
import img1 from "../../assets/eagle-poster.jpg";
import img2 from "../../assets/maxresdefault.jpg";

import img4 from "../../assets/scale.jpg";
import img5 from "../../assets/b.jpg";
import img6 from "../../assets/d.jpg";
import img7 from "../../assets/m.jpg";

const MovieBody = () => {
  const [imgUrl, setImgUrl] = useState(img5);

  const imgArray = [
    { name: img1 },
    { name: img2 },
    { name: img4 },
    { name: img5 },
    { name: img6 },
    { name: img7 },
  ];

  const changeImage = (index) => {
    const newImgUrl = imgArray[index].name;
    setImgUrl(newImgUrl);
  };

  return (
    <>
      <main className={Classes["Main-movieBody"]}>
        <img src={imgUrl} alt="" />
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
