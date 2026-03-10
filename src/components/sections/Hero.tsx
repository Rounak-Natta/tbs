import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <div className="hero-bg">
        <Image
          src="/tbs-hero.jpg"
          alt="Bandhan School"
          fill
          priority
          className="hero-img"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <p className="hero-welcome">
          WELCOME TO BANDHAN SCHOOL
        </p>

        <h1 className="hero-title">
          Start Your Beautiful <br />
          And <span>Bright</span> Future
        </h1>

        <p className="hero-desc">
          2021 marks two decades of completion of Bandhan–Konnagar.
          With women's empowerment at its core, Bandhan–Konnagar
          was conceptualised to transform numerous lives in the
          last 20 years.
        </p>

        <Link href="#" className="hero-btn">
          Know More →
        </Link>

      </div>

      {/* Bottom Cards */}
      <div className="hero-cards">

        <div className="hero-card">
          <div className="card-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>

          <div className="card-number">01</div>

          <h3>English Medium</h3>
          <p>There are many variations of passages</p>
        </div>


        <div className="hero-card">
          <div className="card-icon">
            <i className="fas fa-school"></i>
          </div>

          <div className="card-number">02</div>

          <h3>Co-Ed School</h3>
          <p>There are many variations of passages</p>
        </div>


        <div className="hero-card">
          <div className="card-icon">
            <i className="fas fa-pencil-alt"></i>
          </div>

          <div className="card-number">03</div>
<br />
          <h3>CBSE Curriculum</h3>
          <p>There are many variations of passages</p>
        </div>

      </div>

    </section>
  );
}