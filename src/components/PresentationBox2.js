import React, { Component, PropTypes } from 'react';

import ListOfClassComp from './ListOfClassComp'
import ListOfStudentComp from './ListOfStudentComp'

import InformationComponent from './InformationComponent';

export default class PresentationBox2 extends Component{
    constructor(props){
        super(props);
    }
    render()
    { 
      var classId = this.props.params.Cid;
      if(this.props.studentId){
        return(
            <div className ="row">
            <div className="col-md-12">
                <div className="row">
                <aside className="col-md-2 no-padding aside-color"> 
                    <ListOfClassComp {...this.props}/>
                </aside>
                <section className="col-md-10  no-padding">
                    <h3 className="text-center">Class {classId} Records </h3>
                <div className="col-md-4">
                    <ListOfStudentComp className="pull-left" classId={classId} {...this.props}/>
                    </div>
                   
                <div className="col-md-6">
            <InformationComponent classId={classId} studentId={this.props.studentId} {...this.props}/>
                    </div>
                </section>

           
        </div>
            </div>
            </div>
            );
        }
        else{
             return(
 <div className ="row">
            <div className="col-md-12">
                <div className="row">
                <aside className="col-md-2 no-padding aside-color">
                    <ListOfClassComp {...this.props}/>
                </aside>
                <section className="col-md-10 no-padding">
                    <h3 className="text-center">Class {classId} Records </h3>
                    <div className="col-md-4">
                    <ListOfStudentComp className="pull-left" classId={classId} {...this.props}/>
                    </div>
                    <div className ="col-md-8"></div>
                </section>
</div>
</div>
            </div>
            );
        }
    }
}