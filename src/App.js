import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import { useState } from "react";
function App() {
  const [isMobile, setIsMobile] = useState(true);
  const [home, setHome] = useState({
    headingText: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: ["/images/desktop-image-hero-1.jpg", "/images/mobile-image-hero-1.jpg"],
  });
  function screenWidthChecker() {
    if (window.innerWidth > 640) {
      if (isMobile) {
        setIsMobile(false);
      }
    }
    if (window.innerWidth <= 640) {
      if (!isMobile) {
        setIsMobile(true);
      }
    }
  }
  document.body.onresize = function () {
    screenWidthChecker();
  };
  return (
    <div className="App bg-white">
      <Navbar></Navbar>
      <Home headingText={home.headingText} paragraph={home.paragraph} image={window.innerWidth > 640 ? home.image[0] : home.image[1]}></Home>
      <About></About>
    </div>
  );
}

export default App;
