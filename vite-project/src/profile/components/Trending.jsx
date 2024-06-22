import React, { useEffect, useState } from "react";
import Classes from "./Trending.module.scss";

const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVlZTQwY2YzYWY5MDdmMTI1MzIwODIwMjBjM2U3OCIsInN1YiI6IjY2NzE1MDllMjQwNjQwZDY1NTgzY2NlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNdaKLfxJSf8bV3jgJe1TinDAFZQK5g43QPfag3m4YE",
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        options
      );

      const data = await response.json();
      setTrendingData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className={Classes["trending-texts"]}>Trending</h1>
      <main className={Classes["main-trending-container"]}>
        {trendingData?.results?.map((data) => (
          <div className={Classes["mappedDivTexts"]} key={data.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={data.name}
            />
            <section>
              <h1>{data.original_title || data.name}</h1>
              <h4>{data.vote_average}</h4>
            </section>
          </div>
        ))}
      </main>
      <div className={Classes["container"]}>
        <div className={Classes["loading-container"]}>
          <div
            className={`${Classes["loading-bar"]} ${Classes["gradient-1"]} ${Classes["animate-loading"]}`}
          ></div>
          <div
            className={`${Classes["loading-bar"]} ${Classes["gradient-2"]} ${Classes["animate-loading"]}`}
          ></div>
          <div
            className={`${Classes["loading-bar"]} ${Classes["gradient-3"]} ${Classes["animate-loading"]}`}
          ></div>
          <div
            className={`${Classes["loading-bar"]} ${Classes["gradient-2"]} ${Classes["animate-loading"]}`}
          ></div>
          <div
            className={`${Classes["loading-bar"]} ${Classes["gradient-1"]} ${Classes["animate-loading"]}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Trending;
