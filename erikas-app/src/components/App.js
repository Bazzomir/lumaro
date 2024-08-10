import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Homepage from './pages/Homepage';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Services />
    </>
  );
}

export default App;
