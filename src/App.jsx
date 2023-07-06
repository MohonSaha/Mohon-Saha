
// import Navbar from './Pages/Shared/Navbar/Navbar';

import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Banner from "./Pages/Home/Banner/Banner";
import About from "./components/About/About";
import Bot from "./components/Bot/Bot";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
      {/* <Banner></Banner>
      <AboutMe></AboutMe> */}
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Bot></Bot>


    </div>
  );
};

export default App;