"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";


export default function Navbar2() {
  const [menu , setMenu] = useState(true)

  const handleMenuClicked = ()=>{
      console.log('clicked')
      setMenu(!menu)
  }


  return (
    <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto ">
      <nav className="flex justify-between items-center py-5 lg:py-0 w-[95%] mx-auto">
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-blue-500">Restaurent X</h2>
        </div>
        <div className="lg:block hidden">
          <ul className="flex items-center gap-4 font-semibold">
            <li className='py-8 text-sm cursor-pointer'>Home</li>
            <li className='py-8 text-sm cursor-pointer'>Shop</li>
            <li className="relative cursor-pointer group py-8 text-sm">
                Menu <FaAngleDown className="inline" />
                <ul className="absolute hidden group-hover:block mt-8 z-50">
                    <div className="">
                        <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2"><Image className=" cursor-pointer w-10 h-10 rounded-full" src={'https://i.ibb.co/FJNqb44/images.jpg'} alt="user" width={40} height={40} /> Menu1</li>
                        <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2"><Image className=" cursor-pointer w-10 h-10 rounded-full" src={'https://i.ibb.co/FJNqb44/images.jpg'} alt="user" width={40} height={40} /> Menu1</li>
                        <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2"><Image className=" cursor-pointer w-10 h-10 rounded-full" src={'https://i.ibb.co/FJNqb44/images.jpg'} alt="user" width={40} height={40} /> Menu1</li>
                    </div>
                </ul>
            </li>
            <li className='py-8 text-sm cursor-pointer'>About</li>
            <li className='py-8 text-sm cursor-pointer'>Contact</li>
          </ul>
        </div>
        
        <div className="flex items-center gap-2">
            <div onClick={handleMenuClicked} className="lg:hidden block">
                <IoMdMenu  className='text-3xl' />
            </div>
            <label className='bg-white border rounded-md overflow-hidden hidden lg:block'>
                <input className="border-0 outline-0 p-3" type="text" placeholder="Search Item .." />
                <button className='bg-blue-500 px-4 py-3 text-white font-bold'>Search</button>
            </label>
            <div>
            <MdShoppingCart className="text-3xl cursor-pointer" />
            </div>
            <div>
                <Image className=" cursor-pointer w-10 h-10" src={'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'} alt="user" width={40} height={40} />
            </div>
        </div>
      </nav>
    </div>
    </div>
  );
}
