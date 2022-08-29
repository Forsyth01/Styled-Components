const Navbar = () => {
    return (  
        <div className="navbar md:text-xl">
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="font-extrabold tracking-[10px] cursor-pointer hover:text-green-200">
                        LI<br />FE
                    </h1>
                </div>
                <div className="space-x-5">
                    <a href="#" className="uppercase hover:text-green-900">Projects</a>
                    <a href="#" className="uppercase hover:text-green-900">Contact</a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;