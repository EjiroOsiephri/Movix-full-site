import React, { useState } from "react";
import Classes from "./Modal.module.scss";

const Modal = ({ show, onClose, data, trailerKey }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!show) {
    return null;
  }

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  const trailerUrl = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}`
    : data.film_trailer;

  return (
    <div className={Classes["modal-overlay"]}>
      <div className={Classes["modal"]}>
        <div className={Classes["media-container"]}>
          {isPlaying ? (
            <iframe
              width="560"
              height="315"
              src={trailerUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={data.images?.poster[1]?.medium.film_image}
                alt={data.film_name}
              />
              <button
                className={Classes["play-button"]}
                onClick={handlePlayButtonClick}
              >
                ▶
              </button>
            </>
          )}
        </div>
        <div className={Classes["modal-data-div"]}>
          <h1>{data.film_name}</h1>
          <p>{data.synopsis_long}</p>
          <div>
            <p className={Classes["age-rating"]}>
              Age Rating: {data.age_rating[0].rating} (
              {data.age_rating[0].age_advisory})
            </p>
            <img src={data.age_rating[0].age_rating_image} alt="Age Rating" />
          </div>
          <p>Release Date: {data.release_dates[0].release_date}</p>
        </div>
      </div>
      <button className={Classes["close-button"]} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Modal;
