import React from "react";
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
        <div className="infra-heading">
          <h2>
            Our <span>Imposing</span> Infrastructure
          </h2>
          <p>
            The Programme's unique and low cost model has greatly impacted
            those who were unreached.
          </p>
          <div className="infra-line"></div>
        </div>

        {/* CONTENT */}
        <div className="infra-content">
          
          {/* LEFT */}
          <div className="infra-left">
            {facilities.map((item, index) => (
              <div className="infra-item" key={index}>
                <img 
                  src={item.img} 
                  alt={item.text} 
                  className="infra-icon"
                />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="infra-right">
            <img src="/standing.jpeg" alt="Infrastructure" />
          </div>

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