import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

const Offer = () => {
  return (
    <div className='h-[70vh]'>
        <div className='p-4'>
          <h1 className='text-2xl font-bold mb-4'>Available Offers</h1>
          <ul className='space-y-2'>
            <li className='bg-yellow-100 p-3 rounded shadow'>
              <strong>FLAT50</strong>: Get flat ₹50 off on orders above ₹299.
            </li>
            <li className='bg-green-100 p-3 rounded shadow'>
              <strong>FREEDINE</strong>: Enjoy free delivery on your first 3 orders.
            </li>
            <li className='bg-blue-100 p-3 rounded shadow'>
              <strong>BUY1GET1</strong>: Buy one get one free on selected items.
            </li>
            <li className='bg-pink-100 p-3 rounded shadow'>
              <strong>SWIGGYIT</strong>: 20% off up to ₹100 on all restaurants.
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Offer