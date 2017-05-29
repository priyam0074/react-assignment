import React, { Component, PropTypes } from 'react';

import {browserHistory} from  'react-router';

export default class ListOfStudentComp extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }
clickHandler(Cid,Sid){
       browserHistory.push(`/studentsOfclass/`+Cid+`/studentReg/`+Sid);


}
doSearch(){
        var query=this.refs.searchInput.getDOMNode().value; // this is the search text
        this.props.doSearch(query);
    }
    render()
    { 
   var index = this.props.studentData.findIndex((object) =>{ 
            return object.classNumber == this.props.classId
          });
      const currentClass= this.props.studentData[index];

var listOfStudents = currentClass.studentRecord.map((object,index)=> {
    return (<li className = "list-group-item list-color"onClick={this.clickHandler.bind(this,this.props.classId,object.sid)}>
         <b className="color-text">
    Student Regno {object.sid}</b></li>);
})
        return(
            <div className="student-list table-header">
                <input type="text" className="input-bg" ref="searchInput" placeholder="Search Name" value={this.props.studentData} onChange={this.doSearch}></input>
                <ul className="list-group">
                {listOfStudents}
</ul>
            </div>
            );
    }
}