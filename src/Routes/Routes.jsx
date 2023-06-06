import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ShowSummary from "../Pages/ShowSummary/ShowSummary";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/showsummary',
                element: <ShowSummary/>
            }
        ]
    }
]);