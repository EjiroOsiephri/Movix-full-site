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
  //   const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "2fe232875cmsh9e769ef8b4c101ep1918d8jsn9a29639afc2f",
  //       "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
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
