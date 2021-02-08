import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({msg}) {
    const {cartSubTotal, cartTax,cartTotal,clearCart}=msg;
    return (
      <div className="m-0 bg-gray-200">
        <>
          <div className="mx-auto p-2">
            <div className="grid grid-rows-1 justify-end mr-5">
              <Link to="/">
                <button
                  onClick={() => clearCart()}
                  className="border-solid uppercase border-2 border-red-600 text-red-600 rounded-lg p-3 font-bold hover:bg-red-600 hover:text-white"
                >
                  Clear Cart
                </button>
              </Link>
              <h5 className="mt-2">
                <span className="text-md">Subtotal:</span>
                <strong> $ {cartSubTotal}</strong>
              </h5>
              <h5 className="mt-2">
                <span className="text-md">IVA:</span>
                <strong> $ {cartTax}</strong>
              </h5>
              <h5 className="mt-2">
                <span className="text-md">Total:</span>
                <strong> $ {cartTotal}</strong>
              </h5>
            </div>
          </div>
        </>
      </div>
    );
}
