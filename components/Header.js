'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-xl">
          
          {/* ✅ Main flex container with 3 equal sections */}
          <div className="navbar-container d-flex align-items-center justify-content-between w-100">

            {/* Left: Logo */}
            <div className="flex-grow-1 d-flex justify-content-start">
              <a className="navbar-brand" href="/">
                <Image
                  src="/images/shared-image.png"
                  width={120}
                  height={100}
                  className="site-logo img-fluid"
                  alt="AP&A Logo"
                />
              </a>
            </div>

            {/* Center: Nav links */}
            <div className="flex-grow-1 d-flex justify-content-center">
              <ul className="navbar-nav d-flex flex-row gap-2 m-1">
                <li className="nav-item">
                  <a className="nav-link" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">CONTACT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">OUR PROJECTS</a>
                </li>
              </ul>
            </div>

            {/* Right: Theme + WhatsApp */}
            <div className="flex-grow-1 d-flex justify-content-end align-items-center gap-3">
              <div className="navbar-action-button">
                <button
                  id="themeSwitch"
                  className="themeswitch"
                  aria-label="Toggle Theme"
                >
                  <i id="themeIcon" className="fas fa-moon"></i>
                </button>
              </div>
              <div className="navbar-icon-wrapper d-flex align-items-center gap-2">
                <div className="icon-circle">
                  <a href="https://wa.me/919006016444" target="_blank" rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
                <h6 className="mb-0">+91 9006016444</h6>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
}
