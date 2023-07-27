import profileImg from '../../assets/Pictures/profile.png';
import shapeOne from '../../assets/Pictures/shape-1.png';
import shapeTwo from '../../assets/Pictures/shape-2.png';
import './Home.css';
import { IoArrowDownOutline, IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Home = () => {
    return (
        <section className='home' id='home'>

            <div className="home-wrapper">
                <div className="home__container container">
                    <p className="home__subtitle text-cs">
                        Hello, <span>My Name Is</span>
                    </p>
                    <h1 className="home__title text-cs">
                        <span>Mohon</span> Saha
                    </h1>

                    <p className="home__job">
                        <span className="text-cs">I am</span> <b>Web Developer</b>
                    </p>

                    <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className='home__profile' />
                        </div>

                        <p className="home__date home__date-one">
                            <span className="text-lg">
                                1 <b>+</b>
                            </span>


                            <span className="text-sm text-cs">
                                Years of  <span>Experience</span>
                            </span>
                        </p>


                        <p className="home__date home__date-two">
                            <span className="text-lg">
                                20
                            </span>


                            <span className="text-sm text-cs">
                                Completed <span>Projects</span>
                            </span>
                        </p>


                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />



                    </div>

                    <p className="home__text">
                        From Dhaka, Bangladesh. Solid understanding of MERN stack, JavaScript, HTML and CSS. Committed to continuous learning and staying updated with industry trends.
                    </p>

                    <div className="home__socials">
                        <a className='home__social-link' href="https://www.linkedin.com/in/mohonsaha/"><IoLogoLinkedin></IoLogoLinkedin></a>

                        <a className='home__social-link' href="https://github.com/MohonSaha"><IoLogoGithub></IoLogoGithub></a>

                        <a className='home__social-link' href="https://www.facebook.com/spdmohonsaha/"><IoLogoFacebook></IoLogoFacebook></a>
                    </div>

                    <div className="home__btn">
                        <a href="" className="btn text-cs">Download Resume</a>

                        <a href="" className="hero__link text-cs">My Skills</a>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Home;