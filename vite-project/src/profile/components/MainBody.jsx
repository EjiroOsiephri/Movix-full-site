import React, { useState } from "react";
import { useEffect } from "react";

const MainBody = () => {
  const [data, setData] = useState();
  const [series, setSeriesData] = useState();
  const [seriesTwo, setSeriesTwo] = useState();

  async function getMoviesDataList() {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/top1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4630179d98mshe00c5ce74c0ec0bp1c0a0djsn8f770d9cf2a8",
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
    const url = "https://imdb-top-100-movies.p.rapidapi.com/series/top5";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4630179d98mshe00c5ce74c0ec0bp1c0a0djsn8f770d9cf2a8",
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
    const url = "https://imdb-top-100-movies.p.rapidapi.com/top15";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4630179d98mshe00c5ce74c0ec0bp1c0a0djsn8f770d9cf2a8",
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
    getMoviesDataListTwo;
  }, []);

  return (
    <>
      <main>
        <div className="first-slide-div">
          <img src={data?.big_image} alt="first" />
          <section className="textData">
            <h1>{data?.title}</h1>
            {data?.genre?.map((data) => {
              return <h5>{data}</h5>;
            })}
            <h4>{data?.year}</h4>
            <div className="btn-div">
              <button>Watch</button>
              <button>+</button>
            </div>
          </section>
        </div>
        <div className="second-slide-div">
          <img src={series?.image} alt="second" />
          <section className="textData">
            <h1>{series?.title}</h1>
            {series?.genre?.map((data) => {
              return <h5>{data}</h5>;
            })}
            <h4>{series?.year}</h4>
            <div className="btn-div">
              <button>Watch</button>
              <button>+</button>
            </div>
          </section>
        </div>
        <div className="third-slide-div">
          <img src={seriesTwo?.image} alt="second" />
          <section className="textData">
            <div className="btn-div">
              <h1>{seriesTwo?.title}</h1>
              {/* {seriesTwo.genre?.map((data) => {
            return <h5>{data}</h5>;
          })} */}
              <h4>{seriesTwo?.year}</h4>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainBody;
