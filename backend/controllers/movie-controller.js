const GetMovieDataFromApi = async (req, res) => {
  const url = "https://api-gate2.movieglu.com/filmsNowShowing/?n=25";
  const options = {
    headers: {
      client: "MOVI_214",
      "x-api-key": "XfFqy3ztwX7RMpuuBDzI82LcWqYXLNB3bwTAEAhb",
      authorization: `Basic TU9WSV8yMTRfWFg6eVUyTWFmbmVaTW5N=`,
      territory: "XX",
      "api-version": "v200",
      geolocation: "-22.0;14.0",
      "device-datetime": new Date().toISOString(),
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = GetMovieDataFromApi;
