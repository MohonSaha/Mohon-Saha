import { useEffect, useState } from "react";
// import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    const menuLinks = [
        { name: 'HOME', link: '#home' },
        { name: 'ABOUT', link: '#about' },
        { name: 'SKILLS', link: '#skills' },
        { name: 'PROJECTS', link: '#projects' },
        { name: 'CONTRACT', link: '#contract' }

    ]

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            const nav = document.querySelector('nav');
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    },[])


    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'md:bg-white/60 text-gray-900': 'text-white'}`}>
            <div className="flex items-center justify-between">
                <div className="mx-7 ">
                    <h4 className="text-4xl uppercase font-bold">M<span className="text-cyan-600">oh</span>on</h4>
                </div>

                <div className={`text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full ${sticky ? 'md:bg-white/0 bg-white': 'bg-white'}`}>
                    <ul className="flex items-center gap-1 py-2 text-lg font-semibold">
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className="px-6 hover:text-cyan-600">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* <div>
                    {
                        // <Navbar></Navbar>
                    }
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;