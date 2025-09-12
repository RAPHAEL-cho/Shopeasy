import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2>Discover the Best Deals on Quality Products</h2>
              <p className="lead">Shop the latest trends and enjoy fast, reliable delivery.</p>
              <Button href="./shop" variant="light" className="btn-lg">
                Start Shopping
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"
                alt="Shopping illustration"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section className="products py-5">
        <Container>
          <h3 className="text-center mb-5 text-primary">Featured Products</h3>
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://tse3.mm.bing.net/th/id/OIP.-FKHCrmwqgGcO2QcXLc9YQHaIX?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Wireless Headphones"
                />
                <Card.Body>
                  <Card.Title>Wireless Headphones</Card.Title>
                  <Card.Text>High-quality sound, noise cancellation, 20h battery life.</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price fw-bold text-primary">$59.99</span>
                    <Button as={Link} to='./shop' variant="primary">
                      View Product
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://tse4.mm.bing.net/th/id/OIP.lqbzS_e1WGzgOCbSdmv2NAHaIr?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Smart Watch"
                />
                <Card.Body>
                  <Card.Title>Smart Watch</Card.Title>
                  <Card.Text>Track your fitness, receive notifications, stylish design.</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price fw-bold text-primary">$89.99</span>
                    <Button as={Link} to='./shop' variant="primary">
                      View Product
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://tse1.explicit.bing.net/th/id/OIP.Y9GIzpKsNWWfjZffAqcs3AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Bluetooth Speaker"
                />
                <Card.Body>
                  <Card.Title>Bluetooth Speaker</Card.Title>
                  <Card.Text>Portable, waterproof, 12h playtime, deep bass.</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price fw-bold text-primary">$39.99</span>
                    <Button as={Link} to='./shop' variant="primary">
                      View Product
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://tse3.mm.bing.net/th/id/OIP.MzrMpsxuj_HJtmJOf_vaQgHaH6?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Fitness Tracker"
                />
                <Card.Body>
                  <Card.Title>Fitness Tracker</Card.Title>
                  <Card.Text>Heart rate monitor, sleep tracking, step counter.</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price fw-bold text-primary">$29.99</span>
                    <Button as={Link} to='./shop' variant="primary">
                      View Product
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter py-5 bg-light">
        <Container className="text-center">
          <h3 className="mb-3">Stay Updated!</h3>
          <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
          <Form className="d-flex justify-content-center">
            <Form.Group controlId="formEmail" className="me-2" style={{ maxWidth: "400px" }}>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HomePage;