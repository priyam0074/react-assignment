import React, { Component, PropTypes } from 'react';
import SingleProductComponent from './SingleProductComponent'

export default class CartComponent extends Component {
    constructor(props) {
        super(props);
      
    }
    render() {
        

        var cartList = this.props.addData.map((item)=> {
            var id=item;
                        var index = this.props.items.findIndex((obj) => {return obj.id==id})
                        var currPost = this.props.items[index];
                       return (<SingleProductComponent currItem={currPost} /> );
       

       })
        return (
            <div>
                <h2> hidasd</h2>
                {cartList}
            </div>
        );
    }
}