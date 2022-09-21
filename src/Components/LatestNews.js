import React from 'react'
import event from './Images/🌄 Event Image.jpg'
import group2 from './Images/Group 2.jpg'
import { FiArrowRight } from 'react-icons/fi'

export const LatestNews = () => {
    return (
        <div className="">
            <div className="m-auto w-[80%] my-5">
                <h1 className="font-bold text-center text-xl my-5">Latest News</h1>
                <div className="lg:flex gap-5 space-y-8 md:space-y-0">
                    <div className="">
                    <a href="#" class="md:flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-x hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover lg:w-ful h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={event} alt="" />
                            <div class="lg:flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Women's human rights and gender equality</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ffectively ensuring that women, girls, men, boys and gender-diverse people can fully enjoy human rights requires, first, a comprehensive understanding of social structures, policies and stereotypes...</p>
                                
                            </div>
                        </a>
                    </div>
                    <div className="">
                        <a href="#" class="md:flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-x hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover lg:w-ful h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={group2} alt="" />
                            <div class="lg:flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">#StandUp4Migrants</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">When migrants are portrayed in a negative light, their human rights are heavily impacted. They are discriminated, excluded and dehumanised. Communities also become divided. How we speak about migrants and migration – the narrative – therefore...</p>
                            
                            </div>
                
                        </a>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
