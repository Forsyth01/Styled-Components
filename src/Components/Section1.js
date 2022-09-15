import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiArrowRight } from 'react-icons/fi'
import image3 from './Images/boy dancing.jpg'
import event from './Images/🌄 Event Image.jpg'
import group2 from './Images/Group 2.jpg'

export const Section1 = () => {
    return (
        <section className="">
            <div className=" m-auto w-[80%] my-5 ">
                <div className="md:flex items-center gap-5 ">
                    <div className="md:w-[50%] object-cover col-span-10">
                        <img src={image3} alt="" className=" h-[70vh] w-[100%] object-cover object-center rounded-xl" />
                    </div>
                    <div className="md:w-[50%] my-5 md:my-0 xl:space-y-10 space-y-5 col-span-10">
                        <div className="">
                            <h1 className="font-bold text-3xl">Who are we?</h1>
                            <p className="my-3">We connect ideas and resources with other NGOs to build a better world for everyone</p>
                            <div className="font-bold w-full bg-gray-300 p-[1px]"></div>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-3xl">What we do?</h1>
                            <p className="my-3">We protect and promote the protection of the planet and human dignity, we encourage awareness of the climate, the environment, data and technology, human rights, among other related issues.</p>
                            <div className="font-bold w-full bg-gray-300 p-[1px]"></div>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-3xl">Why we do it?</h1>
                            <p className="my-3">NGOs have the reach and established strategies to collectively provide solutions to major social and cultural problems.</p>
                            <div className="font-bold w-full bg-gray-300  p-[1px]"></div>
                        </div>
                    </div>
                </div>

                
                {/* ISSUES */}
                <div className="isues ">
                    <div className="text-center my-10">
                        <h1 className="text-4xl my-3 font-bold">Issues</h1>
                        <p className="my-3">The social, cultural, technological and environmental problems in which we are committing ourselves every day to achieve better results and sustainable development that allows us to provide a better quality of life to thousands of communities around the world.</p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-3">
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
        </section>
    )
}
