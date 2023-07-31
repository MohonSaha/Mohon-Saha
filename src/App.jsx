import Home from "./components/Home/Home";
import './app.css'
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contract from "./components/Contract/Contract";
// import Navbar from "./oldComponents/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";


const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <div>

      {
        loading ?
          <div className="flex justify-center items-center min-h-screen">

            <ScaleLoader
              color={"#29a385"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <>
            <Navbar></Navbar>
            <Home></Home>
            <Services></Services>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contract></Contract>
            <Footer></Footer>
          </>

      }



    </div>
  );
};

export default App;