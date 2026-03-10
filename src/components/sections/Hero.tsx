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
        <p className="hero-welcome">WELCOME TO BANDHAN SCHOOL</p>

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

        <Link href="#" className="hero-btn">Know More →</Link>
      </div>

      {/* Bottom Cards */}
      <div className="hero-cards">

        <div className="hero-card">
          <div className="card-icon">
            <Image src="/graduation.png" alt="Graduation Hat" width={40} height={40} />
          </div>
          <div className="card-number">01</div>
          <h3>English Medium</h3>
          <p>There are many variations of passages</p>
        </div>

        <div className="hero-card">
          <div className="card-icon">
            <Image src="/bag.png" alt="School Bag" width={40} height={40} />
          </div>
          <div className="card-number">02</div>
          <h3>Co-Ed School</h3>
          <p>There are many variations of passages</p>
        </div>

        <div className="hero-card">
          <div className="card-icon">
            <Image src="/pencil.png" alt="Pencil Icon" width={40} height={40} />
          </div>
          <div className="card-number">03</div>
          <h3>CBSE Curriculums</h3>
          <p>There are many variations of passages</p>
        </div>

      </div>

    </section>
  );
}