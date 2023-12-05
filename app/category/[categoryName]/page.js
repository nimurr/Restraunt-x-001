import React from 'react'

export default function page({params}) {
    console.log(params.categoryName)
  return (
    <div>
      <h2 className='text-4xl text-center my-10'>All {params.categoryName}</h2>
    </div>
  )
}
