import profile from '../assets/images/profile-2.png'

const Profile = () => {
    return (
        <div>
            <div className="">
                <div className='text-center border- border-gray-500 rounded-lg w-[300px] px-5 py-8 fixed z-10'>
                    <div className='flex justify-between text-white'>
                        <h2 className='text-4xl font-bold'>Mohon</h2>
                        <h4>Mern Stack <br />
                            Developer</h4>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-3xl w-[230px]' src={profile} alt="" />
                    </div>

                    <div className='text-center mt-8'>
                        <h3 className='text-xl text-gray-300'>mohonsaha108@gmail.com</h3>
                        <h3 className='text-xl text-gray-300'>Base in Dhaka, Bangladesh</h3>
                    </div>


                    <p className='text-base mt-6 text-gray-600'>© 2023 Mohon. All Rights Reserved</p>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;