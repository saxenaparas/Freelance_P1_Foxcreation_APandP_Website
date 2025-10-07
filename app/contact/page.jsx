'use client';

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Section Contact */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 g-5">
            {/* Contact Details */}
            <div className="col col-xl-5">
              <div className="contact-title-wrapper">
                <div className="card contact-title">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot" />
                    <span>Reach out to us</span>
                  </div>
                  <h2 className="title-heading">Get in Touch</h2>

                  {/* Phone */}
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-phone accent-color" />
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Phone Number</span>
                      <p>90060 16444</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-envelope accent-color" />
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Email Address</span>
                      <p>info@apasystemllp.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-location-dot accent-color" />
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Address</span>
                      <p>Tajvag Pokhra, Hajipur, Vaishali, Bihar-844101</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col col-xl-7">
              {status === "success" && (
                <div className="alert success mb-3">
                  <p>✅ Thank you! Form submitted successfully.</p>
                </div>
              )}
              {status === "loading" && (
                <div className="alert info mb-3">
                  <p>Sending...</p>
                </div>
              )}
              {status === "error" && (
                <div className="alert error mb-3">
                  <p>❌ Something went wrong. Please try again.</p>
                </div>
              )}

              <div className="form-layout-wrapper">
                <div className="card form-layout">
                  <h3 className="title-heading">Let's Talk About Your Next Project</h3>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="text"
                          name="first-name"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="last-name"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    {/* Dropdowns */}
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <select name="service" required>
                          <option value="">How can we help?</option>
                          <option value="web-dev">
                            Web Application Development Services
                          </option>
                          <option value="mobile-dev">
                            Mobile Application Development Services
                          </option>
                          <option value="emerging-tech">
                            Emerging Technologies (AI/ML, Data Science, Blockchain etc)
                          </option>
                          <option value="staff-aug">Staff Augmentation</option>
                          <option value="quality-eng">
                            Quality Engineering Services
                          </option>
                          <option value="cloud-devops">
                            Cloud & DevOps Services
                          </option>
                          <option value="other-business">
                            Other Business Services
                          </option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>

                      <div className="col">
                        <select name="country" required>
                          <option value="">Select Your Country</option>
                          {[
                            "India", "United States", "United Kingdom", "Australia", "Canada",
                            "Germany", "France", "Japan", "China", "Brazil", "Singapore",
                            "United Arab Emirates", "Italy", "Spain", "South Africa", "Nepal",
                            "Bangladesh", "Pakistan", "Sri Lanka", "Malaysia"
                          ].map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Message"
                    ></textarea>

                    <div className="form-button-container">
                      <button
                        type="submit"
                        className="btn btn-accent"
                        disabled={status === "loading"}
                      >
                        <span className="btn-title">
                          {status === "loading" ? "Sending..." : "Send a Message"}
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

      {/* Section Maps */}
      <div className="section pt-0">
        <div className="hero-container">
          <iframe
            loading="lazy"
            className="maps overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28842.98902081362!2d85.2113583!3d25.6950457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed584d2c7f34d7%3A0x4cf2b9b9adf8a2a2!2sHajipur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1695480000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            title="AP&A System Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}

// export const metadata = {
//   title: 'AP&A Systems - Contacts Page',
//   description: 'Your digital marketing partner for growth and success',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };
