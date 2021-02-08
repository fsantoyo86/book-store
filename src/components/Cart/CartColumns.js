import React from 'react'

export default function CartColumns() {
    return (
      <div className="grid grid-cols-6 items-center mt-4 font-bold justify-items-center bg-gray-200">
        <div className="uppercase lg:flex md:flex sm:hidden hidden">Products</div>
        <div className="uppercase lg:flex md:flex sm:hidden hidden ">Product name</div>
        <div className="uppercase lg:flex md:flex sm:hidden hidden ">Price</div>
        <div className="uppercase lg:flex md:flex sm:hidden hidden ">Quantity</div>
        <div className="uppercase lg:flex md:flex sm:hidden hidden ">Remove</div>
        <div className="uppercase lg:flex md:flex sm:hidden hidden">Total</div>
      </div>
    );
}

