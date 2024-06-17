import React, { useEffect, useState } from "react";
import Classes from "./Recommended.module.scss";

const Recommended = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
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
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className={Classes["fetchData-main"]}>
        <h1>Recommended</h1>
        <section className={Classes["fetchData-section"]}>
          {data.map((data, id) => {
            return (
              <section className={Classes["fetchData-div"]} key={id}>
                <img src={data.image} alt="image" />
                <div className={Classes["fetchData"]}></div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Recommended;
