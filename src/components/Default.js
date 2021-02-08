import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
          <div className="grid grid-rows-1 mx-auto p-2 justify-items-center">
            <h1 className="text-8xl">404</h1>
            <h3 className="uppercase text-5xl">Page not found</h3>
            <h3 className="uppercase text-5xl">The URL <span className="text-red-600">{this.props.location.pathname}</span> does not exist</h3>
          </div>
        );
    }
}
