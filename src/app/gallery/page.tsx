"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "/gallery1.avif",
    "/gallery2.png",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.webp",
    "/gallery9.jpg",
  ];

  return (
    <>
      <section className="gallery-main">

        {/* HERO */}
        <div className="gallery-hero">
          <div className="gallery-overlay"></div>
          <h2>Our Gallery</h2>
        </div>

        {/* GRID */}
        <motion.div
          className="gallery-grid"
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
          {images.map((img, index) => (
            <motion.div
              className="gallery-card"
              key={index}
              onClick={() => setSelectedImg(img)}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={`gallery-${index}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* BACKGROUND */}
              <div
                className="lightbox-bg"
                onClick={() => setSelectedImg(null)}
              ></div>

              {/* IMAGE */}
              <motion.img
                src={selectedImg}
                alt="preview"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* CLOSE */}
              <span
                className="close-btn"
                onClick={() => setSelectedImg(null)}
              >
                &times;
              </span>
            </motion.div>
          )}
        </AnimatePresence>

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

export default Gallery;