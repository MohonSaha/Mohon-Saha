import Items from './Items';
import List from './List';
import './Portfolio.css';
import { projects } from '../../assets/Data';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';


const Portfolio = () => {

    const sixProject = projects.slice(0, 3);
    console.log(sixProject);

    const allNavLInk = [
        'all', ...new Set(projects.map((project) => project.category))
    ];
    console.log(allNavLInk);

    const [projectItems, setMenuItems] = useState(sixProject);
    const [navList, setCategory] = useState(allNavLInk);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(sixProject);
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems);
    }



    return (
        <section className="portfolio section" id="projects">
            <h2 className="section__title">
                Portfolio
            </h2>
            <p className="section__subtitle">
                My <span>Projects</span>
            </p>

            <List navList={navList} filterItems={filterItems}></List>

            <div className="portfolio__container container grid">
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems}></Items>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;