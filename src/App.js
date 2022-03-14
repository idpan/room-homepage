import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import { useState } from "react";
function App() {
  const [home, setHome] = useState({
    headingText: "Home Shop About Contact",
    paragraph:
      "Discover innovative ways to decorate  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: "/images/desktop-image-hero-1.jpg",
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home headingText={home.headingText} paragraph={home.paragraph} image={home.image}></Home>
      <About></About>
    </div>
  );
}

export default App;
