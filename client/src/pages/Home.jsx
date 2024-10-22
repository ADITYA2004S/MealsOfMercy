import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Carousel from "../component/Carousel";
import Usage from "../component/Usage";
import Solution from "../component/Solution";
import Achievement from "../component/Achievement";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <body>
      <Navbar />
      <Hero />
      <Usage />
      <Carousel />
      <Solution />
      <Achievement />
      <Footer />
    </body>
  );
}
