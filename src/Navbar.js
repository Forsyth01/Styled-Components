import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar text-white bg-yellow-80">
            <div className="flex  justify-between py-5">
                <h1 className="">
                    <div className="font-extrabold text-2xl text-yellow-700">My Notes</div>
                </h1>
                <div className="">
                    {/* <Link className="font-extrabold text-2xl" to = '/'>Back</Link> */}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;