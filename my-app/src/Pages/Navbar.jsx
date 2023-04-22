import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  return (
    <nav>
      <section className="sectionNavbar">
        <Button variant="primary" size="lg">
        <Link to="/" style={{textDecoration: 'none', color: "#FFFFFF"}}>Home</Link>
        </Button>
      </section>
      <section className="sectionNavbar">
        <Button variant="primary" size="lg">
        <Link to="/showcase" style={{textDecoration: 'none', color: "#FFFFFF"}}>Showcase</Link>
        </Button>
      </section>
      <section className="sectionNavbar">
        <Button variant="primary" size="lg">
        <Link to="/contact" style={{textDecoration: 'none', color: "#FFFFFF"}}>Contact</Link>
        </Button>
      </section>
    </nav>
  );
}

export default Navbar;
