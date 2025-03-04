import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Private from "./components/Private";
import Home from "./components/Home"; // Importa el componente Home
import { useState } from "react";
import Navbar from "./components/NavbarComponent"; // Navbar global
import Footer from "./components/Footer"; // Importa el Footer

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* Navbar global visible en todas las páginas */}
      <Navbar setIsAuthenticated={setIsAuthenticated} />

      <div className="container">
        <Routes>
          {/* Establece Home como el componente principal */}
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/private"
            element={isAuthenticated ? <Private /> : <Navigate to="/login" />}
          />
          {/* Redirige a Home si no hay ninguna ruta coincidente */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Agrega el Footer al final */}
      <Footer />
    </Router>
  );
}

export default App;
