import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignUpStep2 from "./pages/SignUpStep2";
import SignUpStep3 from "./pages/SignUpStep3";
import ProfilePage from "./profile/pages/ProfilePage";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./profile/components/ProtectedRoutes";
import "./app.scss";

function App() {
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
