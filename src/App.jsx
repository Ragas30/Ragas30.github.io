import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Wellcome from "./component/Wellcome";
import ProgramingLang from "./ProgramingLang";
import About from "./About";
import ListProject from "./ListProject";
import AOS from "aos";
import { useEffect } from "react";
// import VisitorCounter from "./component/VisitorCounter";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 200,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Wellcome />
      <About />
      <ProgramingLang />
      <ListProject />
      {/* <VisitorCounter /> */}
      <Footer />
    </>
  );
}

export default App;
