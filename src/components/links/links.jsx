import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import "./links.css";

function Links() {
  return (
    <div className="links__container">
      <ul className="links__content">
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="icons" /> Telegram
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="icons" /> Instagram
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="icons" /> Facebook
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube className="icons" /> YouTube
          </a>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="icons" /> TikTok
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
