import { useEffect } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Wellcome from "./component/Wellcome";
import ProgramingLang from "./ProgramingLang";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
    });
  });
  return (
    <>
      <Navbar />
      <Wellcome />
      <ProgramingLang />

      <Footer />
    </>
  );
}

export default App;
