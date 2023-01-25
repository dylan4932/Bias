import React from 'react';

import './index.css';
import Navigator from '../Navigator';


import {withRouter} from 'react-router' 

import Pagination from '@mui/material/Pagination';

import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';
import Forum from '../Forum';
import Contact_Paper from './Contact_Paper';
import { getBiasItems } from '../../actions/bias';


class Contact extends React.Component {
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
                <div className='adv'>
                    <Advertisment title='联系我们'/>
                </div>
                <div className='main-content'> 
                    <Contact_Paper />
                    <Sidebar biases={this.state.biases}/>
                </div> 
                <Pagination></Pagination>
            </div>
            
        )
    }
}

export default withRouter( Contact );