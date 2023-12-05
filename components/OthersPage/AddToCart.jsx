"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect , useState } from 'react'

 function AddToCart() {
    
    const [addTocart, setAddtoCart] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            
            const cartItem = localStorage.getItem('addToCart');
            const pars = JSON.parse(cartItem);
            const res = await fetch('https://v7pg4l9c-5002.asse.devtunnels.ms/restaurant')
            const product = await res.json();
            setAddtoCart(product.filter(d => pars?.includes(d.id)));

        }
        fetchData()
    },[])


    const handleAddToCartDelete = (id) => {

        const localData = localStorage.getItem('addToCart');
        const deleteDataById = JSON.parse(localData);
        const filter = deleteDataById.filter(d => d != id)
        localStorage.setItem('addToCart', JSON.stringify(filter))
        const filterProduct2 = addTocart.filter(i => i.id !== id)
        setAddtoCart(filterProduct2)
    }

    const totalPrice = addTocart.reduce((d , i) => (d + parseFloat(i.price)) , 0)
    console.log(totalPrice)

  return (
    <div>
      <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
            <div className="allAddToCartGradint text-center h-[20vh] flex justify-center items-center ">
                <h2 className="text-5xl text-white font-semibold">Add to Cart</h2>
            </div>
            <div className="grid lg:grid-cols-3 my-10 gap-4">
                <div className="lg:col-span-2">
                    {
                        addTocart?.map(products =>
                            <div data-aos="zoom-in" className="sm:flex justify-between items-center gap-4 mb-5 bg-blue-100 p-4" key={products.id}>
                                <div className="sm:flex items-center gap-4">
                                    <Image width={350} height={250} className="sm:w-32 " src={products.image} alt="" />
                                    <div>
                                        <h3 className="text-xl  my-2 sm:my-0 font-semibold">{products.title}</h3>
                                        <h3 className="text-4xl my-2 sm:my-0  text-red-500">{products.price} ৳</h3>
                                    </div>
                                </div>
                                {/* <div className="flex ">
                                    <button onClick={() => handleDecressAddToCart(products.id)} className="text-2xl font-semibold bg-blue-500 px-2">-</button>
                                    <span id="productQuantity" className="bg-white px-2 flex items-center" >{quantity}</span>
                                    <button onClick={handleIncressAddToCart} className="text-2xl font-semibold bg-blue-500 px-2">+</button>
                                </div> */}
                                <div>
                                    <button onClick={() => handleAddToCartDelete(products.id)} className="px-6 py-2 bg-red-500 text-white font-semibold rounded">Delete</button>
                                    {/* <button className="px-6 py-2 bg-blue-500 rounded ml-2 font-semibold text-white">Buy Now</button> */}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-blue-100 p-4 w-full h-[30vh]">
                    <h2 className="text-center text-4xl text-[#262261]">Order Summary</h2>
                    <div className="my-5">
                        <h3 className="my-1">Quantity :  {addTocart?.length} </h3>
                        <h3 className="my-1">Total Price : {totalPrice} ৳ </h3>
                        <h3 className="my-1">Discount :  00  ৳</h3>
                        <h3 className="my-1">Discount Price :  {totalPrice}৳ </h3>
                    </div>
                    <Link href='/order' className="p-2 bg-red-500 font-semibold text-white rounded w-full block text-center">Order Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddToCart;