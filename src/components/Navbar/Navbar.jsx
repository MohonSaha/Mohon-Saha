import { useEffect, useState } from "react";
import './Navbar.css';
import { IoCloseSharp, IoReorderTwo } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark__theme");
  const [navOpen, SetNavopen] = useState(false);
  console.log(open);


  //  Dark and white theme code
  const toggleTheme = () => {
    if (theme === "dark__theme") {
      setTheme("light__theme")
    }
    else {
      setTheme("dark__theme")
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])


  // Nav item array
  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "SERVICES", link: "services" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  // To show the navbar shadow after scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);



  return (
    <nav
      className={`fixed nav__container w-full left-0 top-0 z-[999] text-white
      ${sticky ? "shadow-lg sticky__bg" : ""
        }      `}
    >
      <div className="flex container__nav items-center justify-between w-full">
        <div className="">
          <Link to="home" smooth={true} duration={2000}>
            <span className="text-4xl uppercase font-bold flex">
              <span className="text_m">M</span>
              <h4 className="name__logo">OHON</h4>
            </span>
          </Link>
        </div>


        <div>
          <div className="flex items-center">


            <span className="mr-5 logo__moon cursor-pointer" onClick={() => toggleTheme()}>
              {
                theme === "dark__theme" ? <FaSun></FaSun> : <FaMoon></FaMoon>
              }
            </span>


            <div
              onClick={() => setOpen(!open)}
              className={`z-[999] menu__bar relative top-0 right-0  ${open ? "text-gray-900" : "text-gray-100"
                } text-3xl my-4 `}
            >

              {
                open ? <span className="open__nav cursor-pointer"><IoCloseSharp></IoCloseSharp></span> : <IoReorderTwo className="close__nav cursor-pointer logo__hamburger"></IoReorderTwo>
              }



            </div>
          </div>

          <div
            className={`nav__area text-gray-900 absolute w-2/3 md:w-2/12 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
              }`}
          >
            <ul className="flex flex-col mt-[50%] h-full gap-10 py-2 text-lg">
              {menuLinks?.map((menu, i) => (
                <li
                  
                  key={i}
                  className="px-6 hover:text-cyan-600"
                >
                  <Link onClick={() => setOpen(false)} className="cursor-pointer" to={menu?.link} smooth={true} duration={1000}>{menu?.name}</Link>
                </li>
              ))}


            </ul>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;