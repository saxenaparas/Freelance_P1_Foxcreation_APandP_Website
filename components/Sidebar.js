'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div>
        <div className="content-overlay">
          <div className="content-edit-sidebar">
            <div className="sidebar-header">
              <div></div>
              <div className="close-btn-second">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <div className="content">
              <span>Click on the Edit Content button to edit/add the content.</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
        <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="sidebar-header">
            <div className="logo">
              <img src="/images/marko-logo.png" className="site-logo img-fluid logo" alt="Logo" />
            </div>
            <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
              <span>X</span>
            </button>
          </div>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li className="sidebar-dropdown">
              <div className="dropdown-header">
                <a href="#">Services</a>
                <button 
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleDropdown('services')}
                >
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <ul className={`sidebar-dropdown-menu ${openDropdown === 'services' ? 'active' : ''}`}>
                <li><a href="/service">Service</a></li>
                <li><a href="/single_services">Service Details</a></li>
              </ul>
            </li>              
            <li className="sidebar-dropdown">
              <div className="dropdown-header">
                <a href="#">Pages</a>
                <button 
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleDropdown('pages')}
                >
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <ul className={`sidebar-dropdown-menu ${openDropdown === 'pages' ? 'active' : ''}`}>
                <li><a href="/case_studies">Case Studies</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/partnership">Partnership</a></li>
                <li><a href="/pricing">Pricing Plan</a></li>
                <li><a href="/testimonial">Testimonial</a></li>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/404">Error 404</a></li>
              </ul>
            </li>  
            <li className="sidebar-dropdown">
              <div className="dropdown-header">
                <a href="#">Archive</a>
                <button 
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleDropdown('archive')}
                >
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <ul className={`sidebar-dropdown-menu ${openDropdown === 'archive' ? 'active' : ''}`}>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/single_post">Single Post</a></li>
              </ul>
            </li>  
            <li className="below-dropdown"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}