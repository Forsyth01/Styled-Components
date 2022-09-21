import React from 'react'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='bg-gray-900 py-3'>
            <div className="m-auto w-[80%]">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="font-bold text-xl">Forsyth</h1>
                    </div>
                    <div className="">
                        <h1 className="font-bold ">&copy;photohub2020</h1>
                    </div>
                    <div className="flex gap-3">
                        <FaFacebook />
                        <FaTwitter />
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    )
}
