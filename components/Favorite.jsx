"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


export default function Favorite() {


    const [addToFavorite, setAddToFavorite] = useState([])
    useEffect(()=>{
        const fetchData = async () => {

            const cartItem = localStorage.getItem('favorite');
            const pars = JSON.parse(cartItem);
            const res = await fetch('http://localhost:5003/restaurant')
            const product = await res.json();
            setAddToFavorite(product.filter(d => pars?.includes(d.id)));

        }
        fetchData()
    },[])

    
    const handleAddToFavoriteDelete = (id) => {
        console.log(id)

        const localData = localStorage.getItem('favorite');
        const deleteDataById = JSON.parse(localData);
        const filter = deleteDataById.filter(d => d != id)
        localStorage.setItem('favorite', JSON.stringify(filter))
        const filterProduct2 = addToFavorite?.filter(i => i.id !== id)
        setAddToFavorite(filterProduct2)
    }




  return (
    <div className="lg:max-w-7xl mx-auto my-10 w-[95%]  ">

        {
            addToFavorite.length < 1 && <div>
                    <h2 className='text-4xl text-center font-bold text-red-500'>You Have not any Favorite !</h2>                
            </div> 
        }

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-5'>
      {
        addToFavorite?.map(d => <div key={d.id}>
            <div className="shadow-2xl rounded" data-aos="zoom-in">
                <div>
                    <Link href={`/checkout/${d.id}`}>
                        <div className='h-[250px] relative'>
                            <Image width={250} height={250} className="rounded-t w-full h-full z-0" src={d.image} alt="" />
                            <span className='absolute top-2 left-2 bg-red-500 text-white rounded px-2 '>
                                -45%
                            </span>                          
        
                        </div>
                    </Link>

                    <div className="px-4 py-2">
                        <div className="flex justify-between items-center my-2">
                            <div className="flex text-orange-400 pt-2">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <span className='ml-2'> ({d.review})</span>
                            </div>
                            <span onClick={()=> handleAddToFavoriteDelete(d.id)} className=" cursor-pointe">
                                <MdDelete  className='text-2xl text-red-500'/>
                            </span>

                        </div>
                        <h4 className="font-semibold py-1 my-2 text-xl">{d.title}</h4>
                        <div className="flex gap-2 justify-between text-white pb-2">
                            <h3 className="text-[#EE4036] font-semibold text-4xl">{d.price}৳</h3>
                            {/* <Link className="bg-[#EE4036] py-2 w-1/2 rounded-md text-center font-semibold" >Buy Now</Link> */}
                            <button onClick={() => addToCartLocalhost(d.id)} className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
        )
      }
      </div>
    </div>
  )
}
