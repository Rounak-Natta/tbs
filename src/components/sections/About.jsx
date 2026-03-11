import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="about-section">

      {/* LEFT IMAGES */}
      <div className="about-left">

        <div className="left-column-one">
            <img src="/abtimg3.jpg" alt="" />
          
            <div className="about-badge">
             <i className="fa-solid fa-award"></i>
              <div>
                 <strong>20+ YEARS</strong>
                 <p>of Quality Service</p>
             </div>
            </div>
        </div>

    <div className="left-column-two">

  <div className="circle-border">
    <div className="circle-img"></div>
  </div>

  <img src="/abtimg2.webp" alt="" className="imagetwo"/>

</div>
        

      </div>


      {/* RIGHT CONTENT */}
      <div className="about-right">

        <p className="about-subtitle">ABOUT US</p>

        <h2 className="about-title">
          Our Education System <span>Inspire</span> You
        </h2>

        <p className="about-desc">
          Women have, in turn, empowered their communities. We are actively
          engaged with nearly 30 lakh households through our presence in 12
          states across the country by offering an entire suite of development
          programmes in the fields of education, health, livelihood promotion,
          financial literacy, skill development and employment generation.
        </p>
        <hr /><br />

        <Link href="#" className="about-btn">
          Know More <i className="fa-solid fa-arrow-right"></i>
        </Link>

      </div>

    </section>
  );
}