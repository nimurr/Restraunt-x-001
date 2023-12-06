"use client";
import Image from "next/image";
// import React, { useState } from 'react'
import { LiaTableSolid } from "react-icons/lia";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaStar, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Shop() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function products() {
      await fetch(" http://localhost:5002/restaurant")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
    products();
  }, []);

  console.log(product);

  const addToCartLocalhost = (id) => {
    const cartItem = localStorage.getItem("addToCart");
    const pars = JSON.parse(cartItem);

    if (pars && pars.find((d) => d == id)) {
      return Swal.fire({
        icon: "error",
        title: "Already Added !",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (pars) {
      const data = [id, ...pars];
      Swal.fire({
        title: "Add To Card Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("addToCart", JSON.stringify(data));
    } else {
      Swal.fire({
        title: "Add To Card Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("addToCart", JSON.stringify([id]));
    }
    // const data = [id, ...pars];
  };

  const handleFavorite = (id) => {
    const cartItem = localStorage.getItem("favorite");
    const pars = JSON.parse(cartItem);
    if (pars && pars.find((d) => d == id)) {
      return Swal.fire({
        icon: "error",
        title: "Already Added !",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (pars) {
      const data = [id, ...pars];
      Swal.fire({
        title: "Fovorite Add Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("favorite", JSON.stringify(data));
    } else {
      Swal.fire({
        title: "Fovorite Add Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      return localStorage.setItem("favorite", JSON.stringify([id]));
    }
  };

  return (
    <div className="">
      <div className="allShopGradint">
        <div className="  text-center h-[30vh] flex justify-center items-center ">
          <h2 className="text-5xl text-white font-semibold">Shop</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
        {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4 justify-between gap-7 my-10">
          <div className="lg:col-span-1 w-full">
            <div>
              <div className="p-4 bg-gray-100 my-4">
                <h2 className="font-semibold mb-4 text-xl">Categories</h2>
                <div>
                  <ul>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Burger
                    </li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Pizza
                    </li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Sanduage
                    </li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Pizza
                    </li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Sanduage
                    </li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Burger
                    </li>
                    <li className="py-1 px-2 cursor-pointer hover:bg-gray-200 ">
                      Sanduage
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-gray-100 my-4">
                <h2 className="text-xl bg-gray-100 font-semibold">BY Range </h2>
                <input type="range" className="w-full my-2 " />
                <span className="mx-2">10$</span>
                to
                <span className="mx-2">200$</span>
              </div>
              <form>
                <h3 className="text-xl p-4 bg-gray-100 font-semibold">
                  Price Range
                </h3>
                <select name="" id="" className="p-4 border w-full bg-gray-100">
                  <option className="p-2" value="" disabled>
                    Select You Option
                  </option>
                  <option className="p-4 " value="">
                    Heigh to Low
                  </option>
                  <option className="p-4 " value="">
                    Low to Heigh
                  </option>
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
                  <button className="border-red-500 border rounded font-semibold hover:bg-red-500 hover:text-white w-1/2 p-2">
                    Best Selling
                  </button>
                  <button className="border-red-500 border rounded font-semibold hover:bg-red-500 hover:text-white w-1/2 p-2">
                    Hot Product
                  </button>
                </div>
                <button
                  type="submit"
                  className="p-2 w-full bg-red-500 text-white font-semibold rounded my-4"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
          <div className="md:col-span-3 mt-4">
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <p>50 Products Found </p>
              <div className="flex items-center gap-4">
                <select name="" id="" className="p-2 border bg-gray-100">
                  <option className="p-2" value="" disabled>
                    Select You Option
                  </option>
                  <option className="p-4 " value="">
                    Heigh to Low
                  </option>
                  <option className="p-4 " value="">
                    Low to Heigh
                  </option>
                </select>
                <span>view</span>
                <LiaTableSolid className="text-3xl cursor-pointer text-gray-700" />
                <TfiMenuAlt className="text-2xl cursor-pointer text-gray-700" />
              </div>
            </div>
            <div
              className={`grid md:grid-cols-2 xl:grid-cols-3 w-full gap-7 my-10`}
            >
              {product.map((prod) => (
                <div data-aos="fade-up" key={prod.id}>
                  <div
                    className=" border rounded p-2 group delay-[2000]"
                    data-aos="zoom-in"
                  >
                    <div className=" flex flex-col ">
                      <div className="h-[250px] relative flex-grow">
                        <Link href={`/checkout/${prod.id}`}>
                          <Image
                            width={250}
                            height={250}
                            className="rounded-t w-full h-full 
                            group-hover:scale-105 transition  z-0"
                            src={prod.image}
                            alt=""
                          />
                        </Link>
                        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-xl px-2 ">
                          {/* -{product?.discount ? product?.discount : ''} % */}
                          {product?.discount && (
                            <span>-{product?.discount}%</span>
                          )}
                        </span>
                        <div className="absolute top-2 right-0 group-hover:right-2 group-hover:flex flex-col justify-center gap-3 hidden">
                          <FaCartArrowDown
                            onClick={() => addToCartLocalhost(prod.id)}
                            className="cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded"
                          />
                          <FaRegHeart
                            onClick={() => handleFavorite(prod.id)}
                            className="cursor-pointer  bg-red-500  text-white  p-2 text-4xl rounded"
                          />
                        </div>
                      </div>

                      <div className="p-4 flex-grow">
                        <div className=" flex justify-between">
                          <h4 className="font-semibold py-1 my-2 flex-grow text-[16px]">
                            {prod.title}
                          </h4>

                          <div className="flex text-[12px] text-orange-400 pt-2">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <span className="ml-2"> ({prod.review})</span>
                          </div>
                          {/* <FaHeart className="cursor-pointer text-red-500 text-xl"></FaHeart> */}
                        </div>
                        <div className="flex gap-2 justify-between text-white">
                          {product?.discount ? (
                            <h3 className="text-[#EE4036] font-semibold text-2xl">
                              <span>
                                {prod.price -
                                  (prod.price * product?.discount) / 100}
                                ৳
                              </span>{" "}
                              <del className="text-[12px]">{prod.price}৳</del>
                            </h3>
                          ) : (
                            <h3 className="text-[#EE4036] font-semibold text-2xl">
                              {prod.price}৳
                            </h3>
                          )}
                          {/* <button className="bg-gradient-to-r from-red-500 to-[#1f1c4e] py-2 w-1/2 = rounded-md">Add to Cart</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
