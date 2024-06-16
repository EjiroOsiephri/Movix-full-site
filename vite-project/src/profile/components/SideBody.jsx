import React from "react";
import Classes from "./SideBody.module.scss";

const SideBody = () => {
  const genreData = [
    "Action",
    "Romance",
    "Comedy",
    "Thriller",
    "Sci-fi",
    "Fantasy",
    "Drama",
    "Crime",
    "Biography",
    "History",
  ];

  const topratedData = [
    {
      name: "DUNE 2",
      year: "2024",
      genre: "Action, thriller",
      rating: "8.6",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNgijMfbbgqI-PDhoPa4bo64fp90yrboBdgMHbcW9fg05sv4Zx",
    },
    {
      name: "J O K E R",
      year: "2024",
      genre: "crime, action",
      rating: "9.0",
      image:
        "data:image/webp;base64,UklGRgQHAABXRUJQVlA4IPgGAADwKgCdASq4AGoAPp0sp1OlryWllGHgE4ljbVxYNHaM+Li0qStjHZnvm6ryEGhFnLd+JUqpXWjR0v/ANcc+aPBYPNTzOj3LCdGZSylgFZtL+njw9mU1N1KqaZG8fLPGuupZMl8T62nr6iuUflfDgjKc4dEbqD4PQI12mepGZruHDHfJcIEkcjOyifhYFfzdG/KySm48YRALFQUvITj610CJ4ECI32zA2gNsxGpU/Rdo3BhIVYAyizkvL96BjBUVmImowq7gQn4pzZ173XJ2Zf5E/VelaVXCCSO4chbKBf0wWPxR7IEx9Jc5np6GFpzOddDbJE8aS6MlNMo8HmhCFJcjWjOmBxWhS0oxBSUHTK0ExGzohNk82/dOfOvvG0MqEPvh4XiTn9OFTD+Dys10ULYvdllEis+Kp5S39xtBkmYdEd4Go2I8bfQ84QOJqion9HpkLjoGFC+tiQEjKYoFRzQAAP76bvwU99rHr8pXurP4d1lygaeorqXrAkmanFK0jhcG96Enjbx+pxScaTc8Owl2xDdGI21CCPAGu+AhMmBN2dwOYc5ii9vdAxbjjVKrH1JjpxDJgoGUZjNSklPVKhhn6mwVrVucEYPiTbSpNAjj7ICnvlLvRusGBq+7KZAK80zf/11SXx6ew4K4zcIIcwxMHGDUULlwLwudIX8d7AlWP3p4U4wfmvgsJ/MmCb8iFzkZ6zHsorTqGxgyBNiKiQH/Xny7HBkyxTdpaOyM7WM8b+yCB/m6Xe1rfcS/+fYLeojnAlZFgdWHs8h8eIGrMb9yKt9DNKuaMkUh+tVvZRY6iFzCGOmddYiaDNISKjnj7awk82tf/ftle8Oyq7J9y6OeefVwowoOn1tX8d2yZaLlbeujbNNWLvH/rIL8UwWeUUzVCxoskd/gfRpqhqDznEjD4V2YbRUWyxmiKJ35Az2+zjNxYkImhdq9QGxQh3jlFZk/FEkBe72fAAydQgCcawPBSNb8rjd7g1AxlNjOSZXrGO42VPIPiyHKTpoCzmUqiET8w0AB1E/qaZFp1Wep+t7A0oYhH8bGiL+cdRksqAtDwu7CUs0vsoitMqvT65eYl5gvqijszQVElmOuxGd3o4Lmb3DHjs2v2oLK6gP3NBY4l6P0iVceq2tRdGHrlROCgj+j1CHbCzqp7gLkbm3K464Z28ndSMHt50n6zTUQQsBPeggbtfn+2Yq3NA//DUjhqMgScs9+wpBLeqvr0bo3ipT8na8Ui5HydsBqF2BBpVGxv7ue2DYiFdGhreS3stzYy9FZUYboewaZTd83gKq0MwD3amn+4ilNEkn62a8Z+3prXnH7C1PWTApZMznGW40m1AyTUdoYelnnfrvoWc81RDpmadpR5G5T6QWs4lU6kHrNLGRtlfGyq4Yb6Kt9G6XF0P6oMhzPMOeAvj8h2Ns1UV9Aqm91lJPwK5nTQ+hjOGGLknJpf4OClt5yXN8HgPko8JbdkBXEOILBs7Kyd/djH37GIWaSjmOluvGO/xIlymIiuOqOqhv0DcnW1jV6TwiglUT0sz8NlbB1FfieA+abmT985GarRzCcbY79uKswl9C6vve3GsmMObdHtgiNUiWkXBC33ZFOZAMTA+VEuMom8PErw/tdpqWr0cSU+du71Scx6PW6+/MdF+5m/DCEhoc0VkwhIvN6RgWSRFGmLkT01laCn9W1+RJht5Oxg7Zlts1TTNbKJJ+SPxR1nzzLUqZbKQGXzekMEIIpeDroayVPMhdK2fyXhJ2BVnI43r2MPgHtlwf6afF3sy2+e/9Vt54TdnMHLzb5E+z7mASvTJXj22L/439P0DqRR3wwecu26Zh66sz38p+PYg+6RasPgmSKsCLwOh6D97WsU5wN7yjNG79hqi42rBBWLXxJ85abW2P8rYmYPNJyyVqIa7uJ34YMtZ9LZC+ag3BmaZkV4C56/qGcAKEmsXh9RNRRxd35/hhje+PQL9BHdhLLhtpSuPHwKJIzjsS1QeSb0gKqgTdSVh7e3k21CJCKVE4o14ixrL0O4aUxKlbTzNI7QKzReQvui0ci9yZyEPsrAzvoCTp7UNI8nmrgAhziGw/Kcb+qEUBxcPpBzQV0JrAuMc+MpDHZ5oxAHQ7O0tY7nVU9Egs1Xr/6esTBqzQ4q3W6PRLVU196InP+0TD3KYYq4TSldr56HTS5RoWl1ksmCdswzrcwMM8lB1lxg3N7AjqcaWpN+RrdEie/gMbAXd4nvkIM3T5fsTO2wdEcvJxuUej/c+K8EKz8die6Vl7t8kKRefEqlGxt6o641+DKbS54x5UQDsuQ0RmOITDwF1PeCzi8UMioWbZ0ZKRAzv52J4bIjCYPknvoKO7sjWr4UzxCoLvehen4psEJIADIcfAAAA==",
    },
    {
      name: "A Quiet Place",
      year: "2024",
      genre: "Story, romance",
      rating: "8.6",
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "TRANSFORMERS",
      year: "2024",
      genre: "action, adventure",
      rating: "8.3",
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <>
      <main className={Classes["main-genre"]}>
        <section className={Classes["genre-section"]}>
          <div className={Classes["genre-div"]}>
            <h1>Genre</h1>
            <h4>More</h4>
          </div>
          <div className={Classes["genre-classes"]}>
            {genreData.map((data, key) => {
              return <button key={key}>{data}</button>;
            })}
          </div>
        </section>
        <section className={Classes["toprated-section"]}>
          <h1>Top Rated</h1>
          {topratedData.map((data, id) => {
            return (
              <section key={id} className={Classes["topratedData-div"]}>
                <div className={Classes["mappedData-div"]}>
                  <img src={data.image} alt="image" />
                  <div className={Classes["text-data"]}>
                    <h1>{data.name}</h1>
                    <h4>
                      {data.year} {data.genre}
                    </h4>
                    <h5>{data.rating} ⭐️⭐️⭐️⭐️☆</h5>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default SideBody;
