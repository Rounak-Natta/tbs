import React from "react";

const GallerySection = () => {
  const images = [
    "/gallery1.avif",
    "/gallery2.png",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section className="gallery-section">

      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">

        {images.map((img, index) => (
          <div className="gallery-card" key={index}>

            <img src={img} alt="gallery" />

            <div className="gallery-overlay">
              <span>+</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default GallerySection;