import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";

const Root = () => {
    return (
        <div className="font-serif text-black">
            <Navber />
            <Outlet />
        </div>
    );
};

export default Root;