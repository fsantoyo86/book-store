import React, { Component } from 'react';
import Product from './Product';
import Title from "./Title";
import {ProductConsumer}  from "../constext";

export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="py-5 bg-gray-200">
          <div className="container">
            <Title name="Welcome" title="to Store"></Title>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 m-3 justify-items-center items-center">
                <ProductConsumer>
                    {msg=>{
                        return msg.products.map(product => {
                            return <Product key={product.id} product={product}></Product>;
                        })
                    }}
                </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
