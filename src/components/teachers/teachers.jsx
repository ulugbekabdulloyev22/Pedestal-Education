import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineClose } from "react-icons/ai";
import "./teachers.css";
import data from "./data";

function Teachers() {
  const [description, setDescription] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: Number(
      window.screen.width >= 1000
        ? 4
        : window.screen.width >= 795
        ? 3
        : window.screen.width >= 500
        ? 2
        : 1
    ),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="teachers__container" id="taechers">
      <h2 className="teachers__title">Teachers</h2>
      <Slider className="teachers__content" {...settings}>
        {data &&
          data.map((data, ind) => (
            <div
              className={`teachers__card`}
              key={data.id}
              onClick={() => setDescription(data.describe)}
            >
              <div className="teacher__img">
                <img src={data.img} alt={data.name} />
              </div>

              <h3 className="teachers__name">{data.name}</h3>
            </div>
          ))}
      </Slider>

      {description && (
        <div className="teachers__description">
          <div className="tech-box">
            <ul>
              <AiOutlineClose
                className="teachers__close"
                onClick={() => setDescription(null)}
              />

              <li>
                <b>Experience:</b>
                {description.experience ? description.experience : " ---"}
              </li>
              <li>
                <b>Achievements:</b>
                {description.achievement ? description.achievement : " ---"}
              </li>
              <li>
                <b>Education:</b>
                {description.education ? description.education : " ---"}
              </li>
              <li>{description.hubby ? description.hubby : " ---"}</li>
              <li>
                <b>Number of students:</b>
                {description.students ? description.students : " ---"}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teachers;
