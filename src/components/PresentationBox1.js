import React, { Component, PropTypes } from 'react';

import ListOfClassComp from './ListOfClassComp'

export default class PresentationBox1 extends Component{
    constructor(props){
        super(props);
    }
    render()
    { 
        return(
            
            <div className ="row">
            <div className="col-md-12">
                <div className="row">
                <aside className="col-md-2 no-padding aside-color"> 
                    <ListOfClassComp {...this.props}/>

                </aside>
                <section className="col-md-10  no-padding">
                    <div className="border-div">
                    <span className="section-elements"> This website helps you to see marks of the students in our school
                    </span>
                    </div>
                </section>
               </div>
            </div>
            </div>
            );
    }
}