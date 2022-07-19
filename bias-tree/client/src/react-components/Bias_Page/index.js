import React from 'react';

import './index.css';
import Content from '../Main_Content';
import Navigator from '../Navigator';


import {withRouter} from 'react-router' 

import Pagination from '@mui/material/Pagination';

import { getBiasItems } from "../../actions/bias";
import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';


class BiasList extends React.Component {
    constructor(props) {
        super(props)
        getBiasItems(this)   
    }
    state={
        bias:[]
    }
    
    render(){
          
        return (
            <div className='homepage'>
                <Navigator />
                <div className='adv'>
                    <Advertisment title='偏倚汇总'/>
                </div>
                <div className='main-content'> 
                    <Content bias={this.state.bias} />
                    <Sidebar/>
                </div> 
                <Pagination></Pagination>
            </div>
            
        )
    }
}

export default withRouter(BiasList);