import { Link } from "react-router-dom";



const Navigationbar = () => {
    return (
        <div className="w-100 bg-primary py-3 px-5 d-flex justify-content-between">
            <Link className="text-white text-decoration-none" to='/'>TV - Shows</Link>
            <Link className="text-white text-decoration-none" to='/'>Home</Link>
        </div>
    );
};

export default Navigationbar;