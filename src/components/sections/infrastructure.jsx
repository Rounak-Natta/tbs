import React from "react";

const Infrastructure = () => {
  return (
    <section className="infra-section">
      
      <div className="infra-header">
        <h2>
          Our <span>Imposing</span> Infrastructure
        </h2>
        <p>
          The Programme's unique and low cost model has greatly impacted
          those who were unreached.
        </p>
      </div>

      <div className="infra-cards">

        <div className="infra-card">
          <img src='/multimedia.png' alt=""/>
          <p>Audio Visual Room</p>
        </div>

        <div className="infra-card">
          <img src='/classroom.png' alt=""/>
          <p>Smart Classrooms</p>
        </div>

        <div className="infra-card">
          <img src='/performing.png' alt=""/>
          <p>Performing Arts Room</p>
        </div>

        <div className="infra-card">
          <img src='/canteen.png' alt=""/>
          <p>Our Canteen</p>
        </div>

      </div>

      <div className="infra-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
};

export default Infrastructure;