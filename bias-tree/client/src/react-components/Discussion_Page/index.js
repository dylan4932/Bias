import React from 'react';

import './index.css';
import Content from '../Main_Content';
import Navigator from '../Navigator';


import {withRouter} from 'react-router' 

import Pagination from '@mui/material/Pagination';

import { getBiasItems } from "../../actions/bias";
import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';
import Forum from '../Forum';


class Discussion extends React.Component {
    constructor(props) {
        super(props) 
        
    }
    state={
        bias:[]
    }
    
    render(){
        return (
            <div className='homepage'>
                <Navigator />
                <div class='adv'>
                    <Advertisment title='论坛'/>
                </div>
                <div class='main-content'> 
                    <Forum bias={this.state.bias} />
                    <Sidebar/>
                </div> 
                <Pagination></Pagination>
            </div>
            
        )
    }
}

export default withRouter( Discussion );