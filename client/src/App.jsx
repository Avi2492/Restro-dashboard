import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
};

export default App;
