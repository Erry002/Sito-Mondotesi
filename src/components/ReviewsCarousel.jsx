import React from "react";
import Slider from "react-slick";
import reviews from "./recensioni.json";
// import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import star5 from "../assets/star/star.png";

const ReviewsCarousel = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-20px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-20px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  const reviewStyle = {
    padding: "1rem",
    margin: "0 10px", // Modifica qui il margine tra i box delle recensioni
  };

  return (
    <div className="">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="mb-4 ">
            <div
              style={reviewStyle}
              className="bg-red-500 h-auto sm:h-[360px] rounded-xl">
              <div className="px-2 bg-red-300 rounded-2xl">
                <h3
                  className="flex items-center justify-between"
                  style={{ padding: "0.5rem", marginBottom: "10px" }}>
                  {review.name}
                  <span className="flex ml-2">
                    {[...Array(review.stars)].map((_, i) => (
                      <img key={i} src={star5} alt="star" className="h-4 sm:h-3 xl:h-5" />
                    ))}
                  </span>
                </h3>
              </div>
              <p className="text-white" style={{ padding: "0.5rem" }}>
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

/* const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isActive ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.5)"};
  margin: 0px 4px;
  position: relative;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DotProgress = styled.div`
  width: ${(props) => (props.$isActive ? "100%" : "0%")};
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  transition: width 6s linear;
`; */

export default ReviewsCarousel;