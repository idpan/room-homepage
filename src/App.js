import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import { useState } from "react";
function App() {
  const pageData = [
    {
      headingText: "Discover innovative ways to decorate",
      paragraph:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      image: ["/images/desktop-image-hero-1.jpg", "/images/mobile-image-hero-1.jpg"],
    },
    {
      headingText: "We are available all across the globe",
      paragraph:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      image: ["/images/desktop-image-hero-2.jpg", "/images/mobile-image-hero-2.jpg"],
    },
    {
      headingText: "Manufactured with the best materials",
      paragraph:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      image: ["/images/desktop-image-hero-3.jpg", "/images/mobile-image-hero-3.jpg"],
    },
  ];
  const [isMobile, setIsMobile] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
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
      <Home
        leftArrow={function () {
          if (pageIndex == 0) {
            return setPageIndex(pageData.length - 1);
          }
          setPageIndex(pageIndex - 1);
        }}
        rightArrow={function () {
          if (pageIndex == pageData.length - 1) {
            return setPageIndex(0);
          }
          setPageIndex(pageIndex + 1);
        }}
        headingText={pageData[pageIndex].headingText}
        paragraph={pageData[pageIndex].paragraph}
        image={window.innerWidth > 640 ? pageData[pageIndex].image[0] : pageData[pageIndex].image[1]}
      ></Home>
      <About></About>
    </div>
  );
}

export default App;
