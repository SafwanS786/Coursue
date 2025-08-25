import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
