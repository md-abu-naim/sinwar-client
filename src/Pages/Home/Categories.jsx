import card from '../../assets/card.jpg'
import './style.css'
const Categories = () => {
    return (
        <div className="mt-14">
            <div className="flex flex-col mb-10 justify-center items-center">
                <p>-- Choose your desired Collection --</p>
                <h2 className="text-2xl font-bold uppercase">Shop By Category</h2>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* <div className="max-w-xs border border-[#BB8C2D] rounded-md hover:shadow-gray-400 hover:shadow-xl dark:bg-gray-50 dark:text-gray-800">
                    <img src={card} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className=" p-6">
                        <div className="space-y-2 text-center">
                            <h2 className="text-xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <h3 className="dark:text-gray-800 font-bold">TK. <span className='font-sans'>5000</span></h3>
                        </div>
                        <button type="button" className=" bg-[#BB8C2D] mt-2 w-full p-3 font-semibold tracking-wide rounded-md dark:bg-default-600 dark:text-gray-50">Read more</button>
                    </div>
                </div> */}
                <div className='relative'>
                    <img src={card} className='lg:w-[300px] w-full rounded-lg transform transition duration-300 hover:scale-150' alt="" />
                    <div className='bg-white rounded-b-xl absolute top-0 px-4 lg:left-32 left-10'>
                        <p className='font-sans font-semibold'>3Pis</p>
                    </div>
                </div>
                <div className='relative z-10'>
                    <img src={card} className='lg:w-[300px] w-full rounded-lg transform transition duration-300 hover:scale-150' alt="" />
                    <div className='bg-white rounded-b-xl absolute top-0 px-4 lg:left-32 left-10'>
                        <p className='font-sans font-semibold'>3Pis</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={card} className='lg:w-[300px] w-full rounded-lg' alt="" />
                    <div className='bg-white rounded-b-xl absolute lg:left-32 left-10 top-0 md:left-20 px-4 '>
                        <p className='font-sans font-semibold'>3Pis</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={card} className='lg:w-[300px] w-full rounded-lg' alt="" />
                    <div className='bg-white rounded-b-xl absolute lg:left-32 left-10 top-0 md:left-20 px-4 '>
                        <p className='font-sans font-semibold'>3Pis</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;