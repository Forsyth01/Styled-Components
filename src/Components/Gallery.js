import React from 'react'
import image from '../Images/ready-rey-zTNBumJSOto-unsplash.jpg'

import { BsArrowRight } from 'react-icons/bs'

export const Gallery = () => {
    return (
        <div className='my-10 m-auto w-[80%]' id='gallery'>
            <div className="">
                <div className="md:flex justify-end">
                    <div className="">
                        <h1 className="md:text-[10rem] text-[5rem] overflow-hidden opacity-[100] tracking-[2px] z-10  shadow-white font-bold text-red-500 ">Gall<span className='opacity-[100%] text-white'>e</span>ry <span className=''></span>
                        </h1>
                        {/* <p className="md:w-[50] text-justify mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab tenetur reici</p> */}
                    </div>
                </div>
                <div className="m-auto w-[80%] ">
                    {/* <h1 className="font-bold text-white text-4xl my-10 text-center">Gallery</h1> */}
                    <div className="md:flex gap-3 object-fit overflow-hidden justif-center md:my-5 md:space-y-0 space-y-">
                        <div className="">
                            <img src={image} alt="" className="md:h-[81vh] md:w-[100%] object-cover" />
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <img src={image} alt="" className="md:h-[40vh] md:w-[50%] object-cover" />
                                <img src={image} alt="" className="md:h-[40vh] md:w-[50%] object-cover" />

                            </div>
                            <div className="flex gap-3">
                                <img src={image} alt="" className="md:h-[40vh] md:w-[50%] object-cover" />
                                <img src={image} alt="" className="md:h-[40vh] md:w-[50%] object-cover" />

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end text-white">
                        <p className=""><BsArrowRight className='text-white text-4xl font-bold' /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
