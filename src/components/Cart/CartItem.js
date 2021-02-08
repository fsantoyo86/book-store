import React from 'react';

export default function CartItem({item,msg}) {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = msg;

    return (
      <div className="grid lg:grid-cols-6 md:grid-cols-6 sm:grid-rows-1 py-3 justify-items-center bg-gray-200 items-center">
        <div className="uppercase">
          <img src={img} alt={title} className="w-24"/>
        </div>
        <div className="uppercase">{title}</div>
        <div className="uppercase">${price}</div>
        <div className="uppercase">
          <div className="grid grid-cols-3 justify-items-center">
            <div
              onClick={() => decrement(id)}
              className="w-8 cursor-pointer font-bold border-solid border-2 border-black m-1 pl-2 hover:bg-gray-800 hover:text-gray-100"
            >
              -
            </div>
            <div className="w-8 border-solid border-2 border-black m-1 pl-2">
              {count}
            </div>
            <div
              onClick={() => increment(id)}
              className="w-8 border-solid border-2 font-bold border-black m-1 pl-2 cursor-pointer hover:bg-gray-600 hover:text-gray-100"
            >
              +
            </div>
          </div>
        </div>
        <div className="uppercase text-yellow-600 cursor-pointer hover:text-yellow-400" onClick={()=>removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
        <div className="">Item total: ${total}</div>
      </div>
    );
}
