import img1 from '../../../assets/Banner/andrew-neel-cckf4TsHAuw-unsplash (1).jpg'

const Banner = () => {
    return (
        <div>
            

            <div className=" relative w-full">
                    <img src={img1} className="w-full max-h-screen bg-cover bg-center" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#000000d4] to-[#00000070] h-full w-full">

                        <div className='text-white w-full text-center md:mt-28 absolute'>
                            <h2 className='text-4xl md:text-5xl mb-2  tracking-wider font-custom text-[#EFCF4F]'>Wellcome </h2>
                            <h2 className='text-5xl md:text-9xl mb-10 tracking-wider mt-0'>I am Mohon Saha</h2>

                            <div className='w-2/3 mx-auto'>
                                <p className='text-xl'>Unlock the Power of Music: Join Our Online Music Class Platform for an Enriching and Inspiring Learning Experience!</p>
                            </div>
                            <button className="btn btn-primary">Hire Me</button>

                        </div>

                    </div>
                </div>


        </div>
    );
};

export default Banner;