import React from "react";
import './AdmissionSection.css';
const AdmissionSection = () => {
  return (
    <section className="admission-section">
      <div className="admission-container">
        <span className="admission-tag">ADMISSION 2026-27</span>

        <h1 className="admission-title">
          Begin the {" "}
          <span className="highlight">Aksharaa </span>
            journey for your child today.
        </h1>

        <p className="admission-description">
           Limited seats across grades. Submit an inquiry below — 
        our admissions team will reach out within one working day.
        </p>
      </div>
    </section>
    
  );
};

export default AdmissionSection;