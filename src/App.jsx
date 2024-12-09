import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Wellcome from "./component/Wellcome";
import ProgramingLang from "./ProgramingLang";
import About from "./About";
import ListProject from "./ListProject";
import AOS from "aos";
import { useEffect } from "react";
import WellcomePartII from "./component/WellcomePartII";

function App() {
  useEffect(() => {
    AOS.init({
      mirror: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Wellcome />
      <WellcomePartII />
      <About />
      <ListProject />
      <ProgramingLang />

      <Footer />
    </>
  );
}

export default App;
