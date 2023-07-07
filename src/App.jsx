
// import Navbar from './Pages/Shared/Navbar/Navbar';

import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Banner from "./Pages/Home/Banner/Banner";
import About from "./components/About/About";
import Bot from "./components/Bot/Bot";
import Contact from "./components/Contract/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Bot></Bot>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      


    </div>
  );
};

export default App;