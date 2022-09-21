import React from 'react'
import image from '../Images/ready-rey-zTNBumJSOto-unsplash.jpg'
import contactPage from '../Images/lee-yan-p5abn5n3w9E-unsplash.jpg'


export const ContactUs = () => {
    return (
        <div className='py-5' id='contact'>
            <div className="m-auto w-[80%] bg-gray-900">
                <div className="md:flex object-cover justify-around items-center  my-10">
                    <div className="w-[100%]">
                    <img src={contactPage} alt="" className='h-[70vh] w-[100%] object-cover' />
                    </div>

                    <div className="w-[100%]">
                        <form className="text-black space-y-10 w-[100%] p-5">
                        <h1 className="font-bold text-white text-4xl mb-5">
                            Send us a message
                        </h1>
                        <div className="">
                            <input type="text" placeholder='Name' className=' w-[100%] p-3 rounded' />
                        </div>
                        <div className="">
                           
                            <input type="text" placeholder='Email' className='rounded p-3 w-[100%]' />
                        </div>
                        <div className="">
                           <textarea placeholder='send a message' className='p-2 resize-none rounded h-[10vh] w-[100%]'></textarea>
                        </div>
                        <button type='submit' className='text-black shadow-md hover:shadow-white my-3 bg-white px-3 py-2 rounded'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
