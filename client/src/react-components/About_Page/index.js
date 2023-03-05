import React from 'react';

import './index.css';
import Navigator from '../Navigator';


import {withRouter} from 'react-router' 

import Pagination from '@mui/material/Pagination';

import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';
import Forum from '../Forum_Page';
import About_Paper from './About_Paper';
import { getBiasItems } from '../../actions/bias';


class About extends React.Component {
    constructor(props) {
        super(props) 
        getBiasItems(this)
    }
    state={
        biases: []
    }
    
    render(){
        return (
            <div className='homepage'>
                <Navigator />
                <div class='adv'>
                    <Advertisment title='关于我们'/>
                </div>
                <div class='main-content'> 
                    <About_Paper />
                    <Sidebar biases={this.state.biases}/>
                </div> 
                <Pagination></Pagination>
            </div>
            
        )
    }
}

export default withRouter( About );