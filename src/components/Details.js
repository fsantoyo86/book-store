import React, { Component } from "react";
import { ProductConsumer } from "../constext";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(msg) => {
          const {
            id,
            company,
            img,
            price,
            title,
            inCart,
            info,
          } = msg.detailProduct;
          return (
            <div className="py-5 bg-gray-200 mx-auto m-0 px-0">
              <div className=" text-5xl text-center mx-auto text-blue-500 my-5">
                <h1>{title}</h1>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                <div className="mx-auto my-16">
                  <img src={img} alt="Product" className="w-56" />
                </div>
                <div className="mx-auto my-3 p-2">
                  <h1 className="text-2xl uppercase">title: {title}</h1>
                  <h4 className="text-xl mt-3 mb-2 uppercase">
                    author: <span className="uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue-400 uppercase">
                    <strong>
                      Price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="font-bold mt-3 mb-0 uppercase">
                    Synopsis:{" "}
                  </p>
                  <p className="uppercase">{info}</p>
                  <div>
                    <Link to="/">
                      <button className="uppercase mt-4 p-2 rounded-lg text-blue-400 font-bold border-solid border-2 border-blue-400 hover:border-blue-500 hover:bg-blue-400 hover:text-white">
                        Back To Products
                      </button>
                    </Link>
                    <button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        msg.addToCart(id);
                      }}
                      className="uppercase ml-4 p-2 rounded-lg text-yellow-500 font-bold border-solid border-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white"
                    >
                      {inCart ? "inCart" : "add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
