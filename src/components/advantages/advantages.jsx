import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import "./advantages.css";
import data from "./data.js";

function Advantages() {
  const [description, setDescription] = useState(null);
  return (
    <div className="advantages__container" id="advantages">
      <div className="advantages__title">ADVANTAGES OF THE TRAINING CENTER</div>
      <div className="advantages__content">
        {data &&
          data.map((data) => (
            <div className="advantages__card" key={data.id}>
              <img src={data.img} alt="advantages img" />
              <h3 onClick={() => setDescription(data.description)}>
                {data.title}
                <AiOutlineArrowRight className="advantages__right" />
              </h3>
            </div>
          ))}
      </div>

      {description && (
        <div
          className="advantages__description"
          // onClick={() => setDescription(null)}
        >
          <p>
            {description}
            <AiOutlineClose
              onClick={() => setDescription(null)}
              className="adDesc__close"
            />
          </p>
        </div>
      )}
    </div>
  );
}

export default Advantages;
