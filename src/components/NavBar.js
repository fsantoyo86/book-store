import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../32x32.png';

export default class NavBar extends Component {
    render() {
        return (
          <nav className="flex flex-wrap h-16 bg-red-400">
            <Link to="/">
              <img src={logo} alt="Store" className="px-6 py-3 mt-1" />
            </Link>
            <Link to="/">
              <div>
                <button className="ml-3 mt-1 py-3 rounded-lg border-solid border-2 border-white text-white px-3 hover:text-black hover:border-black">
                  Products
                </button>
              </div>
            </Link>
            <Link to="/cart" className="ml-auto mr-2">
              <button className="mt-1 py-3 px-3 text-white hover:text-black rounded-lg border-solid border-2 border-white hover:border-black">
                <i className="fas fa-cart-plus "></i> My cart
              </button>
            </Link>
          </nav>
        );
    }
}
