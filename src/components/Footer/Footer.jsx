import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="g-4">
          {/* Brand Column */}
          <Col lg={3} md={6}>
            <div className="mb-4">
              <h3 className="mb-3">ShopEasy</h3>
              <p className="text-white">
                Your trusted destination for quality products and exceptional service.
              </p>
              <div className="social-links d-flex gap-3">
                <a href="#" aria-label="Facebook" className="text-white">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" aria-label="Twitter" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" aria-label="Instagram" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col lg={3} md={6}>
            <div className="mb-4">
              <h3 className="mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/shop" className="text-white text-decoration-none">Shop</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white text-decoration-none">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Customer Service Column */}
          <Col lg={3} md={6}>
            <div className="mb-4">
              <h3 className="mb-3">Customer Service</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/account" className="text-white text-decoration-none">My Account</Link>
                </li>
                <li className="mb-2">
                  <Link to="/track-order" className="text-white text-decoration-none">Order Tracking</Link>
                </li>
                <li className="mb-2">
                  <Link to="/wishlist" className="text-white text-decoration-none">Wishlist</Link>
                </li>
                <li className="mb-2">
                  <Link to="/returns" className="text-white text-decoration-none">Returns & Exchanges</Link>
                </li>
                <li className="mb-2">
                  <Link to="/shipping" className="text-white text-decoration-none">Shipping Information</Link>
                </li>
                <li>
                  <Link to="/support" className="text-white text-decoration-none">Support Center</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact Column */}
          <Col lg={3} md={6}>
            <div className="mb-4">
              <h3 className="mb-3">Contact Us</h3>
              <ul className="list-unstyled text-white">
                <li className="mb-2">
                  456 Commerce Ave, Suite 200<br />
                  New York, NY 10001
                </li>
                <li className="mb-2">
                  Email: <a href="mailto:support@shopeasy.com" className="text-white text-decoration-none">support@shopeasy.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+2349027796598" className="text-white text-decoration-none">(234)-902-779-6598</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        
        <Row>
          <Col className="text-center pt-3 border-top border-secondary">
            <p className="mb-0 text-white">&copy; 2025 ShopEasy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;