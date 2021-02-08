import React from 'react';
import CartItem from './CartItem';

export default function CartList({msg}) {
    const {cart} =msg;
    return (
        <div className="mx-auto p-2 mt-0 bg-gray-200">
            {cart.map(item=>{
                return (
                     <CartItem key={item.id} item={item} msg={msg}></CartItem>
                )
            })}
        </div>
    )
}
