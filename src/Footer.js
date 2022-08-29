import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import {BsArrowDown} from 'react-icons/bs'
const Footer = () => {
    return ( 
        <div className="footer md:text-xl " >
            <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-3">
                    <FaFacebook className='hover:text-green-200'/>
                    <FaTwitter className='hover:text-green-200'/>
                    <FaInstagram className='hover:text-green-200'/>
                </div>
                <div className="flex items-center flex-col gap-5 md:mt-0">
                    <h1 className="rotate-90 hover:text-green-200">Scroll</h1>
                     <BsArrowDown className='text-2xl animate-bounce hover:text-green-200'/>

                </div>
            </div>
        </div>
     );
}
 
export default Footer;