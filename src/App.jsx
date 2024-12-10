import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";

function App() {
  return (
    <div className="min-h-screen font-ibm antialiased ">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
