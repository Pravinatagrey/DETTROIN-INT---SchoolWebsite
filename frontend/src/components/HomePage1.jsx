import React from "react";
import "./HomePage1.css";

const imageUrl = "https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/Rectangle-1-3.webp";

const HomePage1 = () => {
  return (
    <>
    <section className="hero">
      <div className="hero_container">
        {/* Left Content */}
        <div className="hero_content">
          <span className="hero_badge">● ALIGARH CAMPUS</span>

          <h1 className="hero_title">
            Nurturing Future <br />
            Leaders
          </h1>

          <h2 className="hero_subtitle">
            Through Holistic <br />
            Education
          </h2>

          <p className="hero_tag">#BeYourself</p>

          <p className="hero_description">
            A CBSE school in Aligarh where curiosity is celebrated, character
            is built and every child is given the runway to soar. Welcome to
            Aksharaa.
          </p>

          <div className="hero_buttons">
            <button className="btn btn-primary">
              Admission Open →
            </button>

            <button className="btn btn-outline">
              Explore Campus →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero_imageWrapper">
          <img src={imageUrl} alt="School" className="hero_image" />

          <div className="rating-card">
            ⭐⭐⭐⭐⭐
            <span>4.9 / 5 · 500+ Parents</span>
          </div>

          <div className="grade-card">
            <h3>A+</h3>
            <p>CBSE GRADE</p>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default HomePage1;