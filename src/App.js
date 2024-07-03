import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Directory from './components/Directory/Directory';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Routes>
        <Route path="/" exact element={<Directory />} />;
        <Route path="/hero" exact element={<Hero />} />;
        <Route path="/about" exact element={<About />} />;
        <Route path="/contact" exact element={<Contact />} />;
        <Route path="/footer" exact element={<Footer />} />;
      </Routes>
    </div>
  );
}

export default App;
