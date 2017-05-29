import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { itemsFetchData, addDataToStore } from '../actions/items';



class ContainerComponent extends Component {

    render() {

        return ( 
            <div className="container-fluid">
                <div className="row">
            <header className="text-center col-md-12">
                <span className="text-position"><b>Welcome to e-website of school ABC </b></span>
            </header>
               </div>
            { React.cloneElement(this.props.children, this.props) }
            </div>
        );
    }
}

ContainerComponent.propTypes = {
    studentData: PropTypes.array.isRequired,
    
};

const mapStateToProps = (state) => {
    return {
       studentData : state.studentData
    }
};



export default connect(mapStateToProps)(ContainerComponent);