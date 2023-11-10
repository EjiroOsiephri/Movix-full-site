import FirstMovieBody from "./Components/Body/FirstMovieBody";
import MostPopular from "./Components/Body/MostPopular";
import MovieBody from "./Components/Body/MovieBody";
import TvSection from "./Components/Body/TvSection";
import Headers from "./Components/Headers/Headers";

function App() {
  return (
    <>
      <Headers />
      <MovieBody />
      <FirstMovieBody />
      <TvSection />
      <MostPopular />
    </>
  );
}

export default App;
