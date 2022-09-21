import React from 'react'

export const Navbar = () => {

    return (
        <div className="m-auto w-[80%] py-10">
            <div className="flex justify-between items-center">
                <div className="space-x-3">
                    <a href="/" className='font-bold text-2xl tracking-wide'>PhotoHub</a>
                </div>
                <div className="space-x-3">
                    <a href="#explore" className='hover:bg-white hover:text-black p-3 hover:shadow-white hover:shadow-md '>Explore</a>
                    <a href="#gallery" className='hover:bg-white hover:text-black p-3 hover:shadow-white hover:shadow-md '>Gallery</a>
                    <a href="#contact" className='hover:bg-white hover:text-black p-3 hover:shadow-white hover:shadow-md '>Contact</a>
                </div>
            </div>
        </div>

    )
}
