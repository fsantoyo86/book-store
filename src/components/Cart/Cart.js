import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../constext';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section className="h-screen mt-0 bg-gray-200">
                <ProductConsumer>
                    {msg =>{

                        const {cart} = msg;
                        if(cart.length>0){
                            return(
                                <>
                                <Title name="Items in" title="cart"></Title>
                                <CartColumns/>
                                <CartList msg={msg}></CartList>
                                <CartTotals msg={msg}></CartTotals>
                                </>
                            )
                        }else{
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
