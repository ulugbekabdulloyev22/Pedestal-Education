import React, { useState } from "react";
import "./prices.css";
import data from "./data.js";

function Prices() {
  const [id, setId] = useState(1);
  const dataFilter = data && data.filter((data) => data.id === id);

  const description = dataFilter && dataFilter.map((data) => data);

  return (
    <div className="prices__container" id="prices">
      <div className="prices__title">Prices</div>

      <div className="prices__content">
        <div className="prices__data">
          <div className="prices__menu">
            <button
              onClick={() => setId(1)}
              className={`${id === 1 ? "active" : ""}`}
            >
              {data[0].title}
            </button>
            <button
              onClick={() => setId(2)}
              className={`${id === 2 ? "active" : ""}`}
            >
              {data[1].title}
            </button>
          </div>
          <div className="prices__description">
            {description &&
              description.map((data) => (
                <div className="prices__card" key={data.id}>
                  <ul>
                    <li>{data.description[0]}</li>
                    <li>{data.description[1]}</li>
                    <li>{data.description[2]}</li>
                    <li>{data.description[3]}</li>
                    <li>{data.description[4]}</li>
                    <li>{data.description[5]}</li>
                    <li>{data.description[6]}</li>
                    <li>
                      <i>Prices:</i> {dataFilter[0].prices} UZS
                    </li>
                  </ul>
                  <img src={dataFilter[0].img} alt="Img" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
