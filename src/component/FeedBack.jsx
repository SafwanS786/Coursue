import React from "react";
import "../Styles/Feedback.css";
import Ellipse from "../img/Ellipse.png";
import Ellipse1 from "../img/Ellipse1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeedContent = [
  {
    icon: Ellipse,
    alt: "David Anthony",
    Name: "David Anthony",
    work: "Client",
    para: `BuildGo delivered exceptional service. They met every deadline, and the
        quality of their work exceeded our expectations.`,
    Rate: "★★★★★",
  },
  {
    icon: Ellipse1,
    alt: "Clara Engineer",
    Name: "Clara Engineer",
    work: "Engineer",
    para: `From start to finish, BuildGo delivered exceptional service. They
        communicated well, met every deadline, and the quality of their work
        exceeded our expectations.`,

    Rate: "★★★★★",
  },
  {
    icon: Ellipse,
    alt: "Clara Engineer",
    Name: "Clara Engineer",
    work: "Engineer",
    para: `From start to finish, BuildGo delivered exceptional service. They
        communicated well, met every deadline, and the quality of their work
        exceeded our expectations.`,

    Rate: "★★★★★",
  },
  {
    icon: Ellipse,
    alt: "David Anthony",
    Name: "David Anthony",
    work: "Client",
    para: `BuildGo delivered exceptional service. They met every deadline, and the
        quality of their work exceeded our expectations.`,
    Rate: "★★★★★",
  },
  {
    icon: Ellipse1,
    alt: "Clara Engineer",
    Name: "Clara Engineer",
    work: "Engineer",
    para: `From start to finish, BuildGo delivered exceptional service. They
        communicated well, met every deadline, and the quality of their work
        exceeded our expectations.`,

    Rate: "★★★★★",
  },
  {
    icon: Ellipse,
    alt: "Clara Engineer",
    Name: "Clara Engineer",
    work: "Engineer",
    para: `From start to finish, BuildGo delivered exceptional service. They
        communicated well, met every deadline, and the quality of their work
        exceeded our expectations.`,

    Rate: "★★★★★",
  },
];
export default function Feedback() {
  const Feedsettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="container Feed_main bg-light">
      <p id="feed_para">TESTIMONIAL</p>
      {/* <p>TESTIMONIAL</p> */}
      <h1 id="head_para">Client Feedback and Success Stories</h1>
      <div className="feedback-cards">
        <Slider {...Feedsettings}>
          {FeedContent.map((Feed, index) => (
            <div className="card" key={index}>
              <div className="in_line">
                <img src={Feed.icon} alt={Feed.alt} />
                <p>
                  <strong>{Feed.Name}</strong> -{Feed.work}
                </p>
              </div>
              <p>{Feed.para}</p>
              <div className="rating">{Feed.Rate}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
