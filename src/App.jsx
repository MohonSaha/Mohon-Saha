import Home from "./components/Home/Home";
import './app.css'
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contract from "./components/Contract/Contract";
// import Navbar from "./oldComponents/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";



const App = () => {
  return (
    <div>

      
      <Navbar></Navbar>
      {/* <Navbar></Navbar> */}
      <Home></Home>
      <Services></Services>
      <Skills></Skills>
      <Portfolio></Portfolio>
      {/* <Resume></Resume> */}
      <Contract></Contract>

    </div>
  );
};

export default App;