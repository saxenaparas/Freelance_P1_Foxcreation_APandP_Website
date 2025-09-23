import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
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
                  <p>
                    Reach out to us for tailored digital solutions that drive
                    results sollicitudin nec.
                  </p>

                  {/* Phone */}
                  <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-phone-volume accent-color" />
                      </div>
                    </div>
                    <div className="d-grid">
                      <span>Phone Number</span>
                      <h5>+91 9006016444</h5>
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
                      <h5>info@apasystemllp.com</h5>
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
                      <span>Office Address</span>
                      <h5>
                        AP&A SYSTEM, Tajvag Pokhra, Hajipur, Vaishali,
                        Bihar-844101
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col col-xl-7">
              <div id="success-message" className="alert success hidden">
                <span className="check-icon">
                  <i className="fa-solid fa-2xl fa-check" />
                </span>
                <p>Thank you! Form submitted successfully.</p>
              </div>
              <div className="form-layout-wrapper">
                <div className="card form-layout">
                  <h3 className="title-heading">
                    Let's Talk About Your Next Project
                  </h3>
                  <form
                    action="/successMessage"
                    method="post"
                    id="contactForm"
                    className="form"
                  >
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Message"
                    />
                    <div className="form-button-container">
                      <button type="submit" className="btn btn-accent">
                        <span className="btn-title">
                          <span>Send a Message</span>
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
