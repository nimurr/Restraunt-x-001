//  "use client"
import Image from 'next/image';
// import React, { useState } from 'react'
import { LiaTableSolid } from "react-icons/lia";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaStar, FaHeart } from "react-icons/fa";
import Link from 'next/link';

async function Shop() {

    const res = await fetch('https://v7pg4l9c-5002.asse.devtunnels.ms/restaurant')
    const product = await res.json();
    
// dgshfhtjy

    // const [colamns , setColamns] = useState(true);

    // const handleview4 = () =>{
    //     console.log('clicked')
    //     setColamns(false)
    // }


    return (
        <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
            <div className=" allShopGradint text-center h-[20vh] flex justify-center items-center bg-red-300">
                <h2 className="text-5xl text-white font-semibold" >Shop</h2>
            </div>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-4 justify-between gap-7 my-10">
                <div className="lg:col-span-1 w-full">
                    <div>
                        <div className='p-4 bg-gray-100 my-4'>
                            <h2 className='font-semibold mb-4 text-xl'>Categories</h2>
                            <div>
                                <ul>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Burger</li>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Pizza</li>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Sanduage</li>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Pizza</li>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Sanduage</li>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Burger</li>
                                    <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 '>Sanduage</li>
                                </ul>
                            </div>
                        </div>
                        <div className='p-4 bg-gray-100 my-4'>
                            <h2 className="text-xl bg-gray-100 font-semibold">BY Range </h2>
                            <input type="range" className='w-full my-2 ' />
                            <span className='mx-2'>10$</span>
                            to
                            <span className='mx-2'>200$</span>
                        </div>
                        <form>
                            <h3 className="text-xl p-4 bg-gray-100 font-semibold">Price Range</h3>
                            <select name="" id="" className="p-4 border w-full bg-gray-100">
                                <option className="p-2" value="" disabled>Select You Option</option>
                                <option className="p-4 " value="">Heigh to Low</option>
                                <option className="p-4 " value="">Low to Heigh</option>
                            </select>
                            <div className="p-4 my-4 bg-gray-100">
                                <h3 className="text-xl mb-2 font-semibold">Price</h3>
                                <label htmlFor="id" className="block my-2">
                                    <input type="checkbox" name="" id="id" />
                                    <span> $10 to $20</span>
                                </label>
                                <label htmlFor="id1" className="block my-2">
                                    <input type="checkbox" name="" id="id1" />
                                    <span> $20 to $30</span>
                                </label>
                                <label htmlFor="id2" className="block my-2">
                                    <input type="checkbox" name="" id="id2" />
                                    <span> $30 to $40</span>
                                </label>
                            </div>
                            <div className="flex justify-between gap-2 p-4 my-4  bg-gray-100">
                                <button className="border-red-500 border rounded font-semibold hover:bg-red-500 hover:text-white w-1/2 p-2">Best Selling</button>
                                <button className="border-red-500 border rounded font-semibold hover:bg-red-500 hover:text-white w-1/2 p-2">Hot Product</button>
                            </div>
                            <button type="submit" className="p-2 w-full bg-red-500 text-white font-semibold rounded my-4">Update</button>
                        </form>
                    </div>
                </div>
                <div className="md:col-span-3 mt-4">
                    <div className='bg-gray-100 p-4 flex justify-between items-center'>
                        <p>50 Products Found </p>
                        <div className='flex items-center gap-4'>
                            <select name="" id="" className="p-2 border bg-gray-100">
                                <option className="p-2" value="" disabled>Select You Option</option>
                                <option className="p-4 " value="">Heigh to Low</option>
                                <option className="p-4 " value="">Low to Heigh</option>
                            </select>
                            <span>view</span>
                            <LiaTableSolid className='text-3xl cursor-pointer text-gray-700' />
                            <TfiMenuAlt className='text-2xl cursor-pointer text-gray-700' />
                        </div>
                    </div>
                    <div className={`grid md:grid-cols-2 xl:grid-cols-3 w-full gap-7 my-10`}>
                        {
                            product.map(prod =>
                                <div data-aos="fade-up" key={prod.id}>
                                    <div className="shadow-2xl rounded">

                                        <Link href={`/checkout/${prod.id}`}>
                                            <div className='h-[250px] relative cursor-pointer'>
                                                <Image width={250} height={250} className="rounded-t w-full h-full z-0" src={prod.img} alt="" />
                                                <span className='absolute top-2 right-2 bg-red-500 text-white rounded px-2 '>
                                                    -45%
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="px-6 py-2">
                                            <div className="flex justify-between items-center my-2">
                                                <div className="flex text-orange-400 pt-2">
                                                    <FaStar></FaStar>
                                                    <FaStar></FaStar>
                                                    <FaStar></FaStar>
                                                    <FaStar></FaStar>
                                                    <FaStar></FaStar>
                                                    <span className='ml-2'> ({prod.review})</span>
                                                </div>
                                                <FaHeart className="cursor-pointer text-red-500 text-xl"></FaHeart>
                                            </div>
                                            <h4 className="font-semibold py-1 my-2 text-xl">{prod.title}</h4>
                                            <h3 className="text-[#EE4036] font-semibold text-4xl">{prod.price}$  <span className='text-[15px] line-through'>700$</span></h3>
                                            <div className="flex gap-2 justify-between text-white pb-2">

                                                {/* <Link to={`/checkout/${prod.id}`} className="bg-[#EE4036] text-center py-2 w-1/2 font-semibold rounded-md">Check Out</Link> */}
                                                <button className="bg-gradient-to-r from-red-500 to-[#1f1c4e] font-semibold py-2 w-1/2 rounded-md">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop