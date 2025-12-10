// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import State from "./hooks/State";
import User from "./components/User";
import Form from "./components/Form";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        <div style={{ padding: "20px" }}>
          
          {/* Counter Component */}
          <State />

          {/* User Component */}
          <User
            name="first"
            age={22}
            skills={["html", "css", "js", "mern"]}
          />

          {/* Form Component */}
          <Form />

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product Pages */}
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            {/* Fallback Route */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
