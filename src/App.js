import './App.css';
import { Nav } from './components/Nav/Nav';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Gallery from './container/Gallery/Gallery';
import Header from './container/Header/Header';
import Infor from './container/Infor/Infor';
import Intro from './container/Intro/Intro';
import Menu from './container/Menu/Menu';

function App() {

  return (

    <div>
      <Nav/>
      <Header/>
      <About/>
      <Menu/>
      <Intro/>
      <Gallery/>
      <Infor/>
      <Footer/>
    </div>

  );

};

export default App;
