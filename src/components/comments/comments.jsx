import React from "react";
import Slider from "react-slick";
import "./comments.css";
import data from "./data.js";

function Comments() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="comments__container">
      <div className="comments__title">Comments</div>
      <Slider {...settings} className="comments__content">
        {data &&
          data.map((data) => (
            <div className="comment" key={data.id}>
              <div className="box">
                <div className="user__img">
                  <img src={data.img} alt={data.name} />
                </div>
                <h3>{data.name}</h3>
              </div>
              <p>{data.title}</p>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Comments;
