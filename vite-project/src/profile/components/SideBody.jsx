import React from "react";
import Classes from "./SideBody.module.scss";

const SideBody = () => {
  const genreData = [
    "Action",
    "Romance",
    "Comedy",
    "Thriller",
    "Sci-fi",
    "Fantasy",
    "Drama",
    "Crime",
    "Biography",
    "History",
  ];

  const topratedData = [
    {
      name: "",
      year: "",
      genre: "",
      rating: "",
    },
    {
      name: "",
      year: "",
      genre: "",
      rating: "",
    },
    {
      name: "",
      year: "",
      genre: "",
      rating: "",
    },
    {
      name: "",
      year: "",
      genre: "",
      rating: "",
    },
  ];

  return (
    <>
      <main>
        <section className={Classes["genre-section"]}>
          <div className={Classes["genre-div"]}>
            <h1>Genre</h1>
            <h4>More</h4>
          </div>
          <div className={Classes["genre-classes"]}>
            {genreData.map((data, key) => {
              return <button key={key}>{data}</button>;
            })}
          </div>
        </section>
        <section className={Classes["toprated-section"]}></section>
      </main>
    </>
  );
};

export default SideBody;
