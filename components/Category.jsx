import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div className="max-w-7xl mx-auto sm:my-32 my-10 px-4 lg:px-0">
      <div className="sm:my-14 my-5">
        <h2 className="sm:text-4xl   font-semibold text-[#262261]">
          Category
        </h2>
        <span className="h-1 sm:w-52 w-20 bg-[#EE4036] block mt-2"></span>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <Link href={'/category/burger'} className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/xCJCRYS/chicken-with-sambal-sauce-deep-fried-hot-spicy-menu-indonesia-combination-malaysian-fusion-style-sid.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Kacchi Lamb Kebabs</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link href={'/category/pizza'} className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/DYZWQGp/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas-2829-9119.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold ">Bhapa Prawn Parcels</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link  href={'/category/sanduege'}  className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/g6jCxmr/download.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Shorshe Ilish Delight</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link  href={'/category/frishfry'}  className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/BnbjLL1/download.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Fuchka Feast</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link  href={'/category/burger'}  className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/kgKCCwD/reserve-table.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Panta Bhat Platter</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link  href={'/category/burger'}  className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/Y0MkydP/images.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Chingri Malai Curry</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link  href={'/category/burger'}  className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/mDsHJFY/images.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Dhaka Dal Curry</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
        <Link  href={'/category/burger'}  className="flex items-center gap-5 hover:bg-slate-200 cursor-pointer border p-4 rounded-[50px]">
          <Image
            width={300}
            height={200}
            className="cursor-pointer w-[60px] rounded-full h-[60px]"
            src="https://i.ibb.co/FJNqb44/images.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold  ">Biryani Bonanza</h2>
            <h3>7:20AM to 8:00PM</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
