import React from 'react'

export const AboutMe = () => {
  return (
    <div>
        <div className="m-auto w-[80%]" id='about'>
            <div className="flex  justify-end">
                <div className="">
                <h1 className="text-6xl">About <span className='bg-red-500 text-black font-bold rounded p-2'>Me</span></h1>
                <p className="border"></p>
                </div>
            </div>
            <div className="flex  justify-end my-5">
                <p className="md:w-[50%] text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab tenetur reiciendis ullam quo, nisi minus placeat numquam laborum fuga at assumenda saepe, dolores adipisci pariatur odit molestias officia aspernatur aliquam?</p>
            </div>
        </div>
    </div>
  )
}
