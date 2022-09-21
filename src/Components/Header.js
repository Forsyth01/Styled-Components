import React from 'react'
import image2 from '../Images/jack-finnigan-rriAI0nhcbc-unsplash.jpg'


export const Header = () => {
    return (
        <header className=''>
            <div className="m-auto w-[80%] py-5 borde borger-white border-opacity-[10%]" >
                <div className="md:flex w-full justify-around items-center border">
                    <div className="header-text bordr border-white rounded-[100% bg-gray-90 bg-opacity-[50%] p-3">
                        <h1 className="font-bold text-3xl md:text-4xl leading-normal md:leading-14">We make
                            <br />
                            digital photos <br />
                            film and movie <br />
                            together <br />
                            <span className="font-light text-xl">Lorem ipsum dolor sit amet consectetu</span>
                        </h1>
                        <button href="#contact" className="text-black shadow-md hover:shadow-white my-3 bg-white px-3 py-2 rounded">Capture</button>
                    </div>
                    <div className="">
                        <img src={image2} alt="" className="h-[70vh] object-cover w-full" />
                    </div>
                </div>
            </div>
        </header>
    )
}
