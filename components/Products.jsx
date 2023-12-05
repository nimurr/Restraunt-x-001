import React from 'react'
import SingleProduct from './SingleProduct';

async function Products() {

    const res = await fetch('https://v7pg4l9c-5002.asse.devtunnels.ms/restaurant')
    const datas = await res.json();
    

  return (
    <div >
      <div className="my-10 max-w-7xl mx-auto">
            <div>
                <div className='flex justify-between items-center py-5'>
                    <div className="">
                        <h2 className="sm:text-4xl text-xl font-semibold text-[#262261]">POPULAR PRODUCTS</h2>
                        <span className="h-1 sm:w-52 bg-[#EE4036] block mt-2"></span>
                    </div>
                    <button>
                        <div className='flex items-center '>
                            {/* <Link to='/shop' className=' text-[#262261] font-semibold'>View All</Link>
                            <i className='bx bx-chevron-right text-[#ee4036] text-2xl'   ></i> */}

                            {/* <AiOutlineRight className='text-[#EE4036]'></AiOutlineRight> */}
                        </div>
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-7">
                {
                    datas.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    </div>
  )
}

export default  Products;