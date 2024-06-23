import React, { useState } from "react";
import Classes from "./Modal.module.scss";

const Modal = ({ show, onClose, data = {}, trailerKey }) => {
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

  const posterImage =
    data.images?.poster?.[1]?.medium?.film_image ||
    (data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : null);

  const filmName =
    data.film_name || data.title || data.name || "Film Name Unavailable";
  const synopsisLong =
    data.synopsis_long || data.overview || "Synopsis Unavailable";
  const ageRating = data.age_rating?.[0]?.rating || data.vote_average || "N/A";
  const ageAdvisory =
    data.age_rating?.[0]?.age_advisory ||
    (data.adult ? "Adult" : "General Audience");
  const ageRatingImage =
    data.age_rating?.[0]?.age_rating_image || data.age_rating;
  const releaseDate =
    data.release_dates?.[0]?.release_date ||
    data.release_date ||
    "Release Date Unavailable";

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
              {posterImage && <img src={posterImage} alt={filmName} />}
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
          <h1>{filmName}</h1>
          <p>{synopsisLong}</p>
          <div>
            <p className={Classes["age-rating"]}>
              Age Rating: {ageRating} ({ageAdvisory})
            </p>
            {ageRatingImage && <img src={ageRatingImage} alt="Age Rating" />}
          </div>
          <section>
            <p>Release Date: {releaseDate}</p>
            <button>+</button>
          </section>
        </div>
      </div>
      <button className={Classes["close-button"]} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Modal;
