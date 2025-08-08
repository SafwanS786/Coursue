import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Choose from "./component/Choose";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProject from "./component/OurProject";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Choose />
      <OurProject />
    </>
  );
}

export default App;
