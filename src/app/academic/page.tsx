"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

/* ================= ANIMATION CONFIG ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

/* ================= PAGE ================= */

export default function AcademicPage() {
  return (
    <motion.div
      className="academic-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* ================= HERO ================= */}
      <section className="academic-hero">
        <div className="overlay" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Academic
        </motion.h1>
      </section>

      <div className="academic-content">

        {/* ================= INTRO ================= */}
        <motion.section
          className="academic-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="academic-image">
            <Image
              src="/gallery9.jpg"
              alt="Academic"
              width={1200}
              height={450}
              className="smooth-image"
            />
          </div>

          <motion.div
            className="academic-content-box"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={item}>
              At The Bandhan School, children are taught with utmost care.
              Learning is a continuous and holistic process that blends knowledge,
              revision, and real-world application.
            </motion.p>

            <motion.p variants={item}>
              We focus on developing listening, speaking, reading, and writing
              skills while instilling strong moral values. Assessment is conducted
              through continuous evaluation methods.
            </motion.p>

            <motion.p variants={item}>
              Progress is shared regularly with parents, ensuring transparency and
              collaborative growth as per CBSE guidelines.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* ================= METHODOLOGY ================= */}
        <motion.h2
          className="methodology-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          TEACHING METHODOLOGY
        </motion.h2>

        <motion.section
          className="methodology-box-new"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="left-panel-new">
            <div className="panel-item">SCHOLASTIC AREAS</div>
            <div className="panel-item">
              PRIMARY STAGE <br /> (NURSERY TO V)
            </div>
            <div className="panel-item">CO-SCHOLASTIC AREAS</div>
          </div>

          <motion.div
            className="right-panel-new"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.ul>
              {[
                "Learning will be made fascinating, pleasurable and activity-oriented.",
                "Monthly remarks will be uploaded for parental review.",
                "Day-wise Monthly Planner including co-scholastic activities.",
                "Activity-based teaching through presentations and practical learning.",
                "Focus on LSRW — Listening, Speaking, Reading & Writing skills.",
                "Development of thinking and mental aptitude through activities.",
              ].map((text, i) => (
                <motion.li key={i} variants={item}>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.section>

        {/* ================= SCHOOL ================= */}
        <motion.section
          className="school-section-new"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="school-container">

            <div className="school-left">
              <h2>
                SCHOOL <br /> CURRICULUM
              </h2>
            </div>

            <motion.div
              className="school-right"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p variants={item}>
                As per NEP 2020, our main emphasis is on Foundational Literacy
                and Numeracy embedding English and Mathematics skills.
              </motion.p>

              <motion.ul>
                {[
                  "Fosters belonging, values and cultural pride",
                  "Prepares students for the digital world",
                  "Focus on cognitive and emotional growth",
                  "Rooted locally with a global perspective",
                ].map((text, i) => (
                  <motion.li key={i} variants={item}>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </motion.section>

      </div>

      {/* ================= ASSESSMENT ================= */}
      <motion.section
        className="assessment-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2>ASSESSMENT</h2>

        <motion.div
          className="assessment-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              title: "PRE PRIMARY",
              text: "No formal exams. Continuous evaluation based on participation.",
            },
            {
              title: "PRIMARY (I–IV)",
              text: "CBSE-based curriculum including arts, music, yoga and activities.",
            },
            {
              title: "SCHOLASTIC",
              text: "Term 1: PT + Half Yearly | Term 2: PT + Final Exam",
            },
            {
              title: "CO-SCHOLASTIC",
              text: "Evaluation of life skills and personality development.",
            },
          ].map((card, i) => (
            <motion.div key={i} className="assessment-card" variants={item}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ================= PEDAGOGY ================= */}
      <motion.section
        className="pedagogy-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="pedagogy-container">

          <motion.div
            className="pedagogy-content"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={item}>Teaching Pedagogy</motion.h2>

            <motion.p variants={item}>
              Our curriculum fosters curiosity, creativity, and critical thinking.
              It ensures a structured and progressive learning journey.
            </motion.p>

            <motion.div className="pedagogy-points">
              {[
                "✔ Experiential Learning",
                "✔ Skill-Based Development",
                "✔ Student-Centric Approach",
              ].map((point, i) => (
                <motion.div key={i} variants={item}>
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="pedagogy-visual"
            variants={fadeUp}
          >
            <Image
              src="/gallery6.jpg"
              alt="Pedagogy"
              width={500}
              height={320}
              className="smooth-image"
            />
          </motion.div>

        </div>
      </motion.section>

      {/* ================= FORM ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Form />
      </motion.div>

      <Footer />
    </motion.div>
  );
}