import React from 'react';
import { FaGlobe, FaShieldAlt, FaUserTie, FaThumbsUp } from 'react-icons/fa'; // Import icons
import './Demo.css';

const Demo = () => {
  return (
    <div className="about-us-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Discover Local</h1>
        <p>
          Your trusted travel agency, making your dream destinations a reality.
        </p>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/230725152449-01-group-friend-vacation-tips-top.jpg?c=16x9"
          alt="Travel"
          className="welcome-image"
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <div className="choose-us-cards">
          <DetailsItem
            title="Exclusive Trips"
            icon={<FaGlobe />}
            description="We offer exclusive trips that fit all your adventure needs."
          />
          <DetailsItem
            title="Safety First"
            icon={<FaShieldAlt />}
            description="Your safety is our top priority in all our adventures."
          />
          <DetailsItem
            title="Expert Guides"
            icon={<FaUserTie />}
            description="Our guides are knowledgeable and professional."
          />
          <DetailsItem
            title="Happy Customers"
            icon={<FaThumbsUp />}
            description="Join the countless travelers who trust us for memorable experiences."
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section">
        <h2>Our Values</h2>
        <p>
          At Discover Local, we believe in delivering top-notch service with integrity,
          passion, and transparency.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"Discover Local made our honeymoon a dream come true!"</p>
            <span>- Sarah & Mark</span>
          </div>
          <div className="testimonial-card">
            <p>"A flawless experience, will definitely book again."</p>
            <span>- John D.</span>
          </div>
          <div className="testimonial-card">
            <p>"Best travel agency I’ve ever dealt with!"</p>
            <span>- Linda S.</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="CEO"
              className="team-image"
            />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Guide"
              className="team-image"
            />
            <h3>Jane Smith</h3>
            <p>Lead Tour Guide</p>
          </div>
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt="Manager"
              className="team-image"
            />
            <h3>Sam Green</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Ready to Explore?</h2>
        <button className="contact-us-button">
          Contact Us <span className="arrow"></span>
        </button>
      </section>
    </div>
  );
};

// Card Component for Why Choose Us Section
const DetailsItem = ({ title, icon, description }) => {
  return (
    <div className="details-item">
      <div className="icon-container">{icon}</div>
      <div className="details-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Demo;
