import React from 'react'

const page = () => {
  return (
   <div className="card-service-wrapper">

      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2
                className="title-heading animate-box animated animate__animated"
                data-animate="animate__fadeInRight"
              >
                Products of AP&A SYSTEM!
              </h2>
              <nav className="breadcrumb">
                <a href="/" className="gspace-2">
                  Home
                </a>
                <span className="separator-link">/</span>
                <p className="current-page">Our Products</p>
              </nav>
            </div>
            <div className="spacer" />
          </div>
        </div>
      </div>

      <div className="hero-container">
        <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2 justify-content-center text-center g-4 mb-5">

        <div className="col">
          <div
            className="card card-service animate-box animated slow animate__animated"
            data-animate="animate__fadeInLeft"
          >
            <div className="d-flex flex-column align-items-center text-center gap-3">
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  <img
                    src="/images/Icon-4.png"
                    alt="Service Icon"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="service-title">
                <h4>School Management System</h4>
              </div>
            </div>
            <p>
             In this project we created a SMS for our Client, Admin / Parent / Teacher / Student Portals include.
            </p>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-service animate-box animated animate__animated"
            data-animate="animate__fadeInLeft"
          >
            <div className="d-flex flex-column align-items-center text-center gap-3">
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  <img
                    src="/images/Icon-4.png"
                    alt="Service Icon"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="service-title">
                <h4>Hospital Management System</h4>
              </div>
            </div>
            <p>
              In this project we created a HMS for our Client, Admin / Doctor / Patient  Portals include.
            </p>
          </div>
        </div>


        </div>
    </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'AP&A Systems - Services Page',
  description: 'Your digital marketing partner for growth and success',
  icons: {
    icon: '/favicon.ico',
  },
};
