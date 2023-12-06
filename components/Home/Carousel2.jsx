"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link'; 


const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 
       https://i.ibb.co/TwnWLcB/banner3.jpg
        https://i.ibb.co/87J7pM7/banner2.jpg
        https://i.ibb.co/pJ0MHMz/banner1.jpgf
        */}


        <SwiperSlide className='relative'>
          <Image
            alt='image'
            height={'500'}
            width={800}
            src={'https://i.ibb.co/pJ0MHMz/banner1.jpgf'}
            className="w-full h-[70vh]"
          />
          <div className='absolute top-0 right-0 left-0 h-full flex text-white items-center w-full max-w-7xl mx-auto lg:px-0 sm:px-10 px-4'>
            <div className='w-1/2 text-start pl-2 space-y-2 md:space-y-5'>
                <h2 className='lg:text-5xl md:text-4xl md:leading-[50px] lg:leading-[70px] text-2xl font-semibold '>Victory 2023 Get 40% Discount All Products</h2>
                <p className='md:text-2xl text-xl'>Get 1 free delivery when you order delicious food.</p>
              <div className='flex gap-5 flex-col py-3 sm:flex-row'>
                <Link href={'/'} className='md:text-lg text-sm w-40 md:w-52   font-semibold text-center bg-red-500 py-3 px-5 text-white rounded hover:bg-red-600 transition'>See All</Link>
                <Link href={'/'} className='md:text-lg text-sm w-40 md:w-52   font-semibold bg-red-500 text-center py-3 px-5 text-white rounded hover:bg-red-600 transition'>Order Now</Link>
              </div>
      

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='image'
            height={'500'}
            width={800}
            src={'https://i.ibb.co/87J7pM7/banner2.jpg'}
            className="w-full h-[70vh]"
          />
           <div className='absolute top-0 right-0 left-0 h-full flex text-white items-center w-full max-w-7xl mx-auto lg:px-0 sm:px-10 px-4'>
            <div className='w-1/2 text-start pl-2 space-y-2 md:space-y-5'>
                <h2 className='lg:text-5xl md:text-4xl md:leading-[50px] lg:leading-[70px] text-2xl font-semibold '>Victory 2023 Get 40% Discount All Products</h2>
                <p className='md:text-2xl text-xl '>Get 1 free delivery when you order delicious food.</p>
              <div className='flex gap-5 flex-col py-3 sm:flex-row'>
                <Link href={'/'} className='md:text-lg text-sm w-40 md:w-52   font-semibold text-center bg-red-500 py-3 px-5 text-white rounded hover:bg-red-600 transition'>See All</Link>
                <Link href={'/'} className='md:text-lg text-sm w-40 md:w-52   font-semibold bg-red-500 text-center py-3 px-5 text-white rounded hover:bg-red-600 transition'>Order Now</Link>
              </div>
  

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;