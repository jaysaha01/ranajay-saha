
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import './App.css'
import Mynavbar from './components/Mynavbar/Mynavbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skillsection from './components/Skillsection/Skillsection';
import Projectsection from './components/Projectsection/Projectsection';
import Footer from "../src/components/Footer/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {

  AOS.init();
  
  return (
    <>
    <Mynavbar/>
    <Banner/>
    <About/>
    <Skillsection/>
    <Projectsection/>
    <Footer/>
    </>
  )
}

export default App
