import React, { Component, PropTypes } from 'react';

import {browserHistory} from  'react-router';
export default class ListOfClassComp extends Component{
    constructor(props){
        super(props);
    }
    clickHandler(id){
        console.log(id);
       browserHistory.push(`/studentsOfclass/`+id);
    }


    render()
    { 
        var listOfClasses = this.props.studentData.map((object,index)=> {
                    return (<li className="classes-No" onClick={this.clickHandler.bind(this,object.classNumber)}>Class {object.classNumber}</li>)
                });
        return(
            <div>
                <ul>
  {listOfClasses}
</ul>
            </div>
            );
    }
}