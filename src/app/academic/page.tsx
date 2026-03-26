"use client";

import Image from "next/image";
import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

export default function AcademicPage() {
  return (
    <div className="academic-page">

      {/* ================= HERO ================= */}
      <section className="academic-hero">
        <div className="overlay" />
        <h1>Academic</h1>
      </section>

      <div className="academic-content">

        {/* ================= INTRO ================= */}
       <section className="academic-row">

  {/* IMAGE */}
  <div className="academic-image">
    <Image
      src="/gallery9.jpg"
      alt="Academic"
      width={1200}
      height={450}
    />
  </div>

  {/* CONTENT */}
  <div className="academic-content-box">


    <p>
      At The Bandhan School, children are taught with utmost care. Learning is a
      continuous and holistic process that blends knowledge, revision, and real-world
      application.
    </p>

    <p>
      We focus on developing listening, speaking, reading, and writing skills while
      instilling strong moral values. Assessment is conducted through continuous
      evaluation methods including comprehension, vocabulary, fluency, and conceptual
      understanding.
    </p>

    <p>
      Progress is shared regularly with parents, ensuring transparency and
      collaborative growth as per CBSE guidelines.
    </p>

  </div>

</section>

        {/* ================= TEACHING METHODOLOGY ================= */}
        <h2 className="methodology-title">TEACHING METHODOLOGY</h2>

        <section className="methodology-box-new">

          <div className="left-panel-new">
            <div className="panel-item">SCHOLASTIC AREAS</div>
            <div className="panel-item">
              PRIMARY STAGE <br /> (NURSERY TO V)
            </div>
            <div className="panel-item">CO-SCHOLASTIC AREAS</div>
          </div>

          <div className="right-panel-new">
            <ul>
              <li>Learning will be made fascinating, pleasurable and activity-oriented at all levels.</li>
              <li>Monthly remarks will be uploaded for parental review of the child’s performance.</li>
              <li>Day-wise Monthly Planner including co-scholastic activities.</li>
              <li>Activity-based teaching through presentations and practical learning.</li>
              <li>Focus on LSRW — Listening, Speaking, Reading & Writing skills.</li>
              <li>Development of thinking, oratory, and mental aptitude through activities.</li>
            </ul>
          </div>

        </section>

        {/* ================= SCHOOL CURRICULUM ================= */}
        <section className="school-section-new">

          <div className="school-container">

            <div className="school-left">
              <h2>
                SCHOOL <br /> CURRICULUM
              </h2>
            </div>

           

            <div className="school-right">

              <p className="school-top-text">
                As per NEP 2020, our main emphasis is on Foundational Literacy and
                Numeracy embedding English and Mathematics skills.
              </p>

              <ul>
                <li>Fosters belonging, values, character and cultural pride</li>
                <li>Prepares students for the digital world</li>
                <li>Focus on cognitive, emotional, social and communication growth</li>
                <li>Rooted locally with a global perspective</li>
              </ul>

            </div>

          </div>

        </section>

      </div>

      {/* ================= ASSESSMENT ================= */}
      <section className="assessment-section">
        <h2>ASSESSMENT</h2>

        <div className="assessment-grid">

          <div className="assessment-card">
            <h3>PRE PRIMARY</h3>
            <p>
              No formal exams. Continuous evaluation based on participation,
              development, and activity performance.
            </p>
          </div>

          <div className="assessment-card">
            <h3>PRIMARY (I–IV)</h3>
            <p>
              CBSE-based curriculum including arts, music, yoga, computers,
              and physical activities.
            </p>
          </div>

          <div className="assessment-card">
            <h3>SCHOLASTIC</h3>
            <p>
              Term 1: PT + Activities + Half Yearly <br />
              Term 2: PT + Activities + Final Exam
            </p>
          </div>

          <div className="assessment-card">
            <h3>CO-SCHOLASTIC</h3>
            <p>
              Evaluation of life skills, discipline, creativity, and overall
              personality development.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PEDAGOGY ================= */}
      <section className="pedagogy-section">

  <div className="pedagogy-container">

    {/* LEFT CONTENT */}
    <div className="pedagogy-content">
      <h2>Teaching Pedagogy</h2>

      <p>
        Our curriculum fosters curiosity, creativity, and critical thinking.
        It ensures a progressive and structured learning journey, empowering
        students to grow in a nurturing and inclusive environment.
      </p>

      <div className="pedagogy-points">
        <div>✔ Experiential Learning</div>
        <div>✔ Skill-Based Development</div>
        <div>✔ Student-Centric Approach</div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="pedagogy-visual">
      <Image
        src="/gallery6.jpg"
        alt="Pedagogy"
        width={500}
        height={320}
      />
    </div>

  </div>

</section>

      <Form />
      <Footer />
    </div>
  );
} 