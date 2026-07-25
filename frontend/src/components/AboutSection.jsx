import React from "react";
import "./AboutSection.css";

const AboutSection = () => {

  return (
    <>
    <section className="about">
      <div className="about-container">
        <span className="about-tag">ABOUT</span>

        <h1 className="about-title">
          A school built on{" "}
          <span className="highlight">love, learning</span>
          <br />
          and endless possibilities.
        </h1>

        <p className="about-description">
          Since 2008, Aksharaa has been a home for curious minds in Aligarh.
          We believe that when you get the child right — the grades, the
          college, the career all follow.
        </p>
      </div>
    </section>

    <div className="mission-vision-container">
      <div className="card mission-card">
        <h2 className="card-title">🎯 Our Mission</h2>
        <p className="card-text">
          To create a nurturing ecosystem where every child develops academic excellence, 
          emotional intelligence, and a lifelong love for learning — becoming confident, 
          compassionate citizens of a rapidly changing world.
        </p>
      </div>

      <div className="card vision-card">
        <h2 className="card-title">👁️ Our Vision</h2>
        <p className="card-text">
          To be recognised as India’s most joyful, most rigorous and most inclusive school 
          — where children discover their unique voice and are trusted to use it.
        </p>
      </div>
      </div>
    </>
  );
};

export default AboutSection;