import { useEffect } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Wellcome from "./component/Wellcome";
import ProgramingLang from "./ProgramingLang";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./About";
import ListProject from "./ListProject";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1200,
      delay: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  });
  return (
    <>
      <Navbar />
      <Wellcome />
      <About />
      <ListProject />
      <ProgramingLang />

      <Footer />
    </>
  );
}

export default App;
