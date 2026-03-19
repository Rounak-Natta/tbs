"use client";

import React from "react";
import { motion } from "framer-motion";
import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

const Infrastructure = () => {
  const facilities = [
    { img: "/multimedia.png", text: "Audio Visual Room" },
    { img: "/classroom.png", text: "Smart Classrooms" },
    { img: "/performing.png", text: "Performing Arts Room" },
    { img: "/canteen.png", text: "Our Canteen" },
    { img: "/multimedia.png", text: "Audio Visual Room" },
    { img: "/classroom.png", text: "Smart Classrooms" },
    { img: "/performing.png", text: "Performing Arts Room" },
    { img: "/canteen.png", text: "Our Canteen" },
  ];

  return (
    <>
      <section className="infra-main">
        
        {/* HERO */}
        <div className="infra-hero">
          <div className="infra-overlay"></div>
          <h2>Infrastructure</h2>
        </div>

        {/* HEADING */}
        <motion.div
          className="infra-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            Our <span>Imposing</span> Infrastructure
          </h2>

          <p>
            The Programme's unique and low cost model has greatly impacted
            those who were unreached.
          </p>

          <motion.div
            className="infra-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* CONTENT */}
        <div className="infra-content">
          
          {/* LEFT (STAGGER LIST) */}
          <motion.div
            className="infra-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {facilities.map((item, index) => (
              <motion.div
                className="infra-item"
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 8 }} // subtle hover interaction
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="infra-icon"
                />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE (PARALLAX FEEL) */}
          <motion.div
            className="infra-right"
            initial={{ opacity: 0, x: 80, scale: 1.05 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src="/standing.jpeg" alt="Infrastructure" />
          </motion.div>

        </div>
      </section>

      <div className="admission-bottom text-center">
        GROWING WITH EXCELLENCE <br />
        STRONG FOUNDATIONS START HERE
      </div>

      <br /><br />

      <Form />
      <Footer />
    </>
  );
};

export default Infrastructure;