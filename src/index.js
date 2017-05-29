import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';


import ContainerComponent from './components/ContainerComponent';
import PresentationBox1 from './components/PresentationBox1';
import PresentationBox2 from './components/PresentationBox2';
import PresentationBox3 from './components/PresentationBox3';
import CartComponent from './components/CartComponent';

import studentData from './data/dummyData';

import './styles/chart.css'
import './styles/styles.css';
const store = configureStore({studentData: studentData});

render(
    <Provider store={store}>

		<Router history={browserHistory}>
			<Route path="/" component={ContainerComponent}>
				<IndexRoute component={PresentationBox1}> </IndexRoute>
                <Route path="/studentsOfclass/:Cid" component={PresentationBox2}> </Route>
                <Route path="/studentsOfclass/:Cid/studentReg/:Sid" component={PresentationBox3}> </Route>
                
			</Route>
			
		</Router>

		</Provider>,
    document.getElementById('app')
);
