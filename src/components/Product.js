import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../constext";
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <>
        <ProductConsumer>
          {(msg) => (
            <div
              className="container lg:w-56 md:w-56 sm:w-72 w-72 rounded-lg shadow bg-white my-5 "
              onClick={() => msg.handleDetail(id)}
            >
              <div className="flex justify-center items-center flex-col ">
                <Link to="/details">
                  <img className="rounded p-2" src={img} alt="Product image" />
                </Link>
                <button
                  className=""
                  disabled={inCart ? true : false}
                  onClick={() =>{ msg.addToCart(id);}}>
                  {inCart ? (
                    <p className="mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
              <div className="flex justify-between bg-white rounded-b-lg p-2 items-center text-red-600">
                <p className="mb-0 font-bold">{title}</p>
                <h5 className="text-blue-500 font-bold">
                  <span className="mr-1">$</span>
                  {price}
                </h5>
              </div>
            </div>
          )}
        </ProductConsumer>
      </>
    );
  }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
