import React from "react";
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <h2>Get Updated The Latest Newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter Email" required />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <img src="/path_to_logo" alt="Logo" />
          <h3>Discover Local</h3>
          <p>Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Service</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Tour Booking Now</a></li>
          </ul>
        </div>

        <div className="footer-address">
          <h3>Address</h3>
          <p>+01 234 567 890</p>
          <p>+09 876 543 210</p>
          <p><a href="mailto:mailinfo00@tourm.com">mailinfo00@tourm.com</a></p>
          <p><a href="mailto:support24@tourm.com">support24@tourm.com</a></p>
          <p>789 Inner Lane, Holy park, California, USA</p>
        </div>

        <div className="footer-instagram">
          <h3>Instagram Post</h3>
          <div className="instagram-images">
            <img src="/1.jpg" alt="Instagram 1" />
            <img src="/2.jpg" alt="Instagram 2" />
            <img src="/3.jpg" alt="Instagram 3" />
            <img src="/16.jpg" alt="Instagram 4" />
            <img src="17.jpg" alt="Instagram 5" />
            <img src="/18.jpg" alt="Instagram 6" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2024 Tourm. All Rights Reserved.</p>
        <div className="payment-icons">
          <img src="" alt="Mastercard" />
          <img src="" alt="Visa" />
          <img src="" alt="Paypal" />
          <img src="" alt="Apple Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
