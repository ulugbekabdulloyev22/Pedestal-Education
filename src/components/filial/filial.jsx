import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./filial.css";
import data from "./data.js";

function Filial() {
  return (
    <div className="filial__container">
      <div className="filial__content">
        {data &&
          data.map((data) => (
            <div key={data.id} className="filial__card">
              <div>
                <div>
                  <h4 className="filial__title">Branch</h4>
                  <i>
                    <p>{data.about}</p>
                  </i>
                </div>
                <div className="filial__box">
                  <FaMapMarkerAlt className="map__icon" />
                  <div>
                    <h5>{data.map}</h5>
                    <p>
                      <i>opposite: </i>
                      <i>{data.opposite}</i>
                    </p>
                  </div>
                </div>
              </div>
              <img src={data.img} alt="Img" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Filial;
