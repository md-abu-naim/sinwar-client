
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="mx-auto bg-[#BB8C2D] text-center  my-8">
            <p className=" italic pt-4">--- {subHeading} ---</p>
            <h3 className="text-3xl md:text-2xl lg:text-3xl  uppercase  pb-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;