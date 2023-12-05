import Image from 'next/image'
import React from 'react'

export default function Offers() {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <div className="my-10">
            <div className="my-5">
                <h2 className="sm:text-4xl text-2xl font-semibold text-[#262261]">OFFERS & DEALS</h2>
                <span className="h-1 md:w-2/12 sm:w-3/12 w-4/12 bg-[#EE4036] block mt-2"></span>
            </div>
            {/* offers section  */}
            <div className="grid md:grid-cols-5 md:gap-4 min-h-[80vh] ">
                <div className="md:col-span-2 md:h-full">
                    <Image width={300} height={200} data-aos="zoom-in" className="md:h-2/3 w-full mt-4 h-[200px] sm:h-[300px]" src="https://img.freepik.com/free-vector/realistic-3d-sale-background_52683-62689.jpg?size=626&ext=jpg&ga=GA1.1.833339685.1699162115&semt=ais" alt="Ads" />
                    <Image width={300} height={200} data-aos="zoom-in" className="md:h-1/3 w-full mt-4 h-[200px] sm:h-[300px]" src="https://i.ibb.co/2YdWX2B/5785216.jpg" alt="Ads" />
                </div>
                <div className="md:col-span-3 h-full">
                    <Image width={300} height={200} data-aos="zoom-in" className="mt-4 md:h-1/2 h-[200px] sm:h-[300px] w-full" src="https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg?size=626&ext=jpg&ga=GA1.1.833339685.1699162115&semt=ais" alt="Ads" />
                    <Image width={300} height={200} data-aos="zoom-in" className="mt-4 md:h-1/2 h-[200px] sm:h-[300px] w-full" src="https://i.ibb.co/16Y6Pxh/dfgdfgdfg.jpg" alt="Ads" />
                </div>
            </div>
      </div>

      {/* <div className='my-20 '>
        <div>
          <h2 className='text-7xl font-semibold text-red-500'>Pizza</h2>
          <span className='text-[200px] font-semibold'>
            50%<span className='text-5xl'>off</span>
          </span>
          <button className='bg-red-500 p-3 rounded text-white font-semibold block'>Get Started</button>
        </div>
      </div> */}
    </div>
  )
}
