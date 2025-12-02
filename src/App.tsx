import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "80px" }}>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Página de servicios (listado + detalle inicial) */}
          <Route path="/services" element={<ServiceDetail />} />

          {/* Página de Nosotros*/}
          <Route path="/about" element={<About />} />

          {/* Página de Contacto*/}
          <Route path="/contact" element={<Contact />} />

          {/* Detalle dinámico de un servicio */}
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
