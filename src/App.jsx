import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Choose from "./component/Choose";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProject from "./component/OurProject";
import "./App.css";
import "../src/Styles/global.css";
import Feedback from "./component/FeedBack";
import GetIn from "./component/GetInTouch";
import LatestNews from "./component/LatestNews";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Services />
      <Choose />
      <OurProject />
      <Feedback />
      <GetIn />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
