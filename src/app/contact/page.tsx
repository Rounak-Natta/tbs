"use client";
import React from "react";
import { motion } from "framer-motion";

import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <div className="infra-hero">
        <div className="infra-overlay"></div>
        <h2>Contact Us</h2>
      </div>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT CARD */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { icon: "fa-phone-alt", text: "+91 7044447756" },
              { icon: "fa-envelope", text: "admission.aranghata@thebandhanschool.org" },
              { icon: "fa-globe", text: "www.thebandhanschool.org" },
              {
                icon: "fa-map-marker-alt",
                text: `Anandnagar, Radhakantapur\nDistrict Nadia, Taherpur\nPO Aranghata-741501`,
              },
            ].map((item, index) => (
              <motion.div
                className="contact-row"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <span className="icon">
                  <i className={`fas ${item.icon}`}></i>
                </span>
                <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
              </motion.div>
            ))}

            <div className="socials">
              <span><i className="fab fa-facebook-f"></i></span>
              <span><i className="fab fa-x-twitter"></i></span>
              <span><i className="fab fa-instagram"></i></span>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Get In Touch</h3>

            <p>
              It is a long established fact that a reader will be distracted by
              readable content.
            </p>

            <form>
              <div className="input-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Your Subject" />

              <textarea placeholder="Write Your Message"></textarea>

              <button className="send-btn">
                SEND MESSAGE <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div
          className="map"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps?q=22.8242889,88.2778931&output=embed"
            loading="lazy"
          ></iframe>
        </motion.div>
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

export default Contact;