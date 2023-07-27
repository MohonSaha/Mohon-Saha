import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/Pictures/shape-2.png';
import { useState } from 'react';
import { motion } from "framer-motion"


const Items = ({ projectItems }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {projectItems.map((projectItem) => {
                const { id, img, category, title, description } = projectItem;
                return (
                    <motion.div
                    layout
                    animate={{opacity:1, scale: 1}}
                    initial={{opacity:0.8, scale: 0.6}}
                    exit={{opacity:0.8, scale: 0.6}}
                    transition={{duration: 0.3}}
                     className="portfolio__items card card__two" key={id}>
                        {/* <div className="portfolio__image-wrapper">
                            <img src={img} alt="" className="portfolio__img object-top hover:object-bottom duration-700" />
                        </div> */}

                        {/* image scroll jsx code  */}
                        <div className="image-wrap">
                            <img src={img} />
                        </div>


                        <span className="portfolio__category text-cs">{category}</span>

                        <h3 className="portfolio__title">{title}</h3>

                        <p className="portfolio__description">{description}</p>

                        <a href="" className="link">
                            See Details
                            <FaArrowRight className='link__icon'></FaArrowRight>
                        </a>

                        <img src={shapeTwo} alt="" className="shape c__shape" />

                    </motion.div>
                )
            })}
        </>
    );
};

export default Items;