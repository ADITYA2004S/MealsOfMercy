import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Usage from "./component/Usage";
import Solution from "./component/Solution";
import Achievement from "./component/Achievement";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";

import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Usage />
      <Carousel />
      <Solution />
      <Achievement />
      <Footer />
    </div>
  );
}
