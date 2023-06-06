import { Outlet } from "react-router-dom";
import Navigationbar from "../Pages/Shared/Navbar/Navigationbar";

const Main = () => {
    return (
        <div>
            <Navigationbar/>
            <Outlet/>
        </div>
    );
};

export default Main;