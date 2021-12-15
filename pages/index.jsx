import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from 'components/ProductCard';
import Header from 'components/Header';
import VideoBackground from 'components/VideoBackground';
import sortProducts from 'lib/sortProducts';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: [], filters: [], hash: '#misc'};
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }
  handleCategoryClick() {
      const hash = window.location.hash;
      const filters = [];
      switch(hash) {
        case '#all':
          filters = [];
        case '#hoodies':
          filters = ['hoodie', 'sweater'];
          break;
        case '#tshirts':
          filters = ['tee'];
          break;
        case '#stickers':
          filters = ['sticker'];
          break;
        case '#hats':
          filters = ['hat']
          break;
        default:
          filters = [];
          break;
      }
      this.setState({filters, hash});
      console.log('hi');
  }
  componentDidMount() {
    this.setState({hash: window.location.hash});
    this.hashListener = window.addEventListener('hashchange', this.handleCategoryClick);
    axios.get('/api/products').then(res => {
      this.setState({products: res.data});
    });
  }
  render() {
    let products = this.state.products.filter(product => {
      if(this.state.filters.length === 0) {
        return true;
      }
      let hasCategory = false;
      this.state.filters.forEach(filter => {
        if(product.type.toLowerCase().includes(filter)) {
          hasCategory = true;
        }
      });
      return hasCategory;
    });
    products = sortProducts(products);
    let $productCards = products.map(product => (<ProductCard product={product}/>));
    return (
      <>
      <VideoBackground/>
      <Header controls hash={this.state.hash}></Header>
      <main>
        <div className="my-5 flex flex-col items-center text-white text-center space-y-5">
          <div className="flex flex-wrap justify-center items-center">
            { $productCards }
          </div>
        </div>
      </main>
      </>
    )
  }
}
