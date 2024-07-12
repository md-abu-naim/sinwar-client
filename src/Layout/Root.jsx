import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";

const Root = () => {
    return (
        <div className="">
            <Navber />
            <Outlet />
        </div>
    );
};

export default Root;