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


    console.log(addTocart)

  return (
    <div>
        <div className="allAddToCartGradint">
        <div className="  text-center h-[30vh] flex justify-center items-center ">
          <h2 className="text-5xl text-white font-semibold">Add to Cart</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto lg:px-0 sm:px-10 px-4">
            <div className="grid lg:grid-cols-3 my-10 gap-4">
                <div className="lg:col-span-2">
                    <div className="flex justify-between p-5 bg-gray-100 mb-4 font-bold rounded">
                        <h2>Ckeck</h2> 
                        <h2>Price & Name</h2>
                        <h2>Quantity</h2>
                        <h2>Action</h2>
                    </div>
                    {
                        addTocart?.map(products =>
                            <div data-aos="zoom-in" className="sm:flex rounded-md justify-between items-center gap-4 mb-5 bg-gray-100 p-4" key={products.id}>
                                <div className="sm:flex items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    <Image width={350} height={250} className="sm:w-32 " src={products.image} alt="" />
                                    <div>
                                        <h3 className="text-xl  my-2 sm:my-0 font-semibold">{products.title}</h3>
                                        <h3 className="text-4xl my-2 sm:my-0  text-red-500">{products.price} ৳</h3>
                                    </div>
                                </div>
                                {/* onClick={() => handleDecressAddToCart(products.id)}
                                    onClick={handleIncressAddToCart}
                                    {quantity}
                                */}
            
                                <div className="flex ">
                                    <button  className="text-2xl font-semibold bg-gray-200 px-2">-</button>
                                    <span id="productQuantity" className="bg-white px-2 flex items-center" >1</span>
                                    <button  className="text-2xl font-semibold bg-gray-200 px-2">+</button>
                                </div>
                                <div>
                                    <button onClick={() => handleAddToCartDelete(products.id)} className="px-6 py-2 bg-red-500 text-white font-semibold rounded">Delete</button>
                                    {/* <button className="px-6 py-2 bg-blue-500 rounded ml-2 font-semibold text-white">Buy Now</button> */}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="bg-gray-100 p-4 w-full xl:h-[30vh]">
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