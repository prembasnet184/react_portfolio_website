import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/basnetayush0000/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/prembasnet">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/basnetayush509">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/ayushbasnet">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.twitter.com/basnet_ayush2/">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello. I'M <span className="highlighted-text">Ayush </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical>
                  loop={Infinity}
                  steps=
                  {[
                    "Enthusiastic Developer 💻🥰",
                    1000,
                    "MERN Full Stack Developer 🌐",
                    1000,
                    "Cross-platfor Developer ⚡💸",
                    1000,
                    "React Developer Developer 🌎",
                    1000,
                    "Node.js/Express Developer 👨‍💻📴 ",
                    1000,
                  ]}
                </Typical>
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
