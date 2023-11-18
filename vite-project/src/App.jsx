import Celebs from "./Components/Body/Celebs";
import FirstMovieBody from "./Components/Body/FirstMovieBody";
import Footer from "./Components/Body/Footer";
import MostPopular from "./Components/Body/MostPopular";
import MovieBody from "./Components/Body/MovieBody";
import Pricing from "./Components/Body/Pricing";
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
      <Celebs />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
