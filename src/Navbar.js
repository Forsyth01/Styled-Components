import { Link } from "react-router-dom";
import {BsPower} from "react-icons/bs"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
import { Logout } from "./Logout";

const Navbar = () => {

    return ( 
        <div className="navbar text-white overflow-hidden">
            <div className="flex  justify-between pt-10 pb-5 items-center">
                <h1 className="">
                    <div className="font-extrabold text-2xl text-yellow-700">My Notes</div>
                </h1>
                <Popover
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                    }}
                    >
                    <PopoverHandler>
                        <button className="font-extrabold text-2xl text-yellow-700 cursor-pointer hover:text-yellow-600"><BsPower/></button>
                    </PopoverHandler>
                    <PopoverContent className="bg-yellow-800 border-none">
                        <Logout/>
                    </PopoverContent>
                 </Popover>
                    {/* <div className="font-extrabold text-2xl text-yellow-700 cursor-pointer hover:text-yellow-600"><BsPower/></div> */}
            </div>
        </div>
     );
}
 
export default Navbar;