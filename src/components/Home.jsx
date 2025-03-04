import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Home.css";
import otraImagen from "../img/cafe16.jpg"; // Una segunda imagen
import imagenDos from "../img/cafe20.jpg";
import CarouselImage from "./CarouselImage"; // Importa el componente

const Home = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <div className="hero-section-home">
        <Container className="text-center text-white">
          <Row>
            <Col>
              <h1 className="display-4 hero-title">Tierra y Grano</h1>
              <p className="lead hero-description">del origen a tu taza</p>
              <Button variant="primary" onClick={goToLogin} size="lg">
                Iniciar sesión
              </Button>
              <Button
                variant="success"
                onClick={goToSignup}
                size="lg"
                className="ms-3"
              >
                Registrarse
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <Container>
          <Row>
            <Col md={12}>
              <Carousel>
                <Carousel.Item>
                  <CarouselImage src={imagenDos} alt="Imagen Dos..." />
                </Carousel.Item>
                <Carousel.Item>
                  <CarouselImage src={otraImagen} alt="Otra imagen..." />
                </Carousel.Item>
                {/* Puedes agregar más imágenes de esta forma */}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
