"use client";
import React from "react";

import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";


const Contact = () => {
  return (
    <>
      {/* HEADER (UNCHANGED) */}
      <div className="infra-hero">
        <div className="infra-overlay"></div>
        <h2>Contact Us</h2>
      </div>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="contact-container">
          
          {/* LEFT CARD */}
          <div className="contact-card">
            <div className="contact-row">
              <span className="icon"><i className="fas fa-phone-alt"></i></span>
              <p>+91 7044447756</p>
            </div>

            <div className="contact-row">
              <span className="icon"><i className="fas fa-envelope"></i></span>
              <p>admission.aranghata@thebandhanschool.org</p>
            </div>

            <div className="contact-row">
              <span className="icon"><i className="fas fa-globe"></i></span>
              <p>www.thebandhanschool.org</p>
            </div>

            <div className="contact-row">
              <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
              <p>
                Anandnagar, Radhakantapur <br />
                District Nadia, Taherpur <br />
                PO Aranghata-741501
              </p>
            </div>

            <div className="socials">
              <span><i className="fab fa-facebook-f"></i></span>
              <span><i className="fab fa-x-twitter"></i></span>
              <span><i className="fab fa-instagram"></i></span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-box">
            <h3>Get In Touch</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page randomised words which don’t look
              even slightly when looking at its layout.
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
          </div>
        </div>

        {/* MAP */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps?q=22.8242889,88.2778931&output=embed"
            loading="lazy"
          ></iframe>
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

export default Contact;