import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'katex/dist/katex.min.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Algebra from "./pages/Algebra";
import Physics from "./pages/Physics";
import Informatics from './pages/Informatics';
import './styles/App.scss';
import LessonsPage from './pages/Lessons';
import About from './pages/About';
import Contact from './pages/Contact';
import Geometry from './pages/Geometry';
import Russian from './pages/Russian';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,      // длительность анимации
      once: true,         // запускать один раз
      easing: 'ease-out', // тип анимации
    });
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algebra" element={<Algebra />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/informatics" element={<Informatics />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/geometry" element={<Geometry />} />
        <Route path="/russian" element={<Russian />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
