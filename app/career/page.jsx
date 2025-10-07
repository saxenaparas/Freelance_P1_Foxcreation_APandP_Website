'use client';

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate short delay for better UX
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      e.target.reset(); // clear the form fields and file input
    }, 800);
  };

  return (
    <>
      {/* Section Career Form */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 g-5 align-items-start">
            {/* Contact / Info Section */}
            <div className="col col-xl-5">
              <div className="contact-title-wrapper">
                <div className="card contact-title">
                  
                  <h6 className="title-heading">
                   Internship Opportunities
                  </h6>
                  <h3 className="title-heading">AP&A SYSTEM!</h3>
                  <p className="mb-0 white-text">At AP&A SYSTEM, we empower the next generation of innovators through our Internship Program, offering hands-on experience, real-world learning, and expert mentorship. Whether you’re a student or recent graduate, it’s your chance to turn passion into profession.</p>

                  <h6 className="title-heading">
                   Who Can Apply?
                  </h6>
                  <ul className="check-list">
                    <li>Students pursuing <b>B.Tech, MCA, BCA, BSc (CS/IT)</b> or any related field</li>
                    <li>Recent graduates looking to enhance practical knowledge</li>
                    <li>Passionate learners eager to explore and innovate</li>
                  </ul>

                  <div className="link-wrapper">
                      <a href="/internship">Get Started Now</a>
                      <i className="fa-solid fa-arrow-circle-right" />
                    </div>
                  
                </div>
                
              </div>
            </div>

            {/* Career Form */}
            <div className="col col-xl-7">
              {status === "success" && (
                <div className="alert success mb-3">
                  <span className="check-icon">
                    <i className="fa-solid fa-2xl fa-check" />
                  </span>
                  <p>✅ Thank you! Your application has been submitted.</p>
                </div>
              )}

              {status === "loading" && (
                <div className="alert info mb-3">
                  <p>Sending...</p>
                </div>
              )}

              <div className="form-layout-wrapper" style={{ marginTop: 0, paddingTop: 0 }}>
                <div className="card form-layout">
                  <h3 className="title-heading">Submit Your Resume</h3>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col">
                        
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="number"
                          name="Phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          className="file-input"
                        />
                      </div>
                    </div>

                    <div className="row row-cols-md-1 row-cols-1 g-3">
                      
                      <div className="col">
                        
                        <textarea id="message" name="user_message" 
                        rows="4" cols="50" placeholder="Type your message here...">
                        </textarea>

                      </div>
                    </div>

                    <div className="form-button-container">
                      <button
                        type="submit"
                        className="btn btn-accent"
                        disabled={status === "loading"}
                      >
                        <span className="btn-title">
                          {status === "loading" ? "Sending..." : "Send"}
                        </span>
                        <span className="icon-circle">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
