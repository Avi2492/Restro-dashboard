import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/authPage/AuthPage";
import ErrorPage from "./pages/error/ErrorPage";
// import SignupWithOtp from "./components/auth/SignupWithOtp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/auth-page" element={<AuthPage />} />
        <Route path="/error-page" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
