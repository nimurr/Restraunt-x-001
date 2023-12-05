"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className=" font-sans">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#262261]">Contact Team</h2>
            <p className=" mt-4 font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              possimus corrupti reiciendis voluptates. Dignissimos ullam
              doloribus quas commodi distinctio nobis ipsa facilis sit
              accusantium quidem.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 my-10">
            <div className="flex pl-5 items-center gap-2 border p-3 hover:bg-slate-100 cursor-pointer rounded-md">
              <FaWhatsapp className="text-[#45b73a] text-3xl" />
              <p>Text to 01xxxxxxx</p>
            </div>
            <div className="flex pl-5 items-center gap-2 border p-3 hover:bg-slate-100 cursor-pointer rounded-md">
              <FaPhone className="bx bxs-phone text-gray-500 text-3xl" />
              <p>Call to 01xxxxxxx</p>
            </div>
            <div className="flex pl-5  items-center gap-2 border p-2 hover:bg-slate-100 cursor-pointer rounded-md">
              <FaFacebookMessenger  className=" text-[#2662d2] text-3xl"></FaFacebookMessenger>
              <p>Messenger us in Facebook</p>
            </div>
            <div className="flex pl-5 items-center gap-2 border p-2 hover:bg-slate-100 cursor-pointer rounded-md">
              <MdEmail className=" text-yellow-500 text-3xl"></MdEmail>
              <p>Email us</p>
            </div>
          </div>
        </div>
        <div>
            <Image className="w-8/12 mx-auto"  width={300}
            height={200} src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701755146/Contact_us-pana_irsc5e.png"
            alt="" />
        </div>
      </div>
    </div>
  );
}
