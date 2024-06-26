import React, { useEffect, useState } from "react";
import Classes from "./Trending.module.scss";
import Modal from "./Modal";

const Trending = ({ selectedCategory, searchTerm }) => {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page, category = "all") => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVlZTQwY2YzYWY5MDdmMTI1MzIwODIwMjBjM2U3OCIsInN1YiI6IjY2NzE1MDllMjQwNjQwZDY1NTgzY2NlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNdaKLfxJSf8bV3jgJe1TinDAFZQK5g43QPfag3m4YE",
        },
      };

      let endpoint = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;
      if (category === "movie") {
        endpoint = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
      } else if (category === "tv") {
        endpoint = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}`;
      } else if (category === "series") {
        endpoint = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}`;
      } else if (category === "animation") {
        endpoint = `https://api.themoviedb.org/3/trending/animation/day?language=en-US&page=${page}`;
      }

      const response = await fetch(endpoint, options);
      const data = await response.json();
      setTrendingData(data.results || []);
      setTotalPages(data.total_pages || 1);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchTrailerKey = async (mediaId, mediaType) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVlZTQwY2YzYWY5MDfmZIzIwODIwMjBjM2U3OCIsInN1YiI6IjY2NzE1MDllMjQwNjQwZDY1NTgzY2NlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNdaKLfxJSf8bV3jgJe1TinDAFZQK5g43QPfag3m4YE",
      },
    };

    try {
      const endpoint =
        mediaType === "movie"
          ? `https://api.themoviedb.org/3/movie/${mediaId}/videos`
          : `https://api.themoviedb.org/3/tv/${mediaId}/videos`;

      const response = await fetch(endpoint, options);
      const data = await response.json();
      const trailer = data?.results?.find((video) => video.type === "Trailer");
      setTrailerKey(trailer ? trailer.key : null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDivClick = async (data) => {
    await fetchTrailerKey(data.id, data.media_type);
    setSelectedData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedData(null);
    setTrailerKey(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchData(currentPage, selectedCategory);
  }, [currentPage, selectedCategory]);

  const filteredData = trendingData?.filter((data) => {
    const title = data.original_title || data.name;
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {loading ? (
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
        <section>
          <h1 className={Classes["trending-texts"]}>Trending</h1>
          <main className={Classes["main-trending-container"]}>
            {filteredData?.length === 0 ? (
              <div className={Classes["no-data"]}>No Data Found</div>
            ) : (
              filteredData?.map((data) => (
                <div
                  className={Classes["mappedDivTexts"]}
                  key={data.id}
                  onClick={() => handleDivClick(data)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                    alt={data.name}
                  />
                  <section>
                    <h1>{data.original_title || data.name}</h1>
                    <h4>{data.vote_average}</h4>
                  </section>
                </div>
              ))
            )}
          </main>
          {trendingData.length === 0 && (
            <div className={Classes["no-data"]}>No Data Found</div>
          )}
          <div className={Classes["pagination"]}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          {selectedData && (
            <Modal
              show={showModal}
              onClose={handleCloseModal}
              data={selectedData}
              trailerKey={trailerKey}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Trending;
