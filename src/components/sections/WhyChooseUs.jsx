import React from "react";

const ChooseSection = () => {
  return (
    <section className="choose-section">

      <div className="choose-wrapper">

        {/* LEFT CONTENT */}
        <div className="choose-content">

          <span className="choose-tag">WHY CHOOSE US</span>

          <h2 className="choose-heading">
            We Are Expert & <span>Do Our Best</span> For Your Goal
          </h2>

          <p className="choose-description">
            The Bandhan Education Programme, which commenced in 2008,
            encourages a diverse age group of underprivileged children to
            begin and sustain academics in a congenial environment.
          </p>

          <div className="choose-buttons">
            <button className="choose-btn">Expert Teachers</button>
            <button className="choose-btn">Courses Material</button>
          </div>

          <button className="choose-btn-large">
            Modern Ambience and Innovative Structure
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="choose-image-area">

          <div className="choose-image-frame">
            <img src="whychoose.png" alt="teacher" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default ChooseSection;