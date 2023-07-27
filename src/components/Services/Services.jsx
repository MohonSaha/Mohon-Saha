
import { services } from '../../assets/Data';
import { FaArrowRight, FaBeer } from 'react-icons/fa';
import shapeTwo from '../../assets/Pictures/shape-2.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Services.css';

// import required modules
import { Pagination } from 'swiper/modules';



const Services = () => {

    return (
        <section className="services section" id="services">
            <h2 className="section__title">
                What I Do
            </h2>
            <p className="section__subtitle">
                My <span>Services</span>
            </p>

            <Swiper
                // spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper service__container container">

                {services.map(({ name, title, description }, index) => {
                    return (
                        <SwiperSlide key={index} className="services__item card card__one">
                            <span className="services__subtitle text-cs">
                                {name}
                            </span>

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>

                            <a href="" className='link'>
                                See More
                                <FaArrowRight className='link__icon'></FaArrowRight>
                            </a>

                            <img src={shapeTwo} alt="" className='shape c__shape'/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Services;