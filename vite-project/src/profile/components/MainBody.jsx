import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SideBody from "./SideBody";
import Classes from "./MainBody.module.scss";
import Recommended from "./Recommended";

const MainBody = () => {
  const [data, setData] = useState(null);
  const [series, setSeriesData] = useState(null);
  const [seriesTwo, setSeriesTwo] = useState(null);
  const [recommended, setRecommended] = useState([]);

  async function fetchData(url, setState, fallbackData = {}) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9d6f8bef33mshb71a74827b38bffp15b34fjsn6cf0f7ef1fca",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("API limit exceeded");
      }
      const result = await response.json();
      setState(result);
      console.log(result);
    } catch (error) {
      console.error(error);
      // Set fallback data if API limit is exceeded
      setState(fallbackData);
    }
  }

  useEffect(() => {
    fetchData("https://imdb-top-100-movies.p.rapidapi.com/top1", setData, {
      big_image:
        "https://i0.wp.com/itsmoreofacomment.com/wp-content/uploads/2021/09/Dune-Movie-Official-Poster-banner-feature.jpg?w=1440&ssl=1",
      title: "D U N E",
      genre: ["Action", "Drama"],
      year: "2023",
    });
    fetchData(
      "https://imdb-top-100-movies.p.rapidapi.com/top2",
      setSeriesData,
      {
        image: "https://via.placeholder.com/800x400?text=Second+Slide",
        title: "Dummy Series 1",
        genre: ["Thriller", "Mystery"],
        year: "2022",
      }
    );
    fetchData("https://imdb-top-100-movies.p.rapidapi.com/top3", setSeriesTwo, {
      image: "https://via.placeholder.com/800x400?text=Third+Slide",
      title: "Dummy Series 2",
      genre: ["Comedy", "Romance"],
      year: "2021",
    });

    // Fetch recommended data
    fetchData("https://imdb-top-100-movies.p.rapidapi.com/", setRecommended);
  }, []);

  return (
    <main className={Classes["main-container"]}>
      <section className={Classes["mainbody-section"]}>
        <Carousel showThumbs={false}>
          {/* First slide section */}
          {data && (
            <div className={Classes["slide"]}>
              <img src={data?.big_image} alt="first" />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{data?.title}</h1>
                  <div className={Classes["mini-text-data"]}>
                    {data?.genre.map((genre, id) => (
                      <h5 key={id}>{genre}</h5>
                    ))}
                    <h5>{data?.year}</h5>
                  </div>
                </div>
                <div className={Classes["btn-div"]}>
                  <button>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>
          )}

          {/* Second slide section */}
          {series && (
            <div className={Classes["slide"]}>
              <img src={series?.image} alt="second" />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{series?.title}</h1>
                  <div className={Classes["mini-text-data"]}>
                    {series.genre.map((genre, id) => (
                      <h5 key={id}>{genre}</h5>
                    ))}
                    <h5>{series?.year}</h5>
                  </div>
                </div>
                <div className={Classes["btn-div"]}>
                  <button>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>
          )}

          {/* Third slide section */}
          {seriesTwo && (
            <div className={Classes["slide"]}>
              <img src={seriesTwo?.image} alt="third" />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{seriesTwo?.title}</h1>
                  <div className={Classes["mini-text-data"]}>
                    {seriesTwo?.genre.map((genre, id) => (
                      <h5 key={id}>{genre}</h5>
                    ))}
                    <h5>{seriesTwo?.year}</h5>
                  </div>
                </div>
                <div className={Classes["btn-div"]}>
                  <button>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>
          )}
        </Carousel>
      </section>

      <section className={Classes["recommended-section"]}>
        <Recommended recommended={recommended?.slice(0, 3)} />
      </section>

      <section className={Classes["side-body"]}>
        <SideBody />
      </section>
    </main>
  );
};

export default MainBody;
