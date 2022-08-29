import {motion} from 'framer-motion'
const Header = () => {
    return ( 
        <div className="header text-center py-10">
            <div className="flex flex-col h-[60vh] justify-center items-center">
            <h1 className="md:text-[10rem] text-[5rem] uppercase md:tracking-[20px] tracking-[10px] font-extrabold ">l<motion.span
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition={{ duration: 1, delay:1}}
            >i</motion.span>fe</h1>
            <motion.p
             initial = {{opacity: 0}}
             animate = {{opacity: 1}}
             transition={{ duration: 1, delay:2}}
            className="font-bold uppercase text-[2.2rem]  relative bottom-5 lg:bottom-[10%] md:tracking-[10px] ">website design</motion.p>
            </div>
        </div>
     );
}
 
export default Header;