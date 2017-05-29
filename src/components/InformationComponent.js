import React, { Component, PropTypes } from 'react';
//import BarChartComponent from './BarChartComponent.js';
import BarChart from 'react-bar-chart';

export default class InformationComponent extends Component{
    constructor(props){
        super(props);
    }
    render()
    { 
        var classindex = this.props.studentData.findIndex((object) =>{ 
            return object.classNumber == this.props.classId
          });
      const currentClass= this.props.studentData[classindex];

      var studentIndex = currentClass.studentRecord.findIndex((object)=>{
        return object.sid == this.props.studentId
      });
      const currentStudent = currentClass.studentRecord[studentIndex];
      const margin = {top: 20, right: 20, bottom: 30, left: 40};
      var barchart = [];
      var obj ={};
      const subject = ["maths", "English", "science"];
        for (var i=0;i< subject.length;i++){
            
             barchart.push({
                 text: subject[i],
                 value: currentStudent[subject[i]]
             });
       }
       var colors= ["red","blue","black"]
     

      return(
        <div className="row">
            <div className="col-md-12">
                <div className="row">
            <div className="col-md-12 horizontal-space">
                <h4 className="table-header">{this.props.studentId}'s Record </h4>
               <div className="padding-box">
                <ul>
                <li><b>DOB:</b> {currentStudent.dob} </li>
                <li><b>Name:</b> {currentStudent.name} </li>
                <li><b>GENDER:</b> {currentStudent.gender}</li>
                <li><b>PARENT'S NAME: </b>{currentStudent.parent}</li>
                </ul>
                </div>
            </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                   
            <div  style={{width: '100%'}}> 
                <BarChart ylabel='Quantity'
                  
                  width={500}
                  height={200}
                  margin={margin}
                  data={barchart}
                  
                  />
            </div>
        
                    </div>
                </div>
        </div>
        </div>
        );
    }
}