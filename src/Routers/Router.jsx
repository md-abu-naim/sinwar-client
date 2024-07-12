import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
]);