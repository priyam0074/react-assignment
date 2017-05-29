import React, { Component, PropTypes } from 'react';

import {Link} from 'react-router';


export default class SingleProductComponent extends Component {
   constructor(props){
       super(props);
   }
  
   render() {
      
       return (
           
        <div className="col-xs-4" style={{height:200}}  >
           
            <h3 className="col-xs-12" > {this.props.currItem.title} </h3>
			<div className="grid-photo-wrap col-xs-4 ">
				<Link to={`/spdc/${this.props.currItem.id}`} >
                <img src={this.props.currItem.url}  className="col-xs-offset-12" height="100px" width="100px"/>
				</Link>
		
            </div>
		</div>	
       );
   }


}