
const FancyTitle = ({title, subTitle}) => {
    return (
        <div>
            <div className="text-center my-16 w-full">
                <h1 className="uppercase text-white text-9xl font-bold opacity-5">{title}</h1>
                <h3 className="relative -top-20 text-4xl font-semibold text-white">{subTitle}</h3>
            </div>
        </div>
    );
};

export default FancyTitle;