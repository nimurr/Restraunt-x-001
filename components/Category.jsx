import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <div className="md:my-20 my-6">
        <div className="flex justify-between items-center py-5">
          <div className="">
            <h2 className="sm:text-4xl text-xl font-semibold text-[#262261]">
              Category
            </h2>
            <span className="h-1 sm:w-52 bg-[#EE4036] block mt-2"></span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2  xl:grid-cols-6 gap-7 justify-between mx-auto">
          <div data-aos="zoom-in">
            <Link href={`/category/burger`}>
              <Image
                width={300}
                height={200}
                className="cursor-pointer xl:w-[190px] h-[150px] w-full rounded-md xl:h-[190px]"
                src="https://i.ibb.co/HXPWvc7/coffee-4648041-1920-e1697271404997.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-center font-semibold mt-2">Burger</h3>
          </div>
          <div data-aos="zoom-in">
            <Link href={`/category/pizza`}>
              <Image
                width={300}
                height={200}
                className="cursor-pointer h-[150px] w-full xl:w-[190px] rounded-md xl:h-[190px]"
                src="https://i.ibb.co/ZJDJWgH/lallu.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-center font-semibold mt-2">Pizza</h3>
          </div>
          <div data-aos="zoom-in">
            <Link href={`/category/pizza`}>
              <Image
                width={300}
                height={200}
                className="cursor-pointer xl:w-[190px] rounded-md h-[150px] w-full xl:h-[190px]"
                src="https://i.ibb.co/YL4QQSF/fizza.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-center font-semibold mt-2">Burger</h3>
          </div>
          <div data-aos="zoom-in">
            <Link href={`/category/pizza`}>
              <Image
                width={300}
                height={200}
                className="cursor-pointer xl:w-[190px] rounded-md h-[150px] w-full xl:h-[190px]"
                src="https://i.ibb.co/B2Cw6rQ/fish-food.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-center font-semibold mt-2">Burger</h3>
          </div>
          <div data-aos="zoom-in">
            <Link href={`/category/pizza`}>
              <Image
                width={300}
                height={200}
                className="cursor-pointer xl:w-[190px] rounded-md h-[150px] w-full xl:h-[190px]"
                src="https://i.ibb.co/L6GK6S0/our-menu.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-center font-semibold mt-2">Burger</h3>
          </div>
          <div data-aos="zoom-in">
            <Link href={`/category/pizza`}>
              <Image
                width={300}
                height={200}
                className="cursor-pointer xl:w-[190px] rounded-md h-[150px] w-full xl:h-[190px]"
                src="https://i.ibb.co/kgKCCwD/reserve-table.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-center font-semibold mt-2">Burger</h3>
          </div>
        </div>
      </div> */}



      <div className="my-10">
        <h2 className="sm:text-4xl text-xl font-semibold text-[#262261]">
          Category
        </h2>
        <span className="h-1 sm:w-52 w-20 bg-[#EE4036] block mt-2"></span>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/L6GK6S0/our-menu.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Burger</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/B2Cw6rQ/fish-food.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Pizza</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/L6GK6S0/our-menu.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Sandauge</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/ZJDJWgH/lallu.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Pasta</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/kgKCCwD/reserve-table.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Soop</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/kgKCCwD/reserve-table.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Burger</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/B2Cw6rQ/fish-food.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Burger</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/kgKCCwD/reserve-table.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-xl">Best Burger</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
