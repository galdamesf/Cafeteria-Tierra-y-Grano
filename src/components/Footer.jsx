import "../Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="footer-link">
                    Home
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="footer-link">
                    Menú
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="footer-link">
                    Ofertas
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="footer-link">
                    Perfil
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="footer-link">
                    Contacto
                  </a>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <img
            src="/src/img/Logo.png" // Ruta de tu logo de cafetería
            alt="Logo Cafetería Tierra y Grano"
            className="footer-logo"
          />
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>Cafetería Tierra y Grano: del origen a tu taza</p>
              </div>
            </div>
          </section>

          <section className="text-center social-icons mb-5">
            <a href="#!" className="me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#!" className="me-4">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="footer-bottom text-center">
          <p>
            © 2024 Copyright: &nbsp;
            <a href="#">Cafeteria Tierra y Grano</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
