"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Checkout({ params }) {

    const [product , setProduct] = useState([])
    useEffect(()=>{
        async function mainProduct(){
           await fetch(`https://v7pg4l9c-5002.asse.devtunnels.ms/restaurant/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        }
        mainProduct()
    },[])

    console.log(product)

    const [value , setValue] = useState(0);

    const handleQuintity = ()=>{
        if(value > 0){
            setValue(value-1)
        }
        else{
            alert('can not dicrease')
        }
    }
    const handleQuintityIncress = ()=>{
        setValue(value+1)
    }

    console.log(value)




    return (
        <div>
            <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4 my-20">
                <div className=" flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5 my-5">
                    <figure className="flex-1">
                        <Image width={300} height={200} src={product?.image} className=" w-full object-cover" alt="Food Image" />
                    </figure>
                    <div className="md:flex-1 text-start">

                        <h2 className="text-4xl font-semibold">{product?.title}</h2>
                        <div className="py-3 space-y-5">
                            <p className="flex items-center gap-2"> <span className="flex ">
                                <AiFillStar className="text-orange-400" />
                                <AiFillStar className="text-orange-400" />
                                <AiFillStar className="text-orange-400" />
                                <AiFillStar className="text-orange-400" />
                                <AiOutlineStar />
                            </span>
                                <span>Review : 5</span>
                                <span className="font-semibold text-[#EE4036]">Aviable</span>
                            </p>
                            <div className="space-y-2">
                                <p className="text-xl text-[#EE4036] font-semibold">Price: {product?.price}</p>
                                <p>NIB SIZE: <span className="font-semibold">EXTRA FINE</span></p>
                                <p className="flex gap-3 text-white">
                                    <del><span className="py-2 px-4 rounded bg-[#ee3f365e]">Extra</span></del>
                                    <del><span className="py-2 px-4 rounded bg-[#ee3f365e]">Fine</span></del>
                                    <del><span className="py-2 px-4 rounded bg-[#ee3f365e]">Medium</span></del>
                                </p>
                                <p>Shipping calculated at checkout.</p>
                            </div>
                            <div>
                                <select name="" id="" className="border p-2 w-20 rounded text-xl">
                                    <option disabled value="0">0</option>
                                    <option value="5">5</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                    <option value="12">12</option>
                                    <option value="15">15</option>
                                </select>
                                <span className="ml-2 font-semibold">Enter Your Size</span>
                            </div>
                            <div className="flex gap-5 items-center">
                                <p className="bordered border-2 text-xl px-4 py-3">
                                    <button onClick={handleQuintity} className="px-4">-</button>
                                    <span>{value}</span>
                                    <button onClick={handleQuintityIncress} className="px-4">+</button>
                                </p>
                                <Link href={`/order`} className="text-xl text-white rounded bg-[#ee3f36e8] hover:bg-[#EE4036] px-4 py-3">Order Now</Link>
                            </div>
                            <p> FREE SHIPPING OVER $50</p>
                        </div>

                    </div>
                </div>

                {/* <div className=' border-2 '>
                    <div role="tablist" className="tabs tabs-bordered m-2 text-xl">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Description" defaultChecked />
                        <div role="tabpanel" className="tab-content sm:py-6 p-3">
                            <p>
                            <span className='font-bold mr-2'>
                            {product?.title} 
                            </span>
                             Porem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis Maecenas ut tellus mi. Proin tincidunt, lectusu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdumnec venenpretium sit amet purus et malesuada fames ac ante ipsum primis in faucibus.
                            </p>
                        </div>

                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Reviews" />
                        <div role="tabpanel" className="tab-content sm:py-6 p-3">

                            <ul>
                                 <li className='flex gap-4 '> <span>Quelity  <sup className='text-[14px]'>(1.2k)</sup> </span>
                                    <p className='flex'>
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiOutlineStar />
                                    </p>
                                </li>
                                 <li className='my-3 flex gap-4'>
                                 <span>Price  <sup className='text-[14px]'>(2.4k)</sup> </span> 
                                    <p className='flex'>
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                    </p>
                                </li>
                                 <li className='flex gap-4'>
                                 <span>Service  <sup className='text-[14px]'>(1.5k)</sup> </span>  
                                    <p className='flex'>
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        <AiFillStar className="text-orange-400" />
                                        
                                    </p>
                                 </li>
                            </ul>

                        </div>
                    </div>
                </div> */}

            </div>


        </div>
    )
}

export default Checkout;