import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home/" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
