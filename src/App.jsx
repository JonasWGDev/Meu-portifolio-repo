import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from './components/Header';
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import About from "./pages/About";

import './App.css';

function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projetos" element={<Projects />}></Route>
          <Route path="/contato" element={<Contact />}></Route>
          <Route path="/sobre" element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App;
