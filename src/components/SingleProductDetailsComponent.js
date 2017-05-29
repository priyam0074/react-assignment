import React, { Component, PropTypes } from 'react';
import {browserHistory} from  'react-router';
import SingleProductComponent from './SingleProductComponent'
export default class SingleProductDetailsComponent extends Component {
   constructor(props){
       super(props);
   
   }
   goToCart(id) {
       browserHistory.push(`/cart/insideCart`)
   }
  addDataToCart(id) {
        this.props.addDataToStore(id);
  }
   render() {
      var id = this.props.params.id;
    //   console.log(this.props.items);
        var index = this.props.items.findIndex((post) =>{ 
            return post.id == id});
			const currPost= this.props.items[index];
       return (
           <div>
           <button className="btn btn-info btn-sm pull-right" onClick={this.goToCart.bind(this,id)} >CART: </button>         
        <SingleProductComponent currItem={currPost} />
           <button className="btn btn-info btn-md" onClick={this.addDataToCart.bind(this,id)}> ADD TO CART </button>
           </div>
       );
   }


}