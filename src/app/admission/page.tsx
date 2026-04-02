"use client";

import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Form from "@/components/sections/Form";

export default function AdmissionPage() {
  return (
    <div className="admission-page">

      {/* ================= HERO SECTION (MATCHING GALLERY STYLE) ================= */}
      <section className="admission-hero">
        <div className="admission-hero-overlay"></div>
        <h1>Admission</h1>
      </section>

      {/* ================= ADMISSION CRITERIA SECTION ================= */}
      <section className="admission-criteria-section">
        <div className="admission-criteria-container">
          
          {/* LEFT CONTENT */}
          <div className="criteria-left">
            <span className="criteria-badge">Admission Guidelines</span>
            <h2>Admission Criteria</h2>
            <ul className="criteria-list">
              <li>The Application Form is available in the School office.</li>
              <li>The child should be minimum 3+ for Nursery.</li>
              <li>Photographs of child & parents must be attached.</li>
              <li>Documents must be attested (original required).</li>
              <li>School Hours (Summers & Winters)</li>
            </ul>
            <div className="school-timing">
              <p>PRE PRIMARY – 8:30 AM TO 12:00 NOON</p>
              <p>CLASSES I–XI – 8:30 AM TO 2:30 PM</p>
              <p>School open on selected Saturdays</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="criteria-right">
            <div className="criteria-image">
              <Image 
                src="/gallery6.jpg" 
                alt="Admission" 
                width={800} 
                height={400} 
                priority 
                className="smooth-image"
              />
            </div>

            <div className="query-form">
              <h3>Fill This Form for All the Admission Related Queries</h3>
              <div className="form-grid">
                <input type="text" placeholder="Student's Name" />
                <input type="text" placeholder="Father's Name" />
                <input type="date" placeholder="DOB" />
                <input type="tel" placeholder="Phone No." />
                <select>
                  <option>Choose Standard</option>
                  <option>Nursery</option>
                  <option>JKG</option>
                  <option>SKG</option>
                  <option>Class I</option>
                  <option>Class II</option>
                  <option>Class III</option>
                  <option>Class IV</option>
                  <option>Class V</option>
                  <option>Class VI</option>
                  <option>Class VII</option>
                  <option>Class VIII</option>
                  <option>Class IX</option>
                  <option>Class XI</option>
                </select>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Present School" />
              </div>
              <button className="submit-query-btn">Submit Query →</button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= KEY INFORMATION SECTION ================= */}
      <section className="key-info-section">
        <div className="key-info-container">
          
          {/* LEFT PANEL */}
          <div className="info-left">
            <span className="info-badge">Key Information</span>
            <h3>Admission Criteria</h3>
            <ul className="info-list">
              <li>The Application Form is available in the School office.</li>
              <li>The child should be minimum 3+ for Nursery.</li>
              <li>Photographs must be affixed.</li>
              <li>Documents must be attached.</li>
              <li>School Hours (Summers and Winters)</li>
            </ul>
            <div className="info-timing">
              <p>PRE PRIMARY – 8:30 AM TO 12:00 NOON</p>
              <p>CLASSES I–XI – 8:30 AM TO 2:30 PM</p>
              <p>NOTE – SCHOOL OPEN ON SELECTED SATURDAYS</p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="info-right">
            <div className="info-image">
              <Image 
                src="/gallery9.jpg" 
                alt="Students" 
                width={800} 
                height={400} 
                className="smooth-image"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= DOCUMENTS SECTION ================= */}
      <section className="documents-section">
        <div className="documents-container">

          {/* LEFT PANEL */}
          <div className="documents-left">
            <h3>Required Documents <br /> for Registration</h3>
            <ul className="documents-list">
              <li>Proof of Residence – Passport/Ration Card/Voter ID Card (EPIC), Aadhar Card/UID Card and Electricity Bill</li>
              <li>Birth Certificate with the name of the child</li>
              <li>Child Aadhar Card, Passport size photo (2 copies)</li>
              <li>Passport size photo of father & mother (1 copy for both)</li>
              <li>ID proof of both the Father and Mother</li>
              <li>Previous class Report Card for admission in Class I onwards</li>
              <li>Transfer Certificate for admission in Class I onwards</li>
            </ul>

            <div className="documents-sub">
              <h4>Documents Required at Admission After Selection</h4>
              <ul>
                <li>Parents need to fill up the Admission Form along with the Medical Form, which is available at the School reception</li>
                <li>Registration Receipt</li>
              </ul>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="documents-right">
            <h3>General Information</h3>
            <ol className="general-info-list">
              <li>The School does not accept any donation in cash or in kind for admission. Should any consideration be demanded, the School Management must be promptly intimated. If anyone is found to have paid any sum of money as consideration for admission to an intermediary, individual or organisation, admission will be cancelled at the sole discretion of the School Management.</li>
              <li>The right of granting admission is subject to the laws of the land, as applicable to this institution and is reserved with the School Management. No explanation will be given if admission is not granted.</li>
              <li>Parents/Guardians/Applicants are expressly informed that the School's activities combine Academics with Sports, Adventure and Cultural Activities, some, or all of which, are compulsory as part of the overall education and development of the child.</li>
              <li>Parents/Guardians/Applicants are to confirm that no claims will be made against the School Management in respect of any loss to the child during the course of any of the activities conducted by the School.</li>
              <li>Parents/Guardians/Applicants agree to abide by the Rules and Regulations of the School, including providing appropriate indemnities, if required, in respect of any facilities arranged by the School.</li>
              <li>The School respects the rights of Parents/Guardians/Applicants to choose whether to receive information via SMS or email. However, the School reserves the right to send communications in case of emergency or important notices.</li>
            </ol>
            <button className="read-more-btn">Read More →</button>
          </div>

        </div>
      </section>

      {/* ================= AGE CRITERIA SECTION ================= */}
      <section className="age-criteria-section">
        <div className="age-criteria-container">
          <h2>Age Criteria for the Academic Year 2026–2027</h2>
          
          <div className="table-wrapper">
            <table className="age-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Date of Birth (From)</th>
                  <th>Date of Birth (To)</th>
                  <th>Age</th>
                  <th>Date as on</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Nursery</td><td>1/4/2022</td><td>31/03/2023</td><td>If the child is 3+</td><td>31st March, 2026</td></tr>
                <tr><td>JKG</td><td>1/4/2021</td><td>31/03/2022</td><td>If the child is 4+</td><td>31st March, 2026</td></tr>
                <tr><td>SKG</td><td>1/4/2020</td><td>31/03/2021</td><td>If the child is 5+</td><td>31st March, 2026</td></tr>
                <tr><td>Class I</td><td>1/4/2019</td><td>31/03/2020</td><td>If the child is 6+</td><td>31st March, 2026</td></tr>
                <tr><td>Class II</td><td>1/4/2018</td><td>31/03/2019</td><td>If the child is 7+</td><td>31st March, 2026</td></tr>
                <tr><td>Class III</td><td>1/4/2017</td><td>31/03/2018</td><td>If the child is 8+</td><td>31st March, 2026</td></tr>
                <tr><td>Class IV</td><td>1/4/2016</td><td>31/03/2017</td><td>If the child is 9+</td><td>31st March, 2025</td></tr>
                <tr><td>Class V</td><td>1/4/2015</td><td>31/03/2016</td><td>If the child is 10+</td><td>31st March, 2026</td></tr>
                <tr><td>Class VI</td><td>1/4/2014</td><td>31/03/2015</td><td>If the child is 11+</td><td>31st March, 2026</td></tr>
                <tr><td>Class VII</td><td>1/4/2013</td><td>31/03/2014</td><td>If the child is 12+</td><td>31st March, 2026</td></tr>
                <tr><td>Class VIII</td><td>1/4/2012</td><td>31/03/2013</td><td>If the child is 13+</td><td>31st March, 2026</td></tr>
                <tr><td>Class IX</td><td>1/4/2011</td><td>31/03/2012</td><td>If the child is 14+</td><td>31st March, 2026</td></tr>
                <tr><td>Class XI</td><td>1/4/2009</td><td>31/03/2010</td><td>If the child is 16+</td><td>31st March, 2026</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DO NOT TOUCH THESE THREE PARTS */}
      <div className="admission-bottom text-center">
        Growing with Excellence <br />
        Strong Foundations Start Here
      </div>

      <Form />
      <Footer />
    </div>
  );
}