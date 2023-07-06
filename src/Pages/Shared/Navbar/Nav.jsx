import { FaHome, FaMobile, FaSuitcase, FaSun, FaUserAlt } from 'react-icons/fa';
import './Nav.css';
import { useState } from 'react';

const Nav = () => {
      
        const [activeIndex, setActiveIndex] = useState(0);
      
        const handleClick = (index) => {
          setActiveIndex(index);
        };



    return (
        <>
        
        
        <div className='navigation-container'>
            <div className="navigation">
                <ul>
                    <li className={activeIndex === 0 ? 'list active' : 'list'} onClick={() => handleClick(0)}>
                        <a href="#">
                            <span className="icon"><FaHome></FaHome></span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className={activeIndex === 1 ? 'list active' : 'list'} onClick={() => handleClick(1)}>
                        <a href="#">
                            <span className="icon"><FaUserAlt></FaUserAlt></span>
                            <span className="text">Skills</span>
                        </a>
                    </li>
                    <li className={activeIndex === 2 ? 'list active' : 'list'} onClick={() => handleClick(2)}>
                        <a href="#">
                            <span className="icon"><FaSuitcase></FaSuitcase></span>
                            <span className="text">Projects</span>
                        </a>
                    </li>
                    <li className={activeIndex === 3 ? 'list active' : 'list'} onClick={() => handleClick(3)}>
                        <a href="#">
                            <span className="icon"><FaSun></FaSun></span>
                            <span className="text">Setting</span>
                        </a>
                    </li>
                    <li className={activeIndex === 4 ? 'list active' : 'list'} onClick={() => handleClick(4)}>
                        <a href="#">
                            <span className="icon"><FaMobile></FaMobile></span>
                            <span className="text">Contract</span>
                        </a>
                    </li>

                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Nav;