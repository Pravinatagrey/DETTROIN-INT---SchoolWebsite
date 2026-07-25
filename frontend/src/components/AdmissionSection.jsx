import React from "react";
import './AdmissionSection.css';
const AdmissionSection = () => {
  return (
    <section className="admission-section">
      <div className="admission-container">
        <span className="admission-tag">ADMISSION 2026-27</span>

        <h1 className="admission-title">
          A school built on{" "}
          <span className="highlight">love, learning</span>
          <br />
          and endless possibilities.
        </h1>

        <p className="admission-description">
          Since 2008, Aksharaa has been a home for curious minds in Aligarh.
          We believe that when you get the child right — the grades, the
          college, the career all follow.
        </p>
      </div>
    </section>
  );
};

export default AdmissionSection;