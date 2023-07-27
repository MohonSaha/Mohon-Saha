import './Contract.css';
import { contact } from '../../assets/contact';
import Personal from './Personal';


const Contract = () => {
    return (
        <section className='contact section' id='contact'>
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
                <div className='contact__form'>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <div>
                            <p>Your Full Name*</p>
                            <input className='' type="text" />
                        </div>
                        <div>
                            <p>Your Email Address*</p>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='email__address mt-6'>
                        <p>Your Email Address*</p>
                        <input className='w-full' type="text" />
                    </div>

                    <div className='email__address mt-6'>
                        <p>Your Message*</p>
                        <textarea className='w-full h-24' name="" id="" cols="30" rows="30"></textarea>
                    </div>

                    <div className='w-full text-right'>
                        <input className='btn text-cs submit__btn cursor-pointer' type="submit" value="Send Message" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contract;