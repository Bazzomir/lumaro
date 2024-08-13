import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
