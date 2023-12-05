"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar, FaHeart } from "react-icons/fa";
import Swal from 'sweetalert2';

export default function SingleProduct({ product }) {

    const { id, image, review, price, title } = product;


    const addToCartLocalhost = (id) => {

        const cartItem = localStorage.getItem('addToCart')
        const pars = JSON.parse(cartItem);

        if(pars && pars.find(d => d == id )){
           return Swal.fire({
            icon: "error",
            title: "Already Added !",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }

        else if(pars){
            const data = [id ,...pars]
            Swal.fire({
                title: "Add To Card Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('addToCart', JSON.stringify(data))
        }
        else{
            Swal.fire({
                title: "Add To Card Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('addToCart', JSON.stringify([id]))
        }
        // const data = [id, ...pars];


    }

    const handleFavorite = (id) =>{

        const cartItem = localStorage.getItem('favorite')
        const pars = JSON.parse(cartItem);
        if(pars && pars.find(d => d == id )){
           return Swal.fire({
            icon: "error",
            title: "Already Added !",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }

        else if(pars){
            const data = [id ,...pars]
            Swal.fire({
                title: "Fovorite Add Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('favorite', JSON.stringify(data))
        }
        else{
            Swal.fire({
                title: "Fovorite Add Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
           return localStorage.setItem('favorite', JSON.stringify([id]))
        }

    }




    return (
        <div>
            <div className="shadow-2xl rounded" data-aos="zoom-in">
                <div>
                    <Link href={`/checkout/${id}`}>
                        <div className='h-[250px] relative'>
                            <Image width={250} height={250} className="rounded-t w-full h-full z-0" src={image} alt="" />
                            <span className='absolute top-2 right-2 bg-red-500 text-white rounded px-2 '>
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
                                <span className='ml-2'> ({review})</span>
                            </div>
                            <FaHeart onClick={() => handleFavorite(id)} className="cursor-pointer text-red-500 text-xl"></FaHeart>
                            {/* onClick={() => handleFavorite(id)} */}
                        </div>
                        <h4 className="font-semibold py-1 my-2 text-xl">{title}</h4>
                        <div className="flex gap-2 justify-between text-white pb-2">
                            <h3 className="text-[#EE4036] font-semibold text-4xl">{price}৳</h3>
                            {/* <Link className="bg-[#EE4036] py-2 w-1/2 rounded-md text-center font-semibold" >Buy Now</Link> */}
                            <button onClick={() => addToCartLocalhost(id)} className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button>
                            {/* onClick={() => addToCartLocalhost(id)} */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
