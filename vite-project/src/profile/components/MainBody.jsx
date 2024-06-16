import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SideBody from "./SideBody";
import Classes from "./MainBody.module.scss";

const MainBody = () => {
  const [data, setData] = useState({
    big_image: "https://via.placeholder.com/800x400?text=First+Slide",
    title: "Dummy Movie 1",
    genre: ["Action", "Drama"],
    year: "2023",
  });
  const [series, setSeriesData] = useState({
    image: "https://via.placeholder.com/800x400?text=Second+Slide",
    title: "Dummy Series 1",
    genre: ["Thriller", "Mystery"],
    year: "2022",
  });
  const [seriesTwo, setSeriesTwo] = useState({
    image: "https://via.placeholder.com/800x400?text=Third+Slide",
    title: "Dummy Series 2",
    genre: ["Comedy", "Romance"],
    year: "2021",
  });

  async function getMoviesDataList() {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/top32";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9f77e3d43emsha1acd4403df8992p16bd27jsn2333d9fdc23c",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  const seriesData = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/series/top1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9f77e3d43emsha1acd4403df8992p16bd27jsn2333d9fdc23c",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSeriesData(result);
    } catch (error) {
      console.error(error);
    }
  };

  async function getMoviesDataListTwo() {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/series/top3";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9f77e3d43emsha1acd4403df8992p16bd27jsn2333d9fdc23c",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSeriesTwo(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviesDataList();
    seriesData();
    getMoviesDataListTwo();
  }, []);

  console.log(data);
  return (
    <>
      <main>
        {/* First slide section */}

        <section className={Classes["mainbody-section"]}>
          <Carousel showThumbs={false}>
            <div className={Classes["slide"]}>
              <img src={data?.big_image} alt="first" />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{data?.title}</h1>
                  {data?.genre?.map((genre, id) => (
                    <h5 key={id}>{genre}</h5>
                  ))}
                  <h4>{data?.year}</h4>
                </div>
                <div className={Classes["btn-div"]}>
                  <button>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>

            {/* second slide section */}

            <div className={Classes["slide"]}>
              <img src={series?.image} alt="second" />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{series?.title}</h1>
                  {series?.genre?.map((genre, id) => (
                    <h5 key={id}>{genre}</h5>
                  ))}
                  <h4>{series?.year}</h4>
                </div>
                <div className={Classes["btn-div"]}>
                  <button>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>

            {/* third slide section */}

            <div className={Classes["slide"]}>
              <img src={seriesTwo?.image} alt="third" />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{seriesTwo?.title}</h1>
                  {seriesTwo?.genre?.map((genre, id) => (
                    <h5 key={id}>{genre}</h5>
                  ))}
                  <h4>{seriesTwo?.year}</h4>
                </div>
                <div className={Classes["btn-div"]}>
                  <button>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>
          </Carousel>
        </section>
        <section className={Classes["side-body"]}>
          <SideBody />
        </section>
      </main>
    </>
  );
};

export default MainBody;
