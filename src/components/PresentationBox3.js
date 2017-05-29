import React, { Component, PropTypes } from 'react';


import PresentationBox2 from './PresentationBox2';

export default class PresentationBox3 extends Component{
    constructor(props){
        super(props);
    }
    render()
    { 
      var classId = this.props.params.Cid;

    var studentId = this.props.params.Sid;
        return(
            <div>
            <PresentationBox2 studentId={studentId} {...this.props}/>
            </div>
            );
    }
}