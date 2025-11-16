import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      {/* YE SAB ID KE SAATH HAIN → SIDEBAR SE SCROLL HOGA */}
      <section id="home"><Home /></section>
      <section id="categories"><Categories /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="about-us"><About /></section>
      <section id="testimonials"><Testimonials /></section>
      
      {/* Footer ko id diya → Contact button yahan le aayega */}
      <section id="contact-us"><Footer /></section>
    </>
  );
}

export default App;