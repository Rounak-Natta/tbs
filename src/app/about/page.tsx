"use client";

import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="gallery-hero">
          <div className="gallery-overlay"></div>
          <h2>About Us</h2>
        </div>

      {/* MAIN SECTION */}
      <section className="about-main">

        <div className="about-container">

          {/* LEFT IMAGE */}
          <div className="about-image">
            <img src="/abtimg3.jpg" alt="students" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <h2>
              Our Education System <br />
              <span>Inspire</span> You
            </h2>

            <p>
              The Bandhan School has evolved with the idea of promoting equality
              in education and leaving its mark for a lifetime. 
            </p>

            <p>
              Our journey has started from 3rd April'22. We follow CBSE curriculum
              and are co-educational English medium schools. The Schools are set
              in a green landscaped ambience with state-of-the-art infrastructure.
            </p>

            <p>
              Our Wings–Pre-primary, Primary, Middle, Secondary and Senior Secondary.
            </p>

            <hr />
          </div>
        </div>

        {/* UNIQUE SECTION */}
        <div className="unique-section">

          <div className="unique-icon">
            <i className="fas fa-gift"></i>
          </div>

          <div className="unique-content">
            <h3>WHAT MAKES US UNIQUE</h3>

            <p>
              The Bandhan School is part of an evolving era of education that relives
              the experience of learning in an exemplary environment. It is our aim
              to raise standards by promoting a school ethos of equal education and
              quality academics. This is underpinned by core values which support
              the development of the child as a reflective learner within a calm,
              caring, happy and purposeful atmosphere.
            </p>
          </div>

        </div>

      </section>

      <section className="motto-section">
        <h3>THE SCHOOL MOTTO</h3>

        <div className="motto-text">
          <p>We are UNIQUE.</p>
          <p>Understand that all should get the opportunity to excel in learning and fulfill their dreams.</p>
          <p>Nurture the potential of each child through respect, honesty and tolerance.</p>
          <p>Involve all stakeholders—children, parents, teachers, management and the community—to work together.</p>
          <p>We provide Quality Education.</p>
          <p>Utilise skills to promote individuality and resilience that will secure leadership attributes in children.</p>
          <p>Embrace the principles of humanism, internationalism and idealism.</p>
        </div>
      </section>
      

      {/* ================= SYMBOL ================= */}
      <section className="symbol-section">

        <div className="symbol-container">

          {/* LEFT LOGO */}
          <div className="symbol-logo">
            <img src="/logo.png" alt="Bandhan Logo" />
          </div>

          {/* RIGHT TEXT */}
          <div className="symbol-content">
            <h3>
              THE SYMBOL OF <span>BONDING</span>– LOGO
            </h3>

            <p>
              Ever since its inception in 2001, Bandhan has been committed to furthering its goal
              of socio-economic advancement in the lives of the less privileged. In all that Bandhan does,
              the attempt is to enable the beneficiaries realise their true potential and level up their lives
              and that of their families.
            </p>

            <p>
              The outer ring represents the beneficiaries of the various development programmes that Bandhan runs.
              The colours green, yellow, orange and red represent how Bandhan enables them to reach their true potential.
            </p>

            <p>
              The second ring represents the larger impact Bandhan has on the community.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VISION MISSION ================= */}
      <section className="vision-section">

        <div className="vision-container">

          {/* LEFT TEXT */}
          <div className="vision-text">

            <div className="vision-block">
              <h4>VISION</h4>
              <p>
                To be a premier institution that contributes to nation building by creating leaders
                through holistic education for children.
              </p>
            </div>

            <div className="vision-block">
              <h4>MISSION</h4>
              <p>
                We aim to provide a nurturing environment to help students from the hinterlands evolve into
                responsible and respectable citizens of the nation. Our curriculum and pedagogy provide opportunities
                for holistic development of children.
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="vision-image">
            <img src="/abtimg3.jpg" alt="students" />
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
}