"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";


export default function Navbar2() {
  const [menu, setMenu] = useState(false);

  const handleMenuClicked = () => {
    console.log("clicked");
    setMenu(!menu);
  };

  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="bg-gray-100 sticky top-0 z-50 text_family">
      <div className="max-w-7xl mx-auto lg:w-full w-[95%]">
        <nav className="flex justify-between items-center py-5 lg:py-0 ">
          <div>
            <Link
              href={"/"}
              className="md:text-4xl text-2xl font-bold text-blue-500"
            >
              <Image
                width={150}
                height={55}
                className="w-20 sm:w-40"
                src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701838233/Screenshot_9-removebg-preview_iqqrld.png"
                alt=""
              />
            </Link>
          </div>

          <div className="flex items-center sm:gap-5 gap-2 relative">
            <div onClick={handleMenuClicked} className="lg:hidden block">

              {
                !menu ? <IoMdMenu className="sm:text-3xl text-xl" />
                :
                <AiOutlineClose className="sm:text-3xl text-xl" />
              }


            </div>
            <div className="lg:block hidden mr-10">
              <ul className="flex items-center gap-5 font-semibold">
                <Link href={"/"} className="py-8 text-[16px] cursor-pointer">
                  Home
                </Link>
                <Link href={"/shop"} className="py-8 text-[16px] cursor-pointer">
                  Shop
                </Link>
                <Link
                  href={"/menu"}
                  className="relative cursor-pointer group py-8 text-[16px]"
                >
                  Menu <FaAngleDown className="inline" />
                  <ul className="absolute hidden group-hover:block mt-8 z-50">
                    <div className="">
                      <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                        <Image
                          className=" cursor-pointer w-10 h-10 rounded-full"
                          src={"https://i.ibb.co/FJNqb44/images.jpg"}
                          alt="user"
                          width={40}
                          height={40}
                        />{" "}
                        Menu1
                      </li>
                      <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                        <Image
                          className=" cursor-pointer w-10 h-10 rounded-full"
                          src={"https://i.ibb.co/FJNqb44/images.jpg"}
                          alt="user"
                          width={40}
                          height={40}
                        />{" "}
                        Menu1
                      </li>
                      <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                        <Image
                          className=" cursor-pointer w-10 h-10 rounded-full"
                          src={"https://i.ibb.co/FJNqb44/images.jpg"}
                          alt="user"
                          width={40}
                          height={40}
                        />{" "}
                        Menu1
                      </li>
                    </div>
                  </ul>
                </Link>
                <Link href={"/about"} className="py-8 text-[16px] cursor-pointer">
                  About
                </Link>
                <Link href={"/contact"} className="py-8 text-[16px] cursor-pointer">
                  Contact
                </Link>
              </ul>
            </div>
            <label className=" bg-transparent cursor-pointer rounded-md overflow-hidden ">
              {/* <input className="border-0 outline-0 p-3" type="text" placeholder="Search Item .." />
                <button className='bg-blue-500 px-4 py-3 text-white font-bold'>Search</button> */}
              <IoSearch onClick={handleSearch} className="text-2xl" />

              {menu && (
                <ul className=" lg:hidden font-semibold absolute top-16 right-0 bg-gray-300 px-10 w-[100vw] mx-auto block z-50">
                  <Link
                    href={"/"}
                    className="py-2 text-sm cursor-pointer block"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/shop"}
                    className="py-2 text-sm cursor-pointer  block"
                  >
                    Shop
                  </Link>
                  <Link
                    href={"/"}
                    className="relative cursor-pointer group py-2 text-sm  block"
                  >
                    Menu <FaAngleDown className="inline" />
                    <ul className=" group-hover:block mt-8 z-50  block">
                      <div className="">
                        <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                          <Image
                            className=" cursor-pointer w-10 h-10 rounded-full"
                            src={"https://i.ibb.co/FJNqb44/images.jpg"}
                            alt="user"
                            width={40}
                            height={40}
                          />{" "}
                          Menu1
                        </li>
                        <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                          <Image
                            className=" cursor-pointer w-10 h-10 rounded-full"
                            src={"https://i.ibb.co/FJNqb44/images.jpg"}
                            alt="user"
                            width={40}
                            height={40}
                          />{" "}
                          Menu1
                        </li>
                        <li className="w-52 hover:bg-slate-300 bg-gray-200 py-2 px-4 flex items-center gap-2">
                          <Image
                            className=" cursor-pointer w-10 h-10 rounded-full"
                            src={"https://i.ibb.co/FJNqb44/images.jpg"}
                            alt="user"
                            width={40}
                            height={40}
                          />{" "}
                          Menu1
                        </li>
                      </div>
                    </ul>
                  </Link>
                  <Link
                    href={"/about"}
                    className="py-2 text-sm cursor-pointer  block"
                  >
                    About
                  </Link>
                  <Link
                    href={"/contact"}
                    className="py-2 text-sm cursor-pointer  block"
                  >
                    Contact
                  </Link>
                </ul>
              )}
            </label>
            <Link href={'/addproduct'} className="cursor-pointer bg-transparent">
              <MdShoppingCart
                onClink={handleSearch}
                className="sm:text-3xl text-xl bg-transparent "
              />
            </Link>
            <Link href={'/login'}>
              <Image
                className=" cursor-pointer sm:w-10 w-8 h-8 sm:h-10"
                src={
                  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                }
                alt="user"
                width={40}
                height={40}
              />
            </Link>
            {search && (
              <input
                type="text"
                placeholder="search now"
                className="absolute border-0 shadow-md rounded-md top-16 sm:right-20 right-10 md:top-20 md:right-[100px] lg:w-[500px] z-50"
              />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
