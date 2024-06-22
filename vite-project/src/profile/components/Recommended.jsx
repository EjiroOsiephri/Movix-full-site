import React, { useEffect, useState } from "react";
import Classes from "./Recommended.module.scss";

const Recommended = () => {
  const [recommended, setRecommended] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = "http://localhost:8000/api/movies"; // Your backend URL

    try {
      const response = await fetch(url);
      const result = await response.json();
      setRecommended(result.films);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
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
          </div>
        </div>
      ) : (
        <main className={Classes["fetchData-main"]}>
          <h1>Recommended</h1>
          <section className={Classes["fetchData-section"]}>
            {recommended?.map((data, id) => (
              <section className={Classes["fetchData-div"]} key={id}>
                <img
                  src={data.images?.poster[1]?.medium.film_image}
                  alt={data.film_name}
                />
                <div className={Classes["fetchData"]}>
                  <div>
                    <h1>{data.film_name}</h1>
                    <h4>{data.release_dates[0].release_date}</h4>
                  </div>
                  <h5>{data.age_rating[0].rating}</h5>
                </div>
              </section>
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default Recommended;
