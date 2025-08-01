import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Support from './components/Support/Support';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    offset: 300,
  });

  const onAosComplete = () => {
  };

  document.addEventListener('aos:in', onAosComplete);

  return () => {
    document.removeEventListener('aos:in', onAosComplete);
  };
}, []);

  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Projects />
      <Contacts />
      <Support />
      <Footer />
    </div>
  );
}

export default App;