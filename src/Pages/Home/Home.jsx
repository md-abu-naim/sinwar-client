import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Categories from "./Categories";

const Home = () => {
    return (
        <div className="font-serif">
            <Banner />
            <div className="lg:px-14 px-5">
                <Categories />
                <BestSellers />
            </div>
        </div>
    );
};

export default Home;