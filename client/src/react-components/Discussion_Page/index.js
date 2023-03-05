import React from 'react';

import './index.css';
import Navigator from '../Navigator';


import {withRouter} from 'react-router' 

import Pagination from '@mui/material/Pagination';
import Sidebar from '../Sidebar';
import Advertisment from '../Advertisment';
import Forum from '../Forum_Page';
import { getComments } from "../../actions/comment";
import { getBiasItems } from '../../actions/bias';

class Discussion extends React.Component {
    constructor(props) {
        super(props) 
        getComments(this);
        getBiasItems(this);
    }
    state={
        commentsToShow:[],
        biases: []
    }
    
    render(){
        return (
            <div className='homepage'>
                <Navigator />
                <div class='adv'>
                    <Advertisment title='论坛'/>
                </div>
                <div class='main-content'> 
                    <Forum commentsToShow={this.state.commentsToShow} />
                    <Sidebar biases={this.state.biases}/>
                </div> 
                <Pagination></Pagination>
            </div>
            
        )
    }
}

export default withRouter( Discussion );