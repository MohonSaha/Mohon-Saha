import FancyTitle from "../../../components/FancyTitle";


const AboutMe = () => {
    return (
        <div>
            <FancyTitle title={"About Me"} subTitle={"Know Me More"}></FancyTitle>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 bg-blue-500 p-4">
                        <h2> I'm Mohon Saha, a Web Developer</h2>

                        <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                    </div>
                    <div className="col-span-2 bg-red-500 p-4">
                        {/* Content for the second div */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;