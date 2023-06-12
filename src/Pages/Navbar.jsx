// Description: This is the navbar component. 
// It is used to navigate between pages.

// Import libraries
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Function to create a button that links to a page (cleaner code)
// to: the path to the page
// text: the text that will be displayed on the button
function getLinkedButtons(to, text){
  return (
  <section className="sectionNavbar">
<<<<<<< HEAD
    <Link to={"/"+to} style={{textDecoration: 'none'}}>
      <Button className="btn oppGradientHome fonts" type="submit" size="lg" style={{color:"black"}}>
        {text}
      </Button>
    </Link>
  
=======
    <Button variant="primary" size="lg">
      <Link to={"/"+to} style={{textDecoration: 'none', color: "#FFFFFF"}}>{text}</Link>
    </Button>
>>>>>>> c9ab15ac1cd4fbab06b4bd00cb64e03367a70113
  </section>)
}

// The navbar component
export default function Navbar() {
  return (
    <nav style={{backgroundColor:"black"}}>
      {getLinkedButtons("", "Home")}
      {getLinkedButtons("showcase", "Showcase")}
      {getLinkedButtons("contact", "Contact")}
    </nav>
  );
}