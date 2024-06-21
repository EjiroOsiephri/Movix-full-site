import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignUpStep2 from "./pages/SignUpStep2";
import SignUpStep3 from "./pages/SignUpStep3";
import ProfilePage from "./profile/pages/ProfilePage";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./profile/components/ProtectedRoutes";
import { useEffect } from "react";

function App() {
  // const fetchData = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVlZTQwY2YzYWY5MDdmMTI1MzIwODIwMjBjM2U3OCIsInN1YiI6IjY2NzE1MDllMjQwNjQwZDY1NTgzY2NlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNdaKLfxJSf8bV3jgJe1TinDAFZQK5g43QPfag3m4YE",
  //     },
  //   };

  //   fetch(
  //     "https://api.themoviedb.org/3/account/21334271/favorite/movies",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/step2" element={<SignUpStep2 />} />
        <Route path="/step3" element={<SignUpStep3 />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
