import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SideBody from "./SideBody";
import Classes from "./MainBody.module.scss";
import Recommended from "./Recommended";
import Trending from "./Trending";
import Modal from "./Modal"; // Import the Modal component

const MainBody = () => {
  const [trending, setTrending] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState({});

  async function fetchTrending() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVlZTQwY2YzYWY5MDdmMTI1MzIwODIwMjBjM2U3OCIsInN1YiI6IjY2NzE1MDllMjQwNjQwZDY1NTgzY2NlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNdaKLfxJSf8bV3jgJe1TinDAFZQK5g43QPfag3m4YE",
      },
    };

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?page=1",
        options
      );
      const data = await response.json();
      console.log(data);
      setTrending(data.results);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  }

  async function fetchTrailerKey(mediaId, mediaType) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVlZTQwY2YzYWY5MDdmMTI1MzIwODIwMjBjM2U3OCIsInN1YiI6IjY2NzE1MDllMjQwNjQwZDY1NTgzY2NlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNdaKLfxJSf8bV3jgJe1TinDAFZQK5g43QPfag3m4YE",
      },
    };

    try {
      const endpoint =
        mediaType === "movie"
          ? `https://api.themoviedb.org/3/movie/${mediaId}/videos`
          : `https://api.themoviedb.org/3/tv/${mediaId}/videos`;

      const response = await fetch(endpoint, options);
      const data = await response.json();
      console.log(data);
      const trailer = data?.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      setTrailerKey(trailer ? trailer.key : null);
    } catch (error) {
      console.error("Error fetching trailer key:", error);
    }
  }

  useEffect(() => {
    fetchTrending();
  }, []);

  const handleWatchClick = async (item) => {
    await fetchTrailerKey(item.id, item.media_type);
    setSelectedMovie(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTrailerKey(null);
    setSelectedMovie({});
  };

  return (
    <main className={Classes["main-container"]}>
      <section className={Classes["mainbody-section"]}>
        <Carousel showThumbs={false}>
          {trending?.slice(0, 6).map((item, index) => (
            <div className={Classes["slide"]} key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title || item.name}
              />
              <section className={Classes["textData"]}>
                <div className={Classes["textData-div"]}>
                  <h1>{item.title || item.name}</h1>
                  <div className={Classes["mini-text-data"]}>
                    <h5>{item.media_type}</h5>
                    <h5>
                      {new Date(
                        item.release_date || item.first_air_date
                      ).getFullYear()}
                    </h5>
                  </div>
                </div>
                <div className={Classes["btn-div"]}>
                  <button onClick={() => handleWatchClick(item)}>Watch</button>
                  <button>+</button>
                </div>
              </section>
            </div>
          ))}
        </Carousel>

        <section className={Classes["recommended-section"]}>
          <Recommended />
        </section>

        <section className={Classes["trending-section"]}>
          <Trending />
        </section>
      </section>

      <section className={Classes["side-body"]}>
        <SideBody />
      </section>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        data={selectedMovie}
        trailerKey={trailerKey}
      />
    </main>
  );
};

export default MainBody;
