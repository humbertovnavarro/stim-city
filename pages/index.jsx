import React from 'react';
import axios from 'axios';
import ProductCard from 'components/ProductCard';
import Header from 'components/Header';
import VideoBackground from 'components/VideoBackground';
import sortProducts from 'lib/sortProducts';
import Footer from 'components/Footer';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: [], filters: [], hash: '#all'};
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }
  handleCategoryClick() {
      const hash = window.location.hash;
      if(hash == this.state.hash) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
      let filters = [];
      switch(hash) {
        case '#all':
          filters = [];
          break;
        case '#hoodies':
          filters = ['hoodie', 'sweater'];
          break;
        case '#tshirts':
          filters = ['tee'];
          break;
        case '#stickers':
          filters = ['sticker'];
          break;
        case '#accessories':
          filters = ['case', 'sunglasses', 'watch', 'sticker', 'hat'];
          break;
        default:
          filters = [];
          break;
      }
      this.setState({filters, hash});
      console.log(hash);
      console.log(filters);
  }
  componentDidMount() {
    this.setState({hash: window.location.hash});
    this.hashListener = window.addEventListener('hashchange', this.handleCategoryClick);
    axios.get('/api/products').then(res => {
      this.setState({products: res.data});
    });
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleCategoryClick);
  }
  render() {
    let { products, filters, hash } = this.state;
    if(filters.length > 0)
      products = products.filter(product => {
        let hasCategory = false;
        filters.forEach(filter => {
          if(product.type.toLowerCase().includes(filter) || product.title.toLowerCase().includes(filter)) {
            hasCategory = true;
          }
        });
        return hasCategory;
    });
    products = sortProducts(products);
    let $productCards = products.map((product, index) => (<ProductCard key={index} product={product}/>));
    return (
      <>
      <Footer/>
      <VideoBackground/>
      <Header controls hash={hash}></Header>
      <main className='grow flex flex-col item-center justify-center w-full mb-20'>
          <img src="/banner.png" alt="Banner" className="
            rounded-lg
            shadow-lg
            border-violet-500
            h-32
            mt-5
            rounded-md
            ml-auto
            mr-auto
            lg:w-3/5
            lg:h-64
            bg-violet-500
          "></img>
        <div className="flex flex-col items-center text-white text-center space-y-5">
          <div className="flex flex-wrap justify-center items-center">
            { $productCards }
          </div>
        </div>
      </main>
      </>
    )
  }
}
