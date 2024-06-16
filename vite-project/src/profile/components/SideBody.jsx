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
      name: "DUNE 2",
      year: "2024",
      genre: "Action, thriller",
      rating: "8.6",
      image: "https://m.imdb.com/title/tt15239678/?ref_=ls_i_1",
    },
    {
      name: "J O K E R",
      year: "2024",
      genre: "crime, action",
      rating: "9.0",
      image: "https://m.imdb.com/title/tt11315808/?ref_=ls_i_2",
    },
    {
      name: "A Quiet Place",
      year: "2024",
      genre: "Story, romance",
      rating: "8.6",
      image: "https://m.imdb.com/title/tt13433802/?ref_=ls_i_3",
    },
    {
      name: "TRANSFORMERS",
      year: "2024",
      genre: "action, adventure",
      rating: "8,3",
      image: "https://m.imdb.com/title/tt8864596/?ref_=ls_i_23",
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
