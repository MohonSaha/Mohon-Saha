import './Contract.css';
import {contact} from '../../assets/contact';
import Personal from './Personal';


const Contract = () => {
    return (
        <section className='contact section'>
            <h2 className="section__title">
                Contact Me
            </h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>


            <div className='contact__container container grid'>
                <div>
                    <Personal contact={contact}></Personal>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Contract;