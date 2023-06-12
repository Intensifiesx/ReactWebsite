// This is the main entry point of the app

// Import components
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Layout from "./Pages/Layout";
import Contact from "./Pages/Contact";
import Showcase from "./Pages/Showcase";

// Import libraries
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // Routes to the different pages
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Renders the App component into a div with the id of 'root'
ReactDOM.render(<App />, document.getElementById("root"));
