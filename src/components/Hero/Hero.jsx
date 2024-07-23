import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />Most Suitable <br /> Property
            </h1>
          </div>
          <div className="hero-des">
            <span>Find a Variety of properties that suit you very easily</span>
            <span>Forget all the difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar">
            Search bar
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
