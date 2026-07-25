import React from "react";
import "./AcademicSection.css";


  const stages = [
    {
      id: 1,
      name: 'Pre-Primary',
      grades: 'NURSERY-KG',
      features: [
        'Play-based learning',
        'Sensory exploration',
        'Storytelling',
        'Early social skills'
      ]
    },
    {
      id: 2,
      name: 'Primary',
      grades: 'GRADE 1-5',
      features: [
        'Foundational literacy & numeracy',
        'Curiosity projects',
        'Art & music integration'
      ]
    },
    {
      id: 3,
      name: 'Middle School',
      grades: 'GRADE 6-8',
      features: [
        'STEM labs',
        'Coding',
        'Second languages',
        'Sports specialisation'
      ]
    },
    {
      id: 4,
      name: 'Senior Secondary',
      grades: 'GRADE 9-12',
      features: [
        'CBSE board excellence',
        'Science/Commerce/Humanities streams',
        'Leadership programs',
        'Career counselling'
      ]
    }
  ];
const Academics = () => {
    
  return (
    <>
<section className="academics">
      <div className="academics-container">
        <span className="about-tag">ACADEMICS</span>

        <h1 className="academics-title">
          A school built on{" "}
          <span className="highlight">love, learning</span>
          <br />
                and endless possibilities.
        </h1>

        <p className="academics-description">
          Since 2008, Aksharaa has been a home for curious minds in Aligarh.
          We believe that when you get the child right — the grades, the
          college, the career all follow.
        </p>
      </div>
    </section>
<section className="stages-container">
  <div className="stages-header">
        <h1 className="main-title">LEARNING STAGES</h1>
        <p className="subtitle">Four stages, one continuous journey.</p>
      </div>
      <div className="stages-grid">
        {stages.map((stage, index) => (
          <div key={stage.id} className="stage-card">
            <div className="stage-number">{stage.id}</div>
            <h2 className="stage-name">{stage.name}</h2>
            <div className="stage-grades">{stage.grades}</div>
            <ul className="stage-features">
              {stage.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
    </section>
    </>
  )
   }
export default Academics;