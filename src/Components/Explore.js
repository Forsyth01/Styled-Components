import React from 'react'
import image from '../Images/ready-rey-zTNBumJSOto-unsplash.jpg'
import image2 from '../Images/jack-finnigan-rriAI0nhcbc-unsplash.jpg'
import image3 from '../Images/alex-azabache-riLA6oy6ekM-unsplash.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, Pagination, Scrollbar, Ally, Autoplay} from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const Explore = () => {
    const pagination = {
        clickable:true,
        renderBulle:function (index, className){
            return '<span class = "' + className + '">' + (index + 1) + "</span>";
        }
    };

    return (
        <div className=' py-2  bg-gray-90 bg-opacity-[20%]' id='explore'>
            <div className="m-auto w-[80%] ">
                <div className="">
                    <h1 className="md:text-[10rem] text-[5rem] overflow-hidden relative top-[-50vh opacity-[100] tracking-[2px] z-10  shadow-white font-bold text-red-500 ">Expl<span className='opacity-[100%] text-white'>o</span>re <span className=''></span>
                    </h1>
                    <p className="border w-[50%] relative md:bottom-[5.2vh] bottom-[4vh]"></p>
                </div>

                <div className="">
                    <p className="md:w-[50%] text-justify mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab tenetur reiciendis ullam quo, nisi minus placeat numquam laborum fuga at assumenda saepe, dolores adipisci pariatur odit molestias officia aspernatur aliquam?</p>
                </div>

                <div className="py-10">
                    {/* <h1 className="font-bold text-white text-4xl relative top-[30%]">Explore</h1> */}
                    <div className="md:flex gap-3 space-y-5 md:space-y-0 object-cover overflow-hidden justify-center">
                        <Swiper
                        modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                          spaceBetween = {50}
                          slidesPerView= {3}
                          autoplay = {{delay:2500,
                         disableOnInteraction:false }}
                          scrollbar = {{draggable:true}}
                         
                        //   navigation
                          pagination = {pagination}

                          >
                            <SwiperSlide><img src={image3} alt="" className="md:h-[50vh] md:w-[100%] object-cover" /> </SwiperSlide>
                            <SwiperSlide><img src={image2} alt="" className="md:h-[50vh] md:w-[100%] object-cover shadow-md shadow-white" /> </SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className="md:h-[50vh] md:w-[100%] object-cover" /></SwiperSlide>
                            <SwiperSlide><img src={image2} alt="" className="md:h-[50vh] md:w-[100%] object-cover shadow-md shadow-white" /> </SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className="md:h-[50vh] md:w-[100%] object-cover" /></SwiperSlide>
                            <SwiperSlide><img src={image2} alt="" className="md:h-[50vh] md:w-[100%] object-cover shadow-md shadow-white" /> </SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className="md:h-[50vh] md:w-[100%] object-cover" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
