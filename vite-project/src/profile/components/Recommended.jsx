import React from "react";
import Classes from "./Recommended.module.scss";

const Recommended = ({ recommended }) => {
  return (
    <main className={Classes["fetchData-main"]}>
      <h1>Recommended</h1>
      <section className={Classes["fetchData-section"]}>
        {recommended.map((data, id) => (
          <section className={Classes["fetchData-div"]} key={id}>
            <img src={data.image} alt="image" />
            <div className={Classes["fetchData"]}>
              <h1>{data.title}</h1>
              <h4>{data.year}</h4>
              <h5>{data.rating}</h5>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Recommended;
