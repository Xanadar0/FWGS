import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
// import Support from './components/Support/Support';
// import Contacts from './components/Contacts/Contacts';
// import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Projects />
      {/*<Support />
      <Contacts />
      <Footer /> */}
    </div>
  );
}

export default App;