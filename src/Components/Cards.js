import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiArrowRight } from 'react-icons/fi'

export const Cards = () => {
  return (
    <div>
        <div className="m-auto w-[80%]">
            {/* ISSUES */}
            <div className="isues ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-3 my-10">
                        <div className="space-y-2 hover:bg-[#0369A1] p-8 rounded-xl bg-gray-100 hover:text-white cursor-pointer transition duration-700">
                            <i className="text-5xl bg-[#0369A1]"><CgProfile className='text-center bg-blue-500 p-3 rounded-xl text-white' /></i>
                            <h1 className="text-2xl">Girls and Women</h1>
                            <p className="">Gender equality is fundamental to the realization of human rights and a desire to benefit society as a whole, including girls and women.</p>
                            <i className="flex justify-end"><FiArrowRight className='text-5xl bg-blue-500 text-white p-3 rounded-xl' /></i>
                        </div>
                        <div className="space-y-2 hover:bg-[#0369A1] p-8 rounded-xl bg-gray-100 hover:text-white cursor-pointer transition duration-700">
                            <i className="text-5xl bg-[#0369A1]"><CgProfile className='text-center bg-blue-500 p-3 rounded-xl text-white' /></i>
                            <h1 className="text-2xl">Girls and Women</h1>
                            <p className="">Gender equality is fundamental to the realization of human rights and a desire to benefit society as a whole, including girls and women.</p>
                            <i className="flex justify-end"><FiArrowRight className='text-5xl bg-blue-500 text-white p-3 rounded-xl' /></i>
                        </div>
                        <div className="space-y-2 hover:bg-[#0369A1] p-8 rounded-xl bg-gray-100 hover:text-white cursor-pointer transition duration-700">
                            <i className="text-5xl bg-[#0369A1]"><CgProfile className='text-center bg-blue-500 p-3 rounded-xl text-white' /></i>
                            <h1 className="text-2xl">Girls and Women</h1>
                            <p className="">Gender equality is fundamental to the realization of human rights and a desire to benefit society as a whole, including girls and women.</p>
                            <i className="flex justify-end"><FiArrowRight className='text-5xl bg-blue-500 text-white p-3 rounded-xl' /></i>
                        </div>
                        <div className="space-y-2 hover:bg-[#0369A1] p-8 rounded-xl bg-gray-100 hover:text-white cursor-pointer transition duration-700">
                            <i className="text-5xl bg-[#0369A1]"><CgProfile className='text-center bg-blue-500 p-3 rounded-xl text-white' /></i>
                            <h1 className="text-2xl">Girls and Women</h1>
                            <p className="">Gender equality is fundamental to the realization of human rights and a desire to benefit society as a whole, including girls and women.</p>
                            <i className="flex justify-end"><FiArrowRight className='text-5xl bg-blue-500 text-white p-3 rounded-xl' /></i>
                        </div>
                    </div>
                </div>          
        </div>
    </div>
  )
}
