import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Shops.css';
import Product from './Product.js';

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiInfo: [],
      images: []
    }
  }

  componentDidMount() {
    this._getApiInformation()
  }

  _getApiInformation() {
    axios.get('https://zaragosa.herokuapp.com/HalusDesigns/hqluhr8ykdm8irqfjfh9rw8c', {
    })
    .then((response) => {
      let apiInfo = response.data.results
      this.setState({
        apiInfo: apiInfo
      })
      this._getApiImages();
      console.log(apiInfo);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _getApiImages() {
    var productImages = [];

    productImages = this.state.apiInfo.map((item, i) => {
      let listingId = item.listing_id;
      axios.get(`https://zaragosa.herokuapp.com/images/${listingId}/hqluhr8ykdm8irqfjfh9rw8c`, {

      }).then((response) => {
        let images = response.data.results;

        console.log('first Image: ', images[0]);
        this.state.images.push(images[0]);
        // for (var i=0; i < images.length; i++) {
        //   this.state.images.push(images[i]);
        // }

        this.setState({
          images: this.state.images
        })

      })
      .catch(function (error) {
        console.log(error);
      });

    });
  }

  render() {

    return (
      <div className="images-div">
        {
          _.map(this.state.images, (image, i) => {
            let listingId = image.listing_id;
            let item = _.find(this.state.apiInfo, { listing_id : listingId })
            return <Product key={i} item={item} image={image} />;
          })
        }
      </div>
    )
  }
}


export default Shop;

// class Shop extends Component {
//   render(){
//     return(
//       <div className="personal-shops">
//         <Link to="shop/clint" className="name-links">clint</Link>
//         <Link to="shop/hattie" className="name-links">hattie</Link>
//         <Link to="shop/raud" className="name-links">raud</Link>
//         {this.props.children}
//       </div>
//     )
//   }
// }
//
// export default Shop;
